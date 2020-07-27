import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import HorizontalEdge from '../assets/DijkstraImages/HorizontalLine.png';
import VerticalEdge from '../assets/DijkstraImages/VerticalLine.png';

class DijkstraEdge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visited: false,
        };
    }
    render() {
        if (this.props.vertical) {
            return (
                <TouchableOpacity
                    style={this.props.value == null
                        ? styles.null
                        : styles.vertical}
                    onClick={() => this.props.onClick()}>
                    <ImageBackground source={VerticalEdge} style={{ flex: 1, resizeMode: 'stretch' }}>
                        <Text style={{ textAlign: 'center' }} >
                            {this.props.value}
                        </Text>
                        {/* <Text>
                        {this.props.visited ? 'visited' : 'not visited'}
                    </Text> */}
                    </ImageBackground>
                </TouchableOpacity>
            );
        } else {
            return (
                <TouchableOpacity
                    style={this.props.value == null
                        ? styles.null
                        : styles.horizontal}
                    onClick={() => this.props.onClick()}>
                    <Text style={{ textAlign: 'center' }} >
                        {this.props.value}
                    </Text>
                    {/* <Text>
                        {this.props.visited ? 'visited' : 'not visited'}
                    </Text> */}
                </TouchableOpacity>
            );
        }
    }
}

const styles = StyleSheet.create({
    horizontal: {
        flex: 1,
        backgroundColor: 'pink',
        justifyContent: 'center'
    },
    vertical: {
        flex: 1,
        // borderColor: "#20232a",
        backgroundColor: 'gray',
        justifyContent: 'center'
    },
    null: {
        flex: 1,
    }
})

export default DijkstraEdge;