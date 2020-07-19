import React, { Component } from "react";
import { StyleSheet, View, Text, PanResponder, Animated, Dimensions, Easing } from "react-native";
import Shoe_5 from '../assets/Shoes/Shoe_5.png';
import Shoe_6 from '../assets/Shoes/Shoe_6.png';
import Shoe_9 from '../assets/Shoes/Shoe_9.png';
import Shoe_12 from '../assets/Shoes/Shoe_12.png';
import Shoe_13 from '../assets/Shoes/Shoe_13.png';
import Shoe_14 from '../assets/Shoes/Shoe_14.png';

import SpecialShoeRackWithShoe from '../assets/Shoes/SpecialShoeRackWithShoe.png';
import ShoerackHigh from '../assets/Shoes/ShoerackHigh.png';
import ShoerackLow from '../assets/Shoes/ShoerackLow.png';

const deviceDisplay = Dimensions.get("window");
const maxHeight = deviceDisplay.height;
const maxWidth = deviceDisplay.width;

const images = {
    'shoeLow': [Shoe_5, Shoe_6, Shoe_9],
    'shoeHigh': [Shoe_12, Shoe_13, Shoe_14],
    'shoeRack': [ShoerackLow, SpecialShoeRackWithShoe, ShoerackHigh]
};

class Draggable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDraggable: true,
            dropAreaValues: null,
            pan: new Animated.ValueXY(),
        };
    }

    UNSAFE_componentWillMount() {
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
                } else {
                    console.log("Dropped incorrectly");
                    Animated.timing(this.state.pan, {
                        useNativeDriver: true,
                        toValue: { x: 0, y: 0 },
                        easing: Easing.back(),
                        duration: 200
                    }).start();
                }
            }
        });
    }


    isDropArea(gesture, num) {
        // let horizontal = [[1 / 4, 5 / 12], [5 / 12, 7 / 12], [7 / 12, 3 / 4]];
        let leftX = this.props.width[num];
        let rightX = this.props.width[num + 1];
        let minY = this.props.height.min;
        let maxY = this.props.height.max;
        return (leftX * maxWidth < gesture.moveX &&
            gesture.moveX < rightX * maxWidth) &&
            (minY * maxHeight < gesture.moveY && gesture.moveY < maxY * maxHeight)
    }

    imageToRender() {
        return images[this.props.type][this.props.id];
    }

    renderDraggable() {
        const panStyle = {
            transform: this.state.pan.getTranslateTransform(),
        }

        return (
            <View style={{ position: "absolute" }}>
                <Animated.Image
                    {...this.panResponder.panHandlers}
                    source={this.imageToRender()}
                    style={[panStyle, styles.circle]}
                    resizeMode='cover'>
                </Animated.Image>
            </View>
        );

    }

    render() {
        return (
            <View style={{ width: "20%", alignItems: "center" }}>
                {this.renderDraggable()}
            </View>
        );
    }
}

export default Draggable;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    ballContainer: {
        height: 200
    },
    circle: {
        width: 80,
        height: 40,
    },
});