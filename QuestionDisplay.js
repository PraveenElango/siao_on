import 'react-native-gesture-handler';
import * as React from 'react';
import axios from 'axios';
import ModalEnhanced from "./Components/ModalEnhanced";
import { View, TouchableOpacity, Text, StyleSheet, Button } from 'react-native';
import BackButton from './Components/BackButton';

class QuestionDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            question: null,
            optionA: null,
            optionB: null,
            optionC: null,
            optionD: null,
            correctAnswer: null,
            explanation: null,
            showAlert: false,
            alertText: null,
            fourOptions: true
        }
    }

    componentDidMount() {
        this.renderText();
    }

    renderText() {
        // console.log(this.state.count)
        // let url = 'http://localhost:4000/question/' + this.state.count.toString();
        let url = ' https://siaoonbackend.herokuapp.com/question/' + this.state.count.toString();

        console.log(url);
        axios.get(url)
            .then(response => {
                // console.log(response);
                let four = response.data.options.optionC != "";
                this.setState({
                    question: response.data.question,
                    optionA: response.data.options.optionA,
                    optionB: response.data.options.optionB,
                    optionC: response.data.options.optionC,
                    optionD: response.data.options.optionD,
                    correctAnswer: response.data.correct_answer,
                    explanation: response.data.explanation,
                    count: this.state.count + 1,
                    fourOptions: four
                })
            })
            .catch(error => console.log(error));
    }

    checkAnswer(option) {
        if (option == this.state.correctAnswer) {
            this.setState({
                alertText: "Correct! \n \n" + this.state.explanation,
                showAlert: true
            })
        } else {
            this.setState({
                alertText: "Incorrect! Please Try Again!",
                showAlert: true
            })
        }
    }

    renderOptionA() {
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity
                    style={styles.done}
                    onPress={() => this.checkAnswer(this.state.optionA)}>
                    <Text>{this.state.optionA}</Text>
                </TouchableOpacity>
                <ModalEnhanced
                    showAlert={this.state.showAlert}
                    closeAlert={() => this.setState({ showAlert: false })}
                    text={this.state.alertText}
                />
            </View>
        )
    }

    renderOptionB() {
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity
                    style={styles.done}
                    onPress={() => { this.checkAnswer(this.state.optionB) }}>
                    <Text>{this.state.optionB}</Text>
                </TouchableOpacity>
                <ModalEnhanced
                    showAlert={this.state.showAlert}
                    closeAlert={() => this.setState({ showAlert: false })}
                    text={this.state.alertText}
                />
            </View>
        )
    }

    renderOptionC() {
        if(this.state.fourOptions) {
            return (
                <View style={{ flex: 1 }}>
                    <TouchableOpacity
                        style={styles.done}
                        onPress={() => { this.checkAnswer(this.state.optionC) }}>
                        <Text>{this.state.optionC}</Text>
                    </TouchableOpacity>
                    <ModalEnhanced
                        showAlert={this.state.showAlert}
                        closeAlert={() => this.setState({ showAlert: false })}
                        text={this.state.alertText}
                    />
                </View>
            )
        }
    }

    renderOptionD() {
        if(this.state.fourOptions) {
            return (
                <View style={{ flex: 1 }}>
                    <TouchableOpacity
                        style={styles.done}
                        onPress={() => this.checkAnswer(this.state.optionD)}>
                        <Text>{this.state.optionD}</Text>
                    </TouchableOpacity>
                    <ModalEnhanced
                        showAlert={this.state.showAlert}
                        closeAlert={() => this.setState({ showAlert: false })}
                        text={this.state.alertText}
                    />
                </View>
            )
        }
    }

    render() {

        return (
            <View style={{ flex: 1 }}>

                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <View style={{ flex: 1 }}></View>
                    <Text style={{ fontSize: 18, textAlign: 'center' }}>{this.state.question}</Text>
                    <View style={{ flex: 1 }}></View>
                </View>

                <View style={{ flex: 4, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 3 }}>
                        {this.renderOptionA()}
                        <View style={{ flex: 0.5 }}></View>
                        {this.renderOptionB()}
                        <View style={{ flex: 0.5 }}></View>
                        {this.renderOptionC()}
                        <View style={{ flex: 0.5 }}></View>
                        {this.renderOptionD()}
                        <View style={{ flex: 0.5 }}></View>
                    </View>
                    <View style={{ flex: 1 }}></View>

                </View>

                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 2 }}>
                        <BackButton title='Exit' to='Topics' />
                    </View>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 2 }}>
                        <Button color='black' title='Next Question' onPress={() => {
                            return this.renderText();
                        }} />
                    </View>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                </View>
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