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
        };
    }

    componentWillMount() {
        this._val = { x: 0, y: 0 }
        this.state.pan.addListener((value) => this._val = value);

        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (e, gesture) => true,
            onMoveShouldSetPanResponder: () => true,
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
                    this.props.onComplete();
                    // this.setState({
                    //     ended: true
                    // })
                } else {
                    console.log("Dropped incorrectly");
                    Animated.timing(this.state.pan, {
                        toValue: { x: 0, y: 0 },
                        easing: Easing.back(),
                        duration: 200
                    }).start();
                }
            }
        });
    }


    isDropArea(gesture, num) {
        // console.log('x: ' + gesture.moveX + ' y: ' + gesture.moveY);

        if (num == 1) {
            // console.log((1 / 4) * maxWidth);
            // console.log((5 / 12) * maxWidth);
            return (1 / 4) * maxWidth < gesture.moveX && gesture.moveX < (5 / 12) * maxWidth &&
                gesture.moveY < (4 / 33) * maxHeight
        } else if (num == 2) {
            return (5 / 12) * maxWidth < gesture.moveX && gesture.moveX < (7 / 12) * maxWidth &&
                gesture.moveY < (4 / 33) * maxHeight
        } else if (num == 3) {
            return (7 / 12) * maxWidth < gesture.moveX && gesture.moveX < (3 / 4) * maxWidth &&
                gesture.moveY < (4 / 33) * maxHeight
        } else if (num == 4) {
            return (1 / 4) * maxWidth < gesture.moveX && gesture.moveX < (5 / 12) * maxWidth &&
                ((12 / 33) * maxHeight < gesture.moveY && gesture.moveY < (16 / 33) * maxHeight)
        } else if (num == 5) {
            return (5 / 12) * maxWidth < gesture.moveX && gesture.moveX < (7 / 12) * maxWidth &&
                ((12 / 33) * maxHeight < gesture.moveY && gesture.moveY < (16 / 33) * maxHeight)
        } else if (num == 6) {
            return (7 / 12) * maxWidth < gesture.moveX && gesture.moveX < (3 / 4) * maxWidth &&
                ((12 / 33) * maxHeight < gesture.moveY && gesture.moveY < (16 / 33) * maxHeight)
        }
    }

    renderDraggable() {
        const panStyle = {
            transform: this.state.pan.getTranslateTransform()
        }
        // const loc = this.props.id == 1
        //     ? '../assets/Shoes/Shoe_5.png'
        //     : this.props.id == 2
        //         ? '../assets/Shoes/Shoe_6.png'
        //         : this.props.id == 3
        //             ? '../assets/Shoes/Shoe_9.png'
        //             : this.props.id == 4
        //                 ? '../assets/Shoes/Shoe_12.png'
        //                 : this.props.id == 5
        //                     ? '../assets/Shoes/Shoe_13.png'
        //                     : '../assets/Shoes/Shoe_14.png'
        return (
            <View style={{ position: "absolute" }}>
                {/* <Animated.View
                    {...this.panResponder.panHandlers}
                    style={[panStyle, styles.circle]}>
                    <Text>{this.props.id}</Text>
                </Animated.View> */}
                <Animated.Image
                    {...this.panResponder.panHandlers}
                    source={require(this.props.id == 1
                        ? '../assets/Shoes/Shoe_5.png'
                        : this.props.id == 2
                            ? '../assets/Shoes/Shoe_6.png'
                            : this.props.id == 3
                                ? '../assets/Shoes/Shoe_9.png'
                                : this.props.id == 4
                                    ? '../assets/Shoes/Shoe_12.png'
                                    : this.props.id == 5
                                        ? '../assets/Shoes/Shoe_13.png'
                                        : '../assets/Shoes/Shoe_14.png')}
                    style={[panStyle, styles.circle]}
                    resizeMode='cover'>
                    {/* <Text>{this.props.id}</Text> */}
                </Animated.Image>
            </View>
        );

    }

    render() {
        // console.log(maxWidth);
        // console.log(maxHeight);
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
        // backgroundColor: "skyblue",
        // width: CIRCLE_RADIUS * 2,
        // height: CIRCLE_RADIUS * 2,
        width: 80,
        height: 40,
        // borderRadius: CIRCLE_RADIUS
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