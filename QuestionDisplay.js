import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, StyleSheet } from "react-native";
// import { Link } from 'react-router-dom';
import axios from 'axios';

class QuestionDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: null,
            optionA: null,
            optionB: null,
            optionC: null,
            optionD: null,
            correctAnswer: null
        }
    }

    componentDidMount(){
        axios.get('http://localhost:4000/')
            .then(response=>{
                console.log(response);
                this.setState({
                    question: response.data.question,
                    optionA: response.data.options.optionA,
                    optionB: response.data.options.optionB,
                    optionC: response.data.options.optionC,
                    optionD: response.data.options.optionD,
                })
            })
            .catch(error => console.log(error));
    }

    render() {
        return(
            <View>
                <Text>Question:</Text>
                <Text>{this.state.question}</Text>
                <Text>{this.state.optionA}</Text>
                <Text>{this.state.optionB}</Text>
                <Text>{this.state.optionC}</Text>
                <Text>{this.state.optionD}</Text>
            </View>
        );
    }
}

export default QuestionDisplay;