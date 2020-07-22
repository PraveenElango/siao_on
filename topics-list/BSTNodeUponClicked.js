import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default class BSTNodeUponClicked extends React.Component {
    constructor(props) {
        super(props);
    }

    renderText(i) {
        if(this.props.revealText) {
            return (
            <Text>{i}</Text>
            );
        }
    }

    render() {
        return (
            <View>
                <TouchableOpacity style={styles.node}
                    onPress={() => this.props.onPress()}>
                        {this.renderText(this.props.id)}
                </ TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    node: {
        // borderWidth: 1,
        // borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 50,
        borderColor: "#20232a",
        backgroundColor: "#61dafb",
        color: "#20232a",
        borderRadius: 100,
        // backgroundColor: '#b8b533',
    }
})