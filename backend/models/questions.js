const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    question: { type: String, unique: true },
    options: {
        type: Array,
    },
    correct_answer: { type: String, unique: true }
})


module.exports = mongoose.model('Question', questionSchema)

// {
//     type:[{
//             optionA: { type: String, unique: true},
//             optionB: { type: String, unique: true},
//             optionC: { type: String, unique: true},
//             optionD: { type: String, unique: true},
//         // type: Map,
//         // of: String
//         }]},
// var questionModel = mongoose.model('CustomerModel', {
//     question: { type: String, unique: true},
//     options: {
//         optionA: { type: String, unique: true},
//         optionB: { type: String, unique: true},
//         optionC: { type: String, unique: true},
//         optionD: { type: String, unique: true},
//     },
//     correct_answer: { type: String, unique: true}
// })


// module.exports = questionModel

