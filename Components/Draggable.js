import React, { Component } from "react";
import { StyleSheet, View, Text, PanResponder, Animated, Dimensions, Easing } from "react-native";

const deviceDisplay = Dimensions.get("window");
const maxHeight = deviceDisplay.height;
const maxWidth = deviceDisplay.width;

class Draggable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isDraggable: true,
            dropAreaValues: null,
            pan: new Animated.ValueXY(),
            ended: false,
        };
    }

    componentWillMount() {
        this._val = { x: 0, y: 0 }
        this.state.pan.addListener((value) => this._val = value);

        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (e, gesture) => true,
            onMoveShouldSetPanResponder: () => !this.state.ended,
            onPanResponderGrant: (e, gesture) => {
                this.state.pan.setOffset({
                    x: this._val.x,
                    y: this._val.y
                })
                this.state.pan.setValue({ x: 0, y: 0 })
            },
            onPanResponderMove: Animated.event([
                null, { dx: this.state.pan.x, dy: this.state.pan.y }
            ]),
            onPanResponderRelease: (e, gesture) => {
                if (this.isDropArea(gesture, this.props.id)) {
                    console.log("Dropped correctly");
                    this.setState({
                        ended: true
                    })
                } else {
                    console.log("Dropped incorrectly");
                    Animated.timing(this.state.pan, {
                        toValue: 0,
                        easing: Easing.back(),
                        duration: 200
                    }).start();
                }
            }
            // onPanResponderRelease: (e, gesture) => {
            //   if (this.isDropArea(gesture)) {
            //     Animated.timing(this.state.opacity, {
            //       toValue: 0,
            //       duration: 1000
            //     }).start(() =>
            //       this.setState({
            //         showDraggable: false
            //       })
            //     );
            //   } 
            // }
        });
    }


    isDropArea(gesture, num) {
        console.log(gesture.moveX)
        if (num == 1) {
            return (1 / 3) * maxWidth < gesture.moveX < (4 / 9) * maxWidth &&
                gesture.moveY < (1 / 6) * maxHeight
        } else if (num == 2) {
            return (4 / 9) * maxWidth < gesture.moveX < (5 / 9) * maxWidth &&
                gesture.moveY < (1 / 6) * maxHeight
        } else if (num == 3) {
            console.log((5 / 9) * maxWidth)
            console.log((2 / 3) * maxWidth)
            return (5 / 9) * maxWidth < gesture.moveX < (2 / 3) * maxWidth &&
                gesture.moveY < (1 / 6) * maxHeight
        } else if (num == 4) {
            return ((1 / 3) * maxWidth < gesture.moveX < (4 / 9) * maxWidth) &&
                ((1 / 2) * maxHeight < gesture.moveY < (4 / 6) * maxHeight)
        } else if (num == 5) {
            return (4 / 9) * maxWidth < gesture.moveX < (5 / 9) * maxWidth &&
                (1 / 2) * maxHeight < gesture.moveY < (4 / 6) * maxHeight
        } else if (num == 6) {
            return (5 / 9) * maxWidth < gesture.moveX < (2 / 3) * maxWidth &&
                (1 / 2) * maxHeight < gesture.moveY < (4 / 6) * maxHeight
        }
    }

    renderDraggable() {
        const panStyle = {
            transform: this.state.pan.getTranslateTransform()
        }

        return (
            <View style={{ position: "absolute" }}>
                <Animated.View
                    {...this.panResponder.panHandlers}
                    style={[panStyle, styles.circle]}>
                    <Text>{this.props.id}</Text>
                </Animated.View>
            </View>
        );

    }

    render() {
        { console.log(maxHeight) };
        { console.log(maxWidth) };
        return (
            <View style={{ width: "20%", alignItems: "center" }}>
                {this.renderDraggable()}
            </View>
        );
    }
}

export default Draggable;

let CIRCLE_RADIUS = 30;
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    ballContainer: {
        height: 200
    },
    circle: {
        backgroundColor: "skyblue",
        width: CIRCLE_RADIUS * 2,
        height: CIRCLE_RADIUS * 2,
        borderRadius: CIRCLE_RADIUS
    },
    row: {
        flexDirection: "row"
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