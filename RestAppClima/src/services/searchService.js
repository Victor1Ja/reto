const axios = require('axios');
const searchRepository = require('../repositories/searchRepository');

class SearchService {
  constructor() {
    this.mapboxParams = {
      'access_token': process.env.MAPBOX_KEY,
      'limit': 5,
      'language': 'es'
    };
    this.weatherParams = {
      appid: process.env.WEATHER_KEY,
      units: 'metric',
      lang: 'es'
    };
  }

  async searchCity(term) {
    try {
      const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${term}.json?`,
        params: this.mapboxParams
      });
      const response = await instance.get();
      return response.data.features.map(l => ({
        id: l.id,
        name: l.place_name,
        latitude: l.center[1],
        longitude: l.center[0]
      }));
    } catch (error) {
      return [];
    }
  }

  async getCityWeather(lat, lon) {
    try {
      const instance = axios.create({
        baseURL: `http://api.openweathermap.org/data/2.5/weather`,
        params: { ...this.weatherParams, lat, lon }
      });
      const response = await instance.get();
      const { weather, main } = response.data;
      return {
        description: weather[0].description,
        min_temp: main.temp_min,
        max_temp: main.temp_max,
        temp: main.temp
      };
    } catch (error) {
      return null;
    }
  }

  async saveSearchTerm(term) {
    return await searchRepository.addSearchTerm(term);
  }

  async getSearchHistory() {
    return await searchRepository.getSearchHistory();
  }
}

module.exports = new SearchService();
