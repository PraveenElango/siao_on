import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, StyleSheet, Alert } from "react-native";

import Lives from '../Components/Lives';
import PrimNode from './PrimNode';
import { useNavigation } from '@react-navigation/native';

class Prim extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            edgeList: this.initialiseEdgeList(),
            visited: [true, false, false, false, false, false, false, false, false],
            availablePaths: [
                [null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null ,null, null, null],
                [null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null]
            ],
            currentShortest: -1,
            lives: 5,
        };
    }

    initialiseEdgeList() {

        const getRandomInt = (min, max) => {
            return Math.floor(Math.random() * Math.floor(max - min)) + min;
        }
        
        // let arr = [
        //     [null, null, null, null, null, null, null, null, null],
        //     [null, null, null, null, null, null, null, null, null],
        //     [null, null, null, null, null, null, null, null, null],
        //     [null, null, null, null, null, null, null, null, null],
        //     [null, null, null, null, null, null, null, null, null],
        //     [null, null, null, null, null, null, null, null, null],
        //     [null, null, null, null, null, null, null, null, null],
        //     [null, null, null, null, null, null, null, null, null],
        //     [null, null, null, null, null, null, null, null, null]
        // ];
        
        let arr = new Array(9).fill(null).map(() => new Array(9).fill(null));

        // [fromNode, toNode, minimum, maximum]
        let edges = [
            [0,1,15,20],
            [0,2,15,20],
            [0,3,15,20],
            [1,5,25,30],
            [2,3,10,15],
            [2,4,10,15],
            [2,7,35,40],
            [3,4,10,15],
            [3,6,25,30],
            [4,6,20,25],
            [4,7,20,25],
            [5,6,15,20],
            [5,8,30,35],
            [6,8,15,20],
            [7,8,20,25]
        ]

        for(let i = 0; i < edges.length; i++) {
            let val = getRandomInt(edges[i][2], edges[i][3]);
            arr[edges[i][0]][edges[i][1]] = val;
            arr[edges[i][1]][edges[i][0]] = val;
        }

        console.log(arr);
        return arr;

        // let edge0To1 = getRandomInt(15, 20);
        // arr[0][1] = edge0To1
        // arr[1][0] = edge0To1
        // let edge0To2 = getRandomInt(15, 20);
        // arr[0][2] = edge0To2
        // arr[2][0] = edge0To2
        // let edge0To3 = getRandomInt(15, 20);
        // arr[0][3] = edge0To3
        // arr[3][0] = edge0To3

        // let edge1To5 = getRandomInt(25,30);
        // arr[1][5] = edge1To5
        // arr[5][1] = edge1To5

        // let edge2To3 = getRandomInt(10,15);
        
        // arr[2][3] = edge2To3
        // arr[3][2] = edge2To3
        // let edge2To4 = getRandomInt(10,15);
        // arr[2][4] = edge2To4
        // arr[4][2] = edge2To4
        // let edge2To7 = getRandomInt(35,40);
        // arr[2][7] = edge2To7
        // arr[7][2] = edge2To7
        
        // let edge3To4 = getRandomInt(10,15);
        // arr[3][4] = edge3To4
        // arr[4][3] = edge3To4
        // let edge3To6 = getRandomInt(25,30);
        // arr[3][6] = edge3To6
        // arr[6][3] = edge3To6
        // let edge4To6 = getRandomInt(20,25);
        // arr[4][6] = edge4To6
        // arr[6][4] = edge4To6
        // let edge4To7 = getRandomInt(20,25);
        // arr[4][7] = edge4To7
        // arr[7][4] = edge4To7

        // let edge5To6 = getRandomInt(15, 20);
        // arr[5][6] = edge5To6
        // arr[6][5] = edge5To6
        // let edge5To8 = getRandomInt(30,35);
        // arr[5][8] = edge5To8
        // arr[8][5] = edge5To8
        // let edge6To8 = getRandomInt(15, 20);
        // arr[6][8] = edge6To8
        // arr[8][6] = edge6To8
        // let edge7To8 = getRandomInt(20,25);
        // arr[7][8] = edge7To8
        // arr[8][7] = edge7To8

    }

    updateAvailablePaths() {
        let arr = this.state.availablePaths.slice();
        const len = this.state.visited.length;

        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                let edgeVal = this.state.edgeList[i][j];
                let startNode = this.state.visited[i];
                let endNode = this.state.visited[j];

                if (edgeVal != null && startNode && !endNode) {
                    arr[i][j] = edgeVal;
                    if (this.state.currentShortest == -1 ||
                        edgeVal < this.state.currentShortest) {
                        this.state.currentShortest = edgeVal;
                    }

                }
            }
        }

        console.log(arr);
        this.state.availablePaths = arr;
    }

    onPress(key) {
        let arr = this.state.visited.slice();
        const len = this.state.visited.length;

        if (this.state.visited[key]) {
            console.log("visited node already!");

        } else {
            for (let i = 0; i < len; i++) {
                if (this.state.availablePaths[i][key] == this.state.currentShortest) {
                    console.log('correct node');
                    arr[key] = true; // being visited
                    this.setState({
                        visited: arr,
                        currentShortest: -1,
                    })
                    this.updateAvailablePaths();
                    return;
                }
            }
        }
    }

    renderNode(i) {
        return (
            <PrimNode
                value={this.state.visited[i] ? 'visited' : 'not visited'}
                onClick={() => this.onPress(i)}
            />
        );
    }    

    render() {
        this.updateAvailablePaths();

        return (
            <View style={{ flex: 1 }}>

                <View style={{ flex: 1 }}>
                    <Lives lives={this.state.lives}/>
                </View>

                {/* MIDDLE CONTAINER */}
                <View style={{ flex: 6 }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: "center" }}>
                        {this.renderNode(0)}
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            {/* BLANK */}
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
                            <View>
                                {this.renderNode(1)}
                            </View>
                        </View>

                        <View style={{ flex: 3 }}>
                            {/* BLANK */}
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
                            <View>
                                {this.renderNode(2)}
                            </View>
                        </View>

                        <View style={{ flex: 1 }}>
                            {/* BLANK */}
                        </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: "center" }}>
                        {this.renderNode(3)}
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row' }}>
                         <View style={{ flex: 4 }}>
                            {/* BLANK */}
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
                            {this.renderNode(4)}
                        </View>

                        <View style={{ flex: 2 }}>
                            {/* BLANK */}
                        </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                                {/* BLANK */}
                        </View>
                        <View style={{flex:2, flexDirection: 'row', justifyContent:'center'}}>
                            {this.renderNode(5)}
                        </View> 
                        <View style={{ flex: 14 }}>
                                {/* BLANK */}
                        </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            {/* BLANK */}
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
                            {this.renderNode(6)}
                        </View>

                        <View style={{ flex: 3 }}>
                            {/* BLANK */}
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
                            {this.renderNode(7)}
                        </View>

                        <View style={{ flex: 1 }}>
                            {/* BLANK */}
                        </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: "center" }}>
                        {this.renderNode(8)}
                    </View>

                </View>

                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text> Total Distance </Text>
                </View>
            </View>
        )
    }
}

function PrimScreenOne({ navigation }) {
    return (
        <View>
            <Text>Prim's Algorithm</Text>

            <Text>
                The famous war general Tywin Lannister wants to deploy his troops to defend his lands against the enemy.

                You have been instructed to assist in the war planning. You are to select the paths the troupes will take from the capital to their deployment locations, while keeping the total distance travelled at a minimum.

                Click the following button to open the map of Westeros, to begin.
                </Text>

            <Button
                title="Open Map"
                onPress={() => navigation.navigate('Prim')}
            />

        </View>
    );
}

function PrimScreenTwo({ navigation }) {
    return (
        <View>
            <Text>Heres a plot of the path you've designed.</Text>

            {/* SHOW GRAPH */}


            {/* Prev and Next buttons */}
            <View>
                <Button
                    title="Previous"
                    onPress={() => navigation.navigate('PrimScreenOne')}
                />
                <Button
                    title="Next"
                    onPress={() => navigation.navigate('PrimScreenTwo')}
                />
            </View>
        </View>

    );
}

function PrimScreenThree({ navigation }) {
    return (
        <View>
            <Text>
                In Computer Science, the following structure is known as
                a Minimum Spanning Tree.

                A minimum spanning tree represents the subset of the edges of a graph
                that connects all the vertices together, without any cycles and with
                the minimum possible total edge weight.
            </Text>


            {/* //Prev and Next buttons */}
            <View>
                <Button
                    title="Previous"
                    onPress={() => navigation.navigate('PrimScreenTwo')}
                />
                <Button
                    title="Next"
                    onPress={() => navigation.navigate('PrimScreenThree')}
                />
            </View>
        </View>

    );
}

function PrimScreenFour({ navigation }) {
    return (
        <View>


            <Text>
                What you played in the game is an algorithm known as Prim's Algorithm.

                Prim's algorithm is an algorithm used to find the minimum spanning Tree of a graph.
            </Text>

            {/* //Prev and Next buttons */}
            <View>
                <Button
                    title="Previous"
                    onPress={() => navigation.navigate('PrimScreenThree')}
                />
                <Button
                    title="Next"
                    onPress={() => navigation.navigate('PrimScreenFive')}
                />
            </View>
        </View>

    );
}

function PrimScreenFive({ navigation }) {
    return (
        <View>
            <Text>
                Here's how Prim's algorithm might look like in code.
            </Text>

            {/* //Prev and Next buttons */}
            <View>
                <Button
                    title="Previous"
                    onPress={() => navigation.navigate('PrimScreenFour')}
                />
                <Button
                    title="Exit"
                    onPress={() => navigation.navigate('Topics')}
                />
            </View>
        </View>

    );
}
const styles = StyleSheet.create({
    circleNodeOne: {
        height: 25,
        width: 25,
        borderColor: "#20232a",
        backgroundColor: "#61dafb",
        color: "#20232a",
        borderRadius: 50,
    },
    wrongMessage: {
        borderColor: "#20232a",
        borderRadius: 15,
        height: 40,
        width: 30,
    },
    box: {
        marginTop: 16,
        height: 30,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
        backgroundColor: "#61dafb",
        color: "#20232a"
    },
})

export { Prim, PrimScreenOne, PrimScreenTwo, PrimScreenThree, PrimScreenFour, PrimScreenFive };