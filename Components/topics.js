import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet } from "react-native";
import { Button } from '@material-ui/core'


function Topics({ navigation }) {

    return (

        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}></View>

            <View style={{ flex: 1 }}>
                <Text style={{ flex: 1, textAlign: 'center', fontSize: 15 }}>Topics</Text>
                <Text style={{ flex: 1, textAlign: 'center', fontSize: 10 }}>Try selecting a topic!</Text>
            </View>

            <View style={{ flex: 4, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}></View>
                <View style={{ flex: 4, justifyContent: 'space-around' }}>
                    <Button
                        variant="contained"
                        color="primary"
                        size='medium'
                        onClick={() => navigation.navigate('Linked List')}>
                        Linked List
                    </Button>

                    <Button
                        variant="contained"
                        color="primary"
                        size='medium'
                        onClick={() => navigation.navigate('BinarySearchTreesScreenOne')}>
                        Binary Search Tree
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        size='medium'
                        onClick={() => navigation.navigate('HashTables')}>
                        Hash Tables
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        size='medium'
                        onClick={() => navigation.navigate("Dijkstra")}>
                        Dijkstra's Algorithm
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        size='medium'
                        onClick={() => navigation.navigate("PrimScreenOne")}>
                        Prim's Algorithm
                    </Button>
                </View>
                <View style={{ flex: 1 }}></View>
            </View>

            <View style={{ flex: 1 }}></View>
        </View>
    );
}

export default Topics