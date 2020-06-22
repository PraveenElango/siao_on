import 'react-native-gesture-handler';
import * as React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
// import styles from './styling/floatButton.scss'

export default function BackButton(props) {
    const navigation = useNavigation();

    return (
        // <Button
        //     title={props.title}
        //     onPress={() => navigation.navigate(props.to, props.toTransfer)}
        // />
        <TouchableOpacity
            // style={styles.btn}
            onPress={() => navigation.navigate(props.to, props.toTransfer)}>
            <Text>
                {props.title}
            </Text>
        </TouchableOpacity>
    );
}

// const styles = {
//     btn: {
//         backgroundColor: 
//     },
// }