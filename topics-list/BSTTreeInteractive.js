import * as React from 'react';
import { View, Text, StyleSheet } from "react-native";
import BSTNodeUponClicked from './BSTNodeUponClicked';

class BSTTreeInteractive extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStage: 0,
            steps: [11, 6, 9],
            revealed: [false, false, false, false, false, false, false]
        }
    }

    handlePress(i, index) {
        if (i != 11 && this.state.currentStage == 0) {
            console.log("start at the node");
            // return false;
        } else if (i != 6 && i != 13 && this.state.currentStage == 1) {
            console.log("Remember, the next node is directly connected to the previously selected node");
            // return false;
        } else if (i == 13 && this.state.currentStage == 2) {
            console.log("Remember, the next node is directly connected to the previously selected node");
            // return false;
        } else if (i != this.state.steps[this.state.currentStage]) {
            console.log("wrong! try again")
            // return false;
        } else {
            console.log("correct!");

            let arr = this.state.revealed.slice();
            arr[index] = true;

            if (arr[0] && arr[1] && arr[4]) {
                console.log("completed");
                this.props.onComplete();
            }

            this.setState(state => {
                return {
                    currentStage: state.currentStage + 1,
                    steps: state.steps,
                    revealed: arr
                }
            });

        }
    }


    renderNode(i, index) {
        return (
            <BSTNodeUponClicked
                id={i}
                onPress={() => this.handlePress(i, index)}
                revealText={this.state.revealed[index]}
            />);
    }

    render() {
        return (
            // <Image style={{flex: 1}}>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 3 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 1 }}>
                        {this.renderNode(11, 0)}
                    </View>
                    <View style={{ flex: 3 }}>
                        {/* BLANK */}
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    {/* BLANK */}
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 1 }}>
                        {this.renderNode(6, 1)}
                    </View>
                    <View style={{ flex: 2 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 1 }}>
                        {this.renderNode(13, 2)}
                    </View>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    {/* BLANK */}
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        {this.renderNode(5, 3)}
                    </View>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 1 }}>
                        {this.renderNode(9, 4)}
                    </View>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 1 }}>
                        {this.renderNode(12, 5)}
                    </View>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 1 }}>
                        {this.renderNode(14, 6)}
                    </View>
                </View>
            </View>
            // </Image>
        )
    }
}

export default BSTTreeInteractive;