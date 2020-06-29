import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet, Button } from "react-native";


function Topics({ navigation }) {

    return (

        <View>
            <Text>Topics</Text>
            <Text>Try selecting a topic!</Text>

            {/* <Button
                title="Computational Complexity"
                onPress={() => navigation.navigate('Computational Complexity')}
            /> */}
            <Button
                title="Linked List"
                onPress={() => navigation.navigate('Linked List')}
            />
            <Button
                title="Binary Search Tree"
                onPress={() => navigation.navigate('BinarySearchTrees')}
            />
            <Button
                title="Hash Tables"
                onPress={() => navigation.navigate('HashTables')}
            />
            <Button
                title="Dijkstra's Algorithm"
                onPress={() => navigation.navigate("Dijkstra")}
            />
            <Button
                title="Prim's Algorithm"
                onPress={() => navigation.navigate("Prim")}
            />

        </View>

    );
}

export default Topics