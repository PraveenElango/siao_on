import 'react-native-gesture-handler';
import * as React from 'react';
// import { View, Text, StyleSheet, TextInput } from "react-native";
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function BackButton(props) {
    const navigation = useNavigation();
    return <Button
        title={props.title}
        onPress={() => navigation.navigate(props.to, )}
    />
}