import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import Draggable from './Draggable';

export default class ShoeArranging extends Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={{ flex: 1, backgroundColor: '#00334d' }}>
                    <Text style={styles.text}>Drop them here!</Text>
                </View>
                <View style={styles.ballContainer} />
                <View style={styles.row}>
                    <Draggable id={this.props.shoe1} />
                    <Draggable id={this.props.shoe2} />
                    <Draggable id={this.props.shoe3} />
                </View>
            </View>
        );
    }
}

const deviceDisplay = Dimensions.get("window");
const maxHeight = deviceDisplay.height;
const maxWidth = deviceDisplay.width;
let CIRCLE_RADIUS = 30;
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    ballContainer: {
        flex: 1
    },
    circle: {
        backgroundColor: "skyblue",
        width: CIRCLE_RADIUS * 2,
        height: CIRCLE_RADIUS * 2,
        borderRadius: CIRCLE_RADIUS
    },
    row: {
        flexDirection: "row",
        flex: 1
    },
    dropZone: {
        height: (1 / 3) * maxHeight,
        backgroundColor: "#00334d"
    },
    text: {
        marginTop: 25,
        marginLeft: 5,
        marginRight: 5,
        textAlign: "center",
        color: "#fff",
        fontSize: 25,
        fontWeight: "bold"
    }
});