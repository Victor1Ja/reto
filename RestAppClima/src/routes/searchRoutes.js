const { Router } = require('express');
const { searchCity, getCityWeather, getSearchHistory } = require('../contollers/searchController');

const router = Router();

router.post('/search', searchCity);
router.get('/weather', getCityWeather);
router.get('/history', getSearchHistory);

module.exports = router;
