// import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Topics from "./topics";
import Home from "./Home";
import ComputationalComplexity from "./topics-list/computational-complexity"
import {
  LinkedLists, LLScreenTwo, LLScreenThree,
  LLScreenThree_verTwo, LLScreenFour, LLScreenFive
} from "./topics-list/linked-lists"
import BinarySearchTrees from "./topics-list/binary-search-trees"
import hashTables from "./topics-list/hash-tables"
import Dijkstra from "./topics-list/dijkstra"
import Prim from "./topics-list/prim"

class App extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Topics" component={Topics} />
          <Stack.Screen name="Computational Complexity" component={ComputationalComplexity} />
          <Stack.Screen name="Linked List" component={LinkedLists} />
          <Stack.Screen name="Binary Search Tree" component={BinarySearchTrees} />
          <Stack.Screen name="Hash Tables" component={hashTables} />
          <Stack.Screen name="Dijkstra's Algorithm" component={Dijkstra} />
          <Stack.Screen name="Prim's Algorithm" component={Prim} />
          <Stack.Screen name="LLScreenTwo" component={LLScreenTwo} />
          <Stack.Screen name="LLScreenThree" component={LLScreenThree} />
          <Stack.Screen name="LLScreenThree_verTwo" component={LLScreenThree_verTwo} />
          <Stack.Screen name="LLScreenFour" component={LLScreenFour} />
          <Stack.Screen name="LLScreenFive" component={LLScreenFive} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;

const Stack = createStackNavigator();

