import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, Button } from "react-native";
// import { Button } from '@material-ui/core'
import { AppLoading } from 'expo';
import { useFonts, Arvo_400Regular } from '@expo-google-fonts/arvo';
import { human, sanFranciscoWeights, iOSUIKit } from 'react-native-typography';
// import LottieView from 'react-native-web-lottie';
import LottieView from 'lottie-react-native';

function Home({ navigation }) {
    // let [fontsLoaded] = useFonts({
    //     Arvo_400Regular,
    // });

    return (
        <ImageBackground
            source={require('../assets/stars.jpg')}
            style={{ flex: 1 }}
            resizeMode='stretch'>
            <View style={{ flex: 2 }}></View>
            <View style={{ flex: 1 }}>
                <Text style={[iOSUIKit.largeTitleEmphasizedWhite, { textAlign: 'center' }]}>Siao O(n)</Text>
                <Text></Text>
                <Text style={[human.footnoteWhite, { textAlign: 'center' }]}>Interactive Data Structures and Algorithms for Beginners</Text>
            </View>
            {/* <View style={{flex:2}}>
                <LottieView source={require('./planet.json')} 
                autoPlay
                loop/>
            </View> */}
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}></View>
                <View style={{ flex: 2 }}>
                    {/* <TextInput style={styles.input} placeholder="Name" /> */}
                    <Button title='TOPICS' onPress={() => navigation.navigate('Topics')} />
                </View>
                <View style={{ flex: 1 }}></View>
            </View>
            <View style={{ flex: 0.5 }}></View>
        </ImageBackground>
    );

}

const styles = StyleSheet.create({
    titleText: {
        flex: 1,
        color: '#faf5de',
        // fontFamily: 'Arvo_400Regular',
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center',
        textShadowRadius: 10
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1,
        backgroundColor: '#ffffff'
    }
}
)

export default Home;



