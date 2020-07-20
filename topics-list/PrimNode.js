import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';


class PrimNode extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <TouchableOpacity
                style={styles.node}
                onPress={() => this.props.onClick()}>
                <ImageBackground
                    source={this.props.value == 'visited'
                        ? require('../assets/CastleVisited.png')
                        : require('../assets/Castle.png')}
                    style={styles.image}
                    resizeMode='contain'>
                    <Text style={{ flex: 1 }}>
                        {this.props.id}
                    </Text>
                </ImageBackground>
            </TouchableOpacity>
        )
    }
}
export default PrimNode;
const styles = StyleSheet.create({
    node: {
        flex: 1,
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    }

})