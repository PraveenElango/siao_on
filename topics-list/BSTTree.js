import * as React from 'react';
import { View, Text, StyleSheet } from "react-native";
import BSTNode from './BSTNode';

class BSTTree extends React.Component {
    constructor(props) {
        super(props);
    }

    renderNode(i) {
        return (<BSTNode id={i} />);
    }

    render() {
        return (
            // <Image style={{flex: 1}}>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 3 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 1 }}>
                        {this.renderNode(11)}
                    </View>
                    <View style={{ flex: 3 }}>
                        {/* BLANK */}
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    {/* BLANK */}
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 1 }}>
                        {this.renderNode(6)}
                    </View>
                    <View style={{ flex: 2 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 1 }}>
                        {this.renderNode(13)}
                    </View>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    {/* BLANK */}
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        {this.renderNode(5)}
                    </View>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 1 }}>
                        {this.renderNode(9)}
                    </View>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 1 }}>
                        {this.renderNode(12)}
                    </View>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 1 }}>
                        {this.renderNode(14)}
                    </View>
                </View>
            </View>
            // </Image>
        )
    }
}

export default BSTTree;