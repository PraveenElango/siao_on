import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default class BSTNode extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <TouchableOpacity style={styles.node}>
                    <Text>{this.props.id}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    node: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#b8b533',
    }
})