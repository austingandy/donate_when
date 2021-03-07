var mongoose = require('mongoose');
import Validator from 'validatorjs';

var Schema = mongoose.Schema;
var twitterTriggerSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true}
});

twitterTriggerSchema.statistics.validateCreate = (obj) => {
    let rules = {
        name: 'required',
        description: 'required',
    };
    return new Validator(obj, rules);
}

export default mongoose.model('TwitterTrigger', twitterTriggerSchema);