import 'react-native-gesture-handler';
import * as React from 'react';
import axios from 'axios';
// import Alert from "./Components/Alert";
import ModalEnhanced from "./Components/ModalEnhanced";
import { View, TouchableOpacity, Text } from 'react-native'


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

    // componentDidMount(){
    //     axios.get('http://localhost:4000/')
    //         .then(response=>{
    //             console.log(response);
    //             this.setState({
    //                 question: response.data.question,
    //                 optionA: response.data.options.optionA,
    //                 optionB: response.data.options.optionB,
    //                 optionC: response.data.options.optionC,
    //                 optionD: response.data.options.optionD,
    //             })
    //         })
    //         .catch(error => console.log(error));
    // }

    render() {
        return(
            // <View>
            //     <Alert />
            //     <Text>Question:</Text>
            //     <Text>{this.state.question}</Text>
            //     <Text>{this.state.optionA}</Text>
            //     <Text>{this.state.optionB}</Text>
            //     <Text>{this.state.optionC}</Text>
            //     <Text>{this.state.optionD}</Text>
            // </View>
            // <Alert />
            <ModalEnhanced text="Hello" />
            
        );
    }
}

export default QuestionDisplay;