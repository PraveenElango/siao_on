import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';

class DijkstraNode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visited: false,
        };
    }
    render() {
        return (
            <View style={styles.newNode}>
                <ImageBackground
                    source={this.props.value != 'Not visited'
                        ? require('../assets/CastleVisited.png')
                        : require('../assets/Castle.png')}
                    style={styles.image}
                    resizeMode='contain'>
                    <Text style={{ flex: 1 }}>
                        {this.props.value}
                    </Text>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    newNode: {
        flex: 1,
        // backgroundColor: 'pink'
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

export default DijkstraNode;