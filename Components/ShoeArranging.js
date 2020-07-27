import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions, Image } from "react-native";
import Draggable from './Draggable';

export default class ShoeArranging extends Component {

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={{ flex: 1 }}>
                    <Image
                        source={this.props.type != 'shoeRack' 
                        ? require('../assets/BSTImages/Shoerack.png')
                        : require('../assets/BSTImages/RackPlacement.png')}
                        style={{ flex: 1, width:undefined, height: undefined }} >
                    </Image>
                </View>
                <View style={styles.ballContainer} />
                <View style={styles.row}>
                    <Draggable
                        type={this.props.type}
                        width={this.props.width}
                        height={this.props.height}
                        id={this.props.order[0]}
                        onComplete={() => this.props.onComplete(this.props.order[0], this.props.type)}
                    />
                    <Draggable
                        type={this.props.type}
                        width={this.props.width}
                        height={this.props.height}
                        id={this.props.order[1]}
                        onComplete={() => this.props.onComplete(this.props.order[1], this.props.type)}
                    />
                    <Draggable
                        type={this.props.type}
                        height={this.props.height}
                        width={this.props.width}
                        id={this.props.order[2]}
                        onComplete={() => this.props.onComplete(this.props.order[2], this.props.type)}
                    />
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
        flex: 1,
        alignContent: 'center'
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