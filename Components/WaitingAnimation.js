import 'react-native-gesture-handler';
import * as React from 'react';
import { TouchableOpacity, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import styles from './styling/floatButton.scss'
// import { Button } from '@material-ui/core'
import LottieView from 'react-native-web-lottie';

export default function WaitingAnimation(props) {
    const navigation = useNavigation();

    return (

        <LottieView source={require('./waiting.json')} 
        autoPlay 
        loop={false} 
        onAnimationFinish={()=> navigation.navigate(props.to, props.toTransfer)}/>
    )
}