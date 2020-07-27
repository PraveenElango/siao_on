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
        if (this.props.value == null) {
            return (
                <TouchableOpacity
                    style={styles.null}
                    onPress={() => this.props.onClick()}>
                </TouchableOpacity>
            )
        } else {
            return (
                <TouchableOpacity
                    style={this.props.value == null
                        ? styles.null
                        : styles.vertical}
                    onPress={() => this.props.onClick()}>
                    <ImageBackground source={this.props.vertical ? VerticalEdge : HorizontalEdge} style={{ flex: 1, height: undefined, width: undefined, justifyContent: 'center' }}>
                        <Text style={{ textAlign: 'center', color: 'orange', fontWeight: 'bold', fontSize: 30 }} >
                            {this.props.value}
                        </Text>
                        {/* <Text>
                        {this.props.visited ? 'visited' : 'not visited'}
                    </Text> */}
                    </ImageBackground>
                </TouchableOpacity>
            );
        }
    }
}

const styles = StyleSheet.create({
    horizontal: {
        flex: 1,
        justifyContent: 'center'
    },
    vertical: {
        flex: 1,
        justifyContent: 'center'
    },
    null: {
        flex: 1,
    }
})

export default DijkstraEdge;