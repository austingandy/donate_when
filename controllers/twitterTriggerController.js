var TriggerController = require('../controllers/triggerController');
const { body,validationResult } = require("express-validator");
var Twitter = require('twitter');
var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    bearer_token: process.env.TWITTER_BEARER_TOKEN,
  });

class TwitterTrigger extends TriggerController {
    constructor(model) {
        super(model);
    }

    search_create_get(req, res, next) {
        res.render('twitter_search_form', {title: 'Twitter Search Form'});
    }

    /** This method will render the twitter search results page for a search query specified in the twitter search form.
     *  Note that this is where we'll be invoking the twitter API to actually get us search results.
     */
    search_results_get(req, res, next) {
        var username = req.query.username.replace('@', '');
        var phrase = req.query.phrase;
        var include_rt = (undefined !== req.query.include_rt && req.query.include_rt === 'on') ? true : false;
        var query = "\"" + phrase + "\" from:@" + username;
        if (!include_rt) {
            query += " " + "-filter:retweets"
        }
        client.get('search/tweets', {q:query, results:10}, function(error, tweets, response) {
            if(error) next(error);
            res.render('twitter_search_results', {title: 'Twitter Results', username: username, tweets: tweets, include_rt: include_rt});
        });
    }
};

module.exports = TwitterTrigger;