var TriggerController = require('../controllers/triggerController');
const { body,validationResult } = require("express-validator");

class WeatherController extends TriggerController {
    constructor() {
        super();
    }

    search_create_get(req, res, next) {
        res.render('weather_search_form', {title: 'Weather Query Form'});
    }

    /** This method will render the twitter search results page for a search query specified in the twitter search form.
     *  Note that this is where we'll be invoking the twitter API to actually get us search results.
     */
    search_results_get(req, res, next) {
        res.render('weather_search_results', {title: 'Weather Results', city: req.query.city});
    }
};

module.exports = WeatherController;