import * as React from 'react'
import { TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native'

class TVShow extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <TouchableOpacity
                onClick={() => this.props.onClick()}
                style={{ flex: 5 }}>
                <Image
                    style={this.props.type == '1'
                        ? [styles.one, { opacity: this.props.opacity }]
                        : this.props.type == '2'.two
                            ? styles.two
                            : styles.three}
                    source={this.props.imageSource} />
            </TouchableOpacity>
        )
    }
}


export default TVShow

const styles = StyleSheet.create({
    one: {
        flex: 1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    two: {
        flex: 1,
        width: 100,
        height: 100,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    three: {
        flex: 1,
        width: 50,
        height: 50,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    }
})