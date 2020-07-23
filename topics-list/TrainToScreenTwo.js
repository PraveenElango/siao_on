import 'react-native-gesture-handler';
import * as React from 'react';
import { Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function TrainToScreenTwo(props) {

    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}
            onPress={() => navigation.navigate(props.to)}>
            <Image
                style={{
                    width: 120,
                    height: 130,
                    resizeMode: 'cover'
                }}
                source={props.imageSource}
                resizeMode='contain'
            />
        </TouchableOpacity>
    )
}