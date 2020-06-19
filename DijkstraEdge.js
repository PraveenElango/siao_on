import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';


class DijkstraEdge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visited: false,
        };
    }
    render() {
        if (this.props.vertical) {
            return (
                // <View>
                    <TouchableOpacity
                        style={styles.vertical}
                        className="edge"
                        onClick={() => this.props.onClick()}>
                            <Text>
                                {/* Edge from {this.props.fromNode} to {this.props.toNode}  {this.props.value} */}
                            </Text>
                         </TouchableOpacity>
                // </View>
            );
        } else {
            console.log(this.props.vertical + 'edge')
            return (
                // <View>
                    <TouchableOpacity
                        style={styles.horizontal}
                        className="edge"
                        onClick={() => this.props.onClick()}>
                            {/* <Text>
                            Edge from {this.props.fromNode} to {this.props.toNode}  {this.props.value}
                            </Text> */}
                    </TouchableOpacity>
                // </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    horizontal: {
        flex: 1,
        // height: 15,
        // width: 300,
        borderColor: "#20232a",
        backgroundColor: "#61dafb",
    },
    vertical: {
        flex: 2,
        // height: 140,
        // width: 15,
        borderColor: "#20232a",
        backgroundColor: "#61dafb",
    }
})

export default DijkstraEdge;