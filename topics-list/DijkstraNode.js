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
            <TouchableOpacity 
                style={styles.newNode}>
                 <ImageBackground
                    source={this.props.value == 'visited'
                        ? require('../assets/CastleVisited.png')
                        : require('../assets/Castle.png')}
                    style={styles.image}
                    resizeMode='contain'>
                    {/* <Text style={{ flex: 1 }}>
                        {this.props.id}
                    </Text> */}
                </ImageBackground>
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
    },
    newNode:{
        flex:1
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