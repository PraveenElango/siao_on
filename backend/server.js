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

function saveQuestion(question) {
    return new Question(question).save();
}


app.get("/", function (req, res) {
    Question.find({}, (err, qn) => {
        if(err) {
            console.log(err);
        } else{ 
            res.json(qn[0]);
        }
    })
    
});

app.listen(PORT, function () {
    console.log("Server running on Port: " + PORT);
})



saveQuestion({
    question: "What is the time complexity of insertion in a linked list?",
    options: {
        optionA: "O(1)",
        optionB: "O(n)",
        optionC: "O(n^2)",
        optionD: "O(log n)"     
    },
    correct_answer: "O(1)",
    topic: "linked-list"
    
})
    .then(doc => { console.log(doc) })
    .catch(error => { console.error(error) });


// Question.deleteOne({}, err => {
//     if (err) {
//         console.log(err);
//     }
// });

// Question.find({}, (err, qn) => {
//     if(err) {
//         console.log(err)
//     } else {
//         console.log(qn)
//     }
// });

