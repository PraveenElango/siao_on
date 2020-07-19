import 'react-native-gesture-handler';
import * as React from 'react';
import axios from 'axios';
// import ModalEnhanced from "./Components/ModalEnhanced";
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import BackButton from './Components/BackButton';

class QuestionDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: null,
            optionA: null,
            optionB: null,
            optionC: null,
            optionD: null,
            correctAnswer: null,
        }
    }

    // componentDidMount() {
    //     axios.get('http://localhost:4000/')
    //         .then(response => {
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
        return (
            <View style={{ flex: 1 }}>
                <Text>Question:</Text>
                
                    {/* <Text>{this.state.question}</Text>
                
                <TouchableOpacity
                    style={styles.done}>
                    {this.state.optionA}
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.done}>
                    {this.state.optionB}
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.done}>
                    {this.state.optionC}
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.done}>
                    {this.state.optionD}
                </TouchableOpacity> */}


                <BackButton title='Back' to='Topics' />
                <BackButton title='Next' />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    done: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#07a321',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderWidth: 2,
        borderColor: 'black'
    }
})
export default QuestionDisplay;