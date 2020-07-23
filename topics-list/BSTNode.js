import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class BSTNode extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.node}>
                <Text>{this.props.id}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    node: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 50,
        borderColor: "#20232a",
        backgroundColor: "#61dafb",
        color: "#20232a",
        borderRadius: 100,
    }
})