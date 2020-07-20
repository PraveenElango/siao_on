import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Image, TouchableOpacity } from "react-native";

export default class TrainToScreenTwo extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <View style={{ flex: 0.5 }}>
                <TouchableOpacity 
                    style={[ { flex: 1 }]} 
                    onClick={() => this.props.onClick()}>
                    <Image
                    style={{
                        flex: 1,
                        width: 10,
                        height: 7,
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center'
                        // width: win.width,
                        // height: 660 * ratio,
                        // width: '70%',
                        // aspectRatio: 1,
                        // height: '50%',
                        // borderTopLeftRadius: 10,
                        // borderTopRightRadius: 10,
                        // borderBottomLeftRadius: 10,
                        // borderBottomRightRadius: 10
                    }}
                        source = {this.props.imageSource}
                        
                    />
                </TouchableOpacity>
            </View>
        )
    }
}