import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions, Image } from "react-native";
import Draggable from './Draggable';

// const numToSize = {
//     '1' : '5',
//     '2': '6',
//     '3': '9',
//     '4': '12',
//     '5': '13',
//     '6': '14'
// }
export default class ShoeArranging extends Component {


    
    render() {
        return (
            <View style={styles.mainContainer}>
                {/* <View style={{ flex: 1, backgroundColor: '#00334d' }}> */}
                <Image
                    source={require('../assets/Shoerack.png')}
                    style={{ flex: 1 }}
                    resizeMode='stretch'>
                </Image>
                {/* </View> */}
                <View style={styles.ballContainer} />
                <View style={styles.row}>
                    <Draggable id={this.props.shoe2} onComplete={() => this.props.onComplete(this.props.shoe1 - 1)}/>
                    <Draggable id={this.props.shoe1} onComplete={() => this.props.onComplete(this.props.shoe2 - 1)}/>
                    <Draggable id={this.props.shoe3} onComplete={() => this.props.onComplete(this.props.shoe3 - 1)}/>
                </View>
            </View >
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
        justifyContent: 'space-between',
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