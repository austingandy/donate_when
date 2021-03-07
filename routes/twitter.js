var express = require('express');
var router = express.Router();
var twitter_controller = require('../controllers/twitterTriggerController');

router.get('/', function(req, res, next) {
    res.render('twitter');
});

router.post('/', twitter_controller.twitter_post_create)