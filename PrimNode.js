import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


class PrimNode extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <TouchableOpacity
                    style={styles.node}
                    onPress={() => this.props.onClick()}>
                    <Text>{this.props.id} {this.props.value}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default PrimNode;
const styles = StyleSheet.create({
    node: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        // width: '100%',
        // height: '100%',
        backgroundColor: '#b8b533',
        // borderRadius: 50,
    }
})