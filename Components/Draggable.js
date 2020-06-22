import React, { Component } from "react";
import { StyleSheet, View, Text, PanResponder, Animated, Dimensions } from "react-native";

const deviceDisplay = Dimensions.get("window");
const maxHeight = deviceDisplay.height;
const maxWidth = deviceDisplay.width;

class Draggable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showDraggable: true,
            dropAreaValues: null,
            pan: new Animated.ValueXY(),
            opacity: new Animated.Value(1)
        };
    }

    componentWillMount() {
        this._val = { x: 0, y: 0 }
        this.state.pan.addListener((value) => this._val = value);

        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (e, gesture) => true,
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
                } else {
                    console.log("Dropped incorrectly");
                    //Restart whole thing
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
        if (num == 1) {
            return (1 / 3) * maxWidth < gesture.moveX < (4 / 9) * maxWidth &&
                gesture.moveY < (1 / 6) * maxHeight
        } else if (num == 2) {
            return (4 / 9) * maxWidth < gesture.moveX < (5 / 9) * maxWidth &&
                gesture.moveY < (1 / 6) * maxHeight
        } else if (num == 3) {
            return (5 / 9) * maxWidth < gesture.moveX < (2 / 3) * maxWidth &&
                gesture.moveY < (1 / 6) * maxHeight
        } else if (num == 4) {
            return (1 / 3) * maxWidth < gesture.moveX < (4 / 9) * maxWidth &&
                (1 / 2) * maxHeight < gesture.moveY < (4 / 6) * maxHeight
        } else if (num == 5) {
            return (4 / 9) * maxWidth < gesture.moveX < (5 / 9) * maxWidth &&
                (1 / 2) * maxHeight < gesture.moveY < (4 / 6) * maxHeight
        } else if (num == 6) {
            return (5 / 9) * maxWidth < gesture.moveX < (2 / 3) * maxWidth &&
                (1 / 2) * maxHeight < gesture.moveY < (4 / 6) * maxHeight
        }
        // switch (num) {
        //     case 1:
        //         return (1 / 3) * maxWidth < gesture.moveX < (4 / 9) * maxWidth &&
        //             gesture.moveY < (1 / 6) * maxHeight
        //     case 2:
        //         return (4 / 9) * maxWidth < gesture.moveX < (5 / 9) * maxWidth &&
        //             gesture.moveY < (1 / 6) * maxHeight
        //     case 3:
        //         return (5 / 9) * maxWidth < gesture.moveX < (2 / 3) * maxWidth &&
        //             gesture.moveY < (1 / 6) * maxHeight
        //     case 4:
        //         return (1 / 3) * maxWidth < gesture.moveX < (4 / 9) * maxWidth &&
        //             (1 / 2) * maxHeight < gesture.moveY < (4 / 6) * maxHeight
        //     case 5:
        //         return (4 / 9) * maxWidth < gesture.moveX < (5 / 9) * maxWidth &&
        //             (1 / 2) * maxHeight < gesture.moveY < (4 / 6) * maxHeight
        //     case 6:
        //         return (5 / 9) * maxWidth < gesture.moveX < (2 / 3) * maxWidth &&
        //             (1 / 2) * maxHeight < gesture.moveY < (4 / 6) * maxHeight

    // }
    // if (num < 4) {
    //     return gesture.moveY < (1 / 6) * maxHeight &&
    //         (num == 1s
    //             ? (1 / 3) * maxWidth < gesture.moveX < (4 / 9) * maxWidth
    //             : num == 2
    //                 ? (4 / 9) * maxWidth < gesture.moveX < (5 / 9) * maxWidth
    //                 : (5 / 9) * maxWidth < gesture.moveX < (2 / 3) * maxWidth
    //         );




    // return (1 / 2) * maxHeight < gesture.moveY < (4 / 6) * maxHeight &&
    //     (num == 1
    //         ? (1 / 3) * maxWidth < gesture.moveX < (4 / 9) * maxWidth
    //         : num == 2
    //             ? (4 / 9) * maxWidth < gesture.moveX < (5 / 9) * maxWidth
    //             : (5 / 9) * maxWidth < gesture.moveX < (2 / 3) * maxWidth
    //     )


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

renderDraggable() {
    const panStyle = {
        transform: this.state.pan.getTranslateTransform()
    }
    if (this.state.showDraggable) {
        return (
            <View style={{ position: "absolute" }}>
                <Animated.View
                    {...this.panResponder.panHandlers}
                    style={[panStyle, styles.circle]}>
                    <Text>{this.props.id}</Text>
                </Animated.View>
                {/* // style={[panStyle, styles.circle, {opacity:this.state.opacity}]} */}

            </View>
        );
    }
}
}

export default Draggable;
// export default class TestScreen extends Component {
//     render() {
//         return (
//             <View style={styles.mainContainer}>
//                 <View style={styles.dropZone}>
//                     <Text style={styles.text}>Drop them here!</Text>
//                 </View>
//                 <View style={styles.ballContainer} />
//                 <View style={styles.row}>
//                     <Draggable id='1' />
//                     <Draggable id='2' />
//                     <Draggable id='3' />
//                 </View>
//             </View>
//         );
//     }
// }

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