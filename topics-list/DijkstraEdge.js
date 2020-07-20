import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';


class DijkstraEdge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visited: false,
        };
    }
    render() {

        return (
            <TouchableOpacity
                style={this.props.vertical ? styles.vertical : styles.horizontal}
                onClick={() => this.props.onClick()}>
                <Text style={{ textAlign: 'center', textAlignVertical: 'center' }} >
                    { this.props.value }
                </Text>
                {/* <Text>
                    {this.props.visited ? 'visited' : 'not visited'}
                </Text> */}
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    horizontal: {
        flex: 1,
        // backgroundColor: 'pink'
    },
    vertical: {
        flex: 1,
        // borderColor: "#20232a",
        // backgroundColor: 'blue'
    }
})

export default DijkstraEdge;