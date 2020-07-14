import * as React from 'react'
import { TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native'



class TVShow extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        // const win = Dimensions.get('window');
        // const ratio = win.width / 682;
        return (
            <TouchableOpacity
                onClick={() => this.props.onClick()}
                style={{ flex: 5 }}>
                <Image
                    // resizeMode='contain'
                    // style={styles.show}
                    style={this.props.type == '1' ? [styles.one, {opacity: this.props.opacity}] : styles.two}
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
        width: 120,
        height: 120,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    }
})