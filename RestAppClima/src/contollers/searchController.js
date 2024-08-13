const searchService = require('../services/searchService');

const searchCity = async (req, res) => {
  const { term } = req.body;
  try {
    const cities = await searchService.searchCity(term);
    if (cities.length === 0) {
      return res.status(404).json({ message: 'No cities found' });
    }
    await searchService.saveSearchTerm(term);
    res.json(cities);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

const getCityWeather = async (req, res) => {
  const { lat, lon } = req.query;
  try {
    const weather = await searchService.getCityWeather(lat, lon);
    if (!weather) {
      return res.status(404).json({ message: 'Weather not found' });
    }
    res.json(weather);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

const getSearchHistory = async (req, res) => {
  try {
    const history = await searchService.getSearchHistory();
    res.json(history);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = { searchCity, getCityWeather, getSearchHistory };
