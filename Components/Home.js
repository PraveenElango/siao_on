import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Button, StyleSheet } from "react-native";

function Home({ navigation }) {

    return (
        <View>
            <Text> Siao O(n) </Text>
            <Button
                title="Topics"
                onPress={() => navigation.navigate('Topics')}
            />
        </View>
    );
}


export default Home;



