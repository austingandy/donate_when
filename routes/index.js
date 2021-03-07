var express = require('express');
var router = express.Router();
var TwitterTriggerController = require('../controllers/twitterTriggerController');
var WeatherTriggerController = require('../controllers/weatherTriggerController');
var twitter_trigger = new TwitterTriggerController();
var weather_trigger = new WeatherTriggerController();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Donate When', time: Date.now().toString() });
});

router.get('/about/', function(req, res, next) {
  res.render('about', {title: 'Donate When', time: Date.now().toString()});
});

router.get('/twitter_search/', twitter_trigger.search_create_get);

router.get('/twitter_search_results/', twitter_trigger.search_results_get);

router.get('/weather_search/', weather_trigger.search_create_get);

router.get('/weather_search_results/', weather_trigger.search_results_get);

module.exports = router;