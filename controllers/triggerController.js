const { body,validationResult } = require("express-validator");

/**
 * The TriggerController class where all trigger controllers inheret or override functionality
 * defined herein
 * NOTE: this code all came from here: https://blog.cloudboost.io/node-express-controller-inheritance-2d5b2661ee7d
 * I don't know what I'm doing whatsoever... yet
 */

class TriggerController {
    constructor(model) {
        this.create.bind(this);
    }

    create(req, res, next) {
        return res;
    }

    search_create_get(req, res, next) {
        res.send('NOT IMPLEMENTED: search_create_get');
    }

    search_results_get(req, res, next) {
        res.send('NOT IMPLEMENTED: search_results_get');
    }
}

module.exports = TriggerController;