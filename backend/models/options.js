const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const optionSchema = new Schema({
    optionA: { type: String, unique: true },
    optionB: { type: String, unique: true },
    optionC: { type: String, unique: true },
    optionD: { type: String, unique: true },
});

module.expomts = ongoose.model('Options', optionSchema, 'Options');