var TriggerController = require('../controllers/triggerController');
const { body,validationResult } = require("express-validator");

class WeatherController extends TriggerController {
    constructor(model) {
        super(model);
    }

    search_create_get(req, res, next) {
        res.render('weather_search_form', {title: 'Weather Query Form'});
    }

    /** This method will render the weather search results page for a search query specified in the weather search form.
     *  Note that this is where we'll be invoking the weather API to actually get us search results.
     *  Not yet properly implemented
     */
    search_results_get(req, res, next) {
        res.render('weather_search_results', {title: 'Weather Results', city: req.query.city});
    }
};

module.exports = WeatherController;