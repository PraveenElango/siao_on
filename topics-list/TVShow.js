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
                style={{ flex: 1 }}>
                <Image
                    // resizeMode='contain'
                    // style={styles.show}
                    style={{
                        flex: 1,
                        width: 120,
                        height: 120,
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

// const styles = StyleSheet.create({
//     show: {
//         width: win.width,
//         height: 660 * ratio,
//         // width: 120,
//         // height: 120,
//         // width: '100%',
//         // height: '100%',
//         // aspectRatio: 1,
//         borderTopLeftRadius: 10,
//         borderTopRightRadius: 10,
//         borderBottomLeftRadius: 10,
//         borderBottomRightRadius: 10
//     }

// })

export default TVShow