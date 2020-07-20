import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class DijkstraNode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visited: false,
        };
    }
    render() {
        return (
            <TouchableOpacity style={styles.node}>
                <Text>
                    {this.props.id} {this.props.value}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    node: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        // width: 40,
        // height: 40,
        backgroundColor: '#fff',
        borderRadius: 50,
        flex: 1
    }
})

export default DijkstraNode;