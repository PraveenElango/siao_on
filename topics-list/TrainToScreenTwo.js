import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function TrainToScreenTwo(props) {

    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={[{ flex: 1 }]}
            onPress={() => navigation.navigate(props.to, props.toTransfer)}>
            <Image
                style={{
                    flex: 1,
                }}
                source={props.imageSource}
                resizeMode='contain'

            />
        </TouchableOpacity>
    )

}