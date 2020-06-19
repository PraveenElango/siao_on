import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, StyleSheet } from "react-native";

class Lives extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.live}>
                <Text> Lives: {this.props.lives}/5 </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    live: {
        borderColor: "#20232a",
        borderRadius: 15,
    },
})

export default Lives;