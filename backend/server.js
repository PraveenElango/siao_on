const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

const uri = "mongodb+srv://PraveenElango:orbital2020@siaoon.xfqrw.mongodb.net/SiaoOn?retryWrites=true&w=majority"

mongoose.connect(uri, { useNewUrlParser: true });
const db = mongoose.connection;

db.once('open',
    () => console.log("MongoDB database connection established successfully!"));

db.on('error', err => {
    console.error('connection error:', err)
});



const Question = require('./models/questions');
const Option = require('./models/Options')

function createOption(option) {
    return new Option(option);
}
function saveQuestion(question) {
    return new Question(question).save();
}

saveQuestion({
    question: "What is the time complexity of insertion in a linked list?",
    options: createOption({
        option_A: "O(1)",
        option_B: "O(n)",
        option_C: "O(n^2)",
        option_D: "O(log n)"     
    }),
    correct_answer: "O(1)"
})
    .then(doc => { console.log(doc) })
    .catch(error => { console.error(error) });



app.listen(PORT, function () {
    console.log("Server running on Port: " + PORT);
})


