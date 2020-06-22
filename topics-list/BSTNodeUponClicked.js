import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default class BSTNodeUponClicked extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            pressed: false
        }
    }
    onClick() {
        this.setState((state) => {  
            return {
                pressed: true
            }
          });
    }
    renderText(i) {
        if(this.state.pressed) {
            return (
            <Text>{i}</Text>
            );
        }
    }
    render() {
        return (
            <View>
                <TouchableOpacity style={styles.node}
                    onPress={() => this.onClick()}>
                        {this.renderText(this.props.id)}
                </ TouchableOpacity>
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