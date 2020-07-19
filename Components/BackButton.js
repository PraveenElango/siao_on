import 'react-native-gesture-handler';
import * as React from 'react';
import { TouchableOpacity, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import styles from './styling/floatButton.scss'
// import { Button } from '@material-ui/core'

export default function BackButton(props) {
    const navigation = useNavigation();

    return (
        <Button
            title={props.title}
            onPress={() => navigation.navigate(props.to, props.toTransfer)}
        />
            // <Button
            //     variant="contained"
            //     color="primary"
            //     size='medium'
            //     onClick={() => navigation.navigate(props.to, props.toTransfer)}>
            //     {props.title}
            // </Button>
    );
}
