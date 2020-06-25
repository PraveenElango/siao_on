// import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Topics from "./Components/topics";
import Home from "./Components/Home";
import ComputationalComplexity from "./topics-list/computational-complexity"
import {
  LinkedLists, LLScreenTwo, LLScreenThree,
  LLScreenFour, LLScreenFive,
  LLScreenSix, LLScreenSix_verTwo, LLScreenSeven,
  LLScreenEight, LLScreenNine, LLScreenTen
} from "./topics-list/linked-lists"

import hashTables from "./topics-list/hash-tables"
import {
  Dijkstra, DijkstraScreenTwo, DijkstraScreenTwoWrong,
  DijkstraScreenThree, DijkstraScreenThreeWrong, DijkstraScreenFour,
  DijkstraScreenFourWrong, DijkstraScreenFive, DijkstraScreenSix,
  DijkstraScreenSeven, DijkstraScreenEight, DijkstraScreenNine
} from "./topics-list/dijkstra"
import { Prim, PrimScreenOne, PrimScreenTwo, PrimScreenThree, PrimScreenFour, PrimScreenFive } from "./topics-list/prim"
import {
  HashTables, HashTablesScreenTwo, HashTablesScreenThree,
  HashTablesScreenFour, HashTablesScreenFive,
  HashTablesScreenSix, HashTablesScreenSeven, HashTablesScreenEight,
  HashTablesScreenNine, HashTablesScreenTen, HashTablesScreenEleven
} from "./topics-list/hash-tables"

import {
  BinarySearchTrees, BinarySearchTreesScreenTwo, BinarySearchTreesScreenThree,
  BinarySearchTreesScreenFour, BinarySearchTreesScreenFive, BinarySearchTreesScreenSix,
  BinarySearchTreesScreenSeven, BinarySearchTreesScreenEight, BinarySearchTreesScreenNine
} from "./topics-list/binary-search-trees"

class App extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#2c343b',
            },
            headerTintColor: '#fafabe',
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
            // headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Topics" component={Topics} />
          <Stack.Screen name="Computational Complexity" component={ComputationalComplexity} />

          {/* HashTables */}
          <Stack.Screen name="HashTables" component={HashTables} />
          <Stack.Screen name="HashTablesScreenTwo" component={HashTablesScreenTwo} />
          <Stack.Screen name="HashTablesScreenThree" component={HashTablesScreenThree} />
          <Stack.Screen name="HashTablesScreenFour" component={HashTablesScreenFour} />
          <Stack.Screen name="HashTablesScreenFive" component={HashTablesScreenFive} />
          <Stack.Screen name="HashTablesScreenSix" component={HashTablesScreenSix} />
          <Stack.Screen name="HashTablesScreenSeven" component={HashTablesScreenSeven} />
          <Stack.Screen name="HashTablesScreenEight" component={HashTablesScreenEight} />
          <Stack.Screen name="HashTablesScreenNine" component={HashTablesScreenNine} />
          <Stack.Screen name="HashTablesScreenTen" component={HashTablesScreenTen} />
          <Stack.Screen name="HashTablesScreenEleven" component={HashTablesScreenEleven} />


          {/* Prim */}
          <Stack.Screen name="Prim" component={Prim} />
          <Stack.Screen name="PrimScreenOne" component={PrimScreenOne} />
          <Stack.Screen name="PrimScreenTwo" component={PrimScreenTwo} />
          <Stack.Screen name="PrimScreenThree" component={PrimScreenThree} />
          <Stack.Screen name="PrimScreenFour" component={PrimScreenFour} />
          <Stack.Screen name="PrimScreenFive" component={PrimScreenFive} />

          {/* LinkedList */}
          <Stack.Screen name="Linked List" component={LinkedLists} />
          <Stack.Screen name="LLScreenTwo" component={LLScreenTwo} />
          <Stack.Screen name="LLScreenThree" component={LLScreenThree} />
          <Stack.Screen name="LLScreenFour" component={LLScreenFour} />
          <Stack.Screen name="LLScreenFive" component={LLScreenFive} />
          <Stack.Screen name="LLScreenSix" component={LLScreenSix} />
          <Stack.Screen name="LLScreenSix_verTwo" component={LLScreenSix_verTwo} />
          <Stack.Screen name="LLScreenSeven" component={LLScreenSeven} />
          <Stack.Screen name="LLScreenEight" component={LLScreenEight} />
          <Stack.Screen name="LLScreenNine" component={LLScreenNine} />
          <Stack.Screen name="LLScreenTen" component={LLScreenTen} />

          {/* Dijkstra */}
          <Stack.Screen name="Dijkstra" component={Dijkstra} />
          <Stack.Screen name="DijkstraScreenTwo" component={DijkstraScreenTwo} />
          <Stack.Screen name="DijkstraScreenTwoWrong" component={DijkstraScreenTwoWrong} />
          <Stack.Screen name="DijkstraScreenThree" component={DijkstraScreenThree} />
          <Stack.Screen name="DijkstraScreenThreeWrong" component={DijkstraScreenThreeWrong} />
          <Stack.Screen name="DijkstraScreenFour" component={DijkstraScreenFour} />
          <Stack.Screen name="DijkstraScreenFourWrong" component={DijkstraScreenFourWrong} />
          <Stack.Screen name="DijkstraScreenFive" component={DijkstraScreenFive} />
          <Stack.Screen name="DijkstraScreenSix" component={DijkstraScreenSix} />
          <Stack.Screen name="DijkstraScreenSeven" component={DijkstraScreenSeven} />
          <Stack.Screen name="DijkstraScreenEight" component={DijkstraScreenEight} />
          <Stack.Screen name="DijkstraScreenNine" component={DijkstraScreenNine} />

          {/*Binary Search Trees */}
          <Stack.Screen name="BinarySearchTrees" component={BinarySearchTrees} />
          <Stack.Screen name="BinarySearchTreesScreenTwo" component={BinarySearchTreesScreenTwo} />
          <Stack.Screen name="BinarySearchTreesScreenThree" component={BinarySearchTreesScreenThree} />
          <Stack.Screen name="BinarySearchTreesScreenFour" component={BinarySearchTreesScreenFour} />
          <Stack.Screen name="BinarySearchTreesScreenFive" component={BinarySearchTreesScreenFive} />
          <Stack.Screen name="BinarySearchTreesScreenSix" component={BinarySearchTreesScreenSix} />
          <Stack.Screen name="BinarySearchTreesScreenSeven" component={BinarySearchTreesScreenSeven} />
          <Stack.Screen name="BinarySearchTreesScreenEight" component={BinarySearchTreesScreenEight} />
          <Stack.Screen name="BinarySearchTreesScreenNine" component={BinarySearchTreesScreenNine} />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;

const Stack = createStackNavigator();

