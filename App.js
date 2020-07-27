import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {Topics, StartAnimation} from "./Components/topics";
import Home from "./Components/Home";
import ComputationalComplexity from "./topics-list/computational-complexity"
import {
  LinkedLists, LLScreenTwo, LLScreenThree,
  LLScreenFour, LLScreenFive,
  LLScreenSix, LLScreenSeven
} from "./topics-list/linked-lists"
import {
  DijkstraStart, Dijkstra, DijkstraScreenOne, DijkstraScreenTwo,
  DijkstraScreenThree, DijkstraScreenFour
} from "./topics-list/dijkstra"
import { Prim, PrimScreenOne, PrimScreenTwo, PrimScreenThree, PrimScreenFour, PrimScreenFive } from "./topics-list/prim"
import {
  HashTables, HashTablesScreenTwo, HashTablesScreenThree,
  HashTablesScreenFour, HashTablesScreenFive,
  HashTablesScreenSix, HashTablesScreenSeven, HashTablesScreenEight,
  HashTablesScreenNine
} from "./topics-list/hash-tables"

import {
  BinarySearchTrees, BinarySearchTreesScreenOne, BinarySearchTreesScreenTwo, BinarySearchTreesScreenThree,
  BinarySearchTreesScreenFour, BinarySearchTreesScreenFive, BinarySearchTreesScreenSix,
  BinarySearchTreesScreenSeven, BinarySearchTreesScreenEight, BinarySearchTreesScreenNine
} from "./topics-list/binary-search-trees"

import QuestionDisplay from './QuestionDisplay';

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
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Topics" component={Topics} />
          <Stack.Screen name="StartAnimation" component={StartAnimation} />
          <Stack.Screen name="Computational Complexity" component={ComputationalComplexity} />
          <Stack.Screen name="QuestionDisplay" component={QuestionDisplay} />

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

          {/* Prim */}
          <Stack.Screen name="Prim" component={Prim} />
          <Stack.Screen name="PrimScreenOne" component={PrimScreenOne} />
          <Stack.Screen name="PrimScreenThree" component={PrimScreenThree} />
          <Stack.Screen name="PrimScreenFour" component={PrimScreenFour} />

          {/* LinkedList */}
          <Stack.Screen name="Linked List" component={LinkedLists} />
          <Stack.Screen name="LLScreenTwo" component={LLScreenTwo} />
          <Stack.Screen name="LLScreenThree" component={LLScreenThree} />
          <Stack.Screen name="LLScreenFour" component={LLScreenFour} />
          <Stack.Screen name="LLScreenFive" component={LLScreenFive} />
          <Stack.Screen name="LLScreenSix" component={LLScreenSix} />
          <Stack.Screen name="LLScreenSeven" component={LLScreenSeven} />

          {/* Dijkstra */}
          <Stack.Screen name="DijkstraStart" component={DijkstraStart} />
          <Stack.Screen name="Dijkstra" component={Dijkstra} />
          <Stack.Screen name="DijkstraScreenOne" component={DijkstraScreenOne} />
          <Stack.Screen name="DijkstraScreenTwo" component={DijkstraScreenTwo} />
          <Stack.Screen name="DijkstraScreenThree" component={DijkstraScreenThree} />
          <Stack.Screen name="DijkstraScreenFour" component={DijkstraScreenFour} />

          {/*Binary Search Trees */}
          <Stack.Screen name="BinarySearchTrees" component={BinarySearchTrees} />
          <Stack.Screen name="BinarySearchTreesScreenOne" component={BinarySearchTreesScreenOne} />
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

