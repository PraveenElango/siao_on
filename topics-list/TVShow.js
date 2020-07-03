import * as React from 'react'
import { TouchableOpacity, Image, StyleSheet, Dimensions, View } from 'react-native'



class TVShow extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <TouchableOpacity
                onClick={() => this.props.onClick()}
                style={{ flex: 5, width: '90%', height: '90%' }}>
                <Image
                    // resizeMode='contain'
                    style={{
                        width: '100%',
                        height: '100%',
                        flex: 1,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        opacity: this.props.opacity
                    }}
                    source={this.props.imageSource} />
            </TouchableOpacity>
        )
    }
}


export default TVShow