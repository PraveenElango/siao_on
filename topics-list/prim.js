import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions } from "react-native";

import Lives from '../Components/Lives';
import PrimNode from './PrimNode';
import BackButton from '../Components/BackButton';

function PrimScreenOne({ navigation }) {
    return (
        <View>
            <Text>Prim's Algorithm</Text>

            <Text>
                The famous war general Tywin Lannister wants to deploy his troops to defend his lands against the enemy.

                You have been instructed to assist in the war planning. You are to select the paths the troupes will take from the capital to their deployment locations, while keeping the total distance travelled at a minimum.

                Click the following button to open the map of Westeros, to begin.
                </Text>


            <BackButton title='Open Button' to='Prim' />
        </View>
    );
}

class Prim extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edgeList: this.initialiseEdgeList(),
            visited: [true, false, false, false, false, false, false, false, false],
            availablePaths: [
                [null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null],
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

        let arr = new Array(9).fill(null).map(() => new Array(9).fill(null));

        // [fromNode, toNode, minimumEdgeValue, maximumEdgeValue]
        let edges = [
            [0, 1, 15, 20],
            [0, 2, 15, 20],
            [0, 3, 20, 25],
            [1, 5, 25, 30],
            [2, 3, 10, 15],
            [2, 4, 10, 15],
            [2, 7, 35, 40],
            [3, 4, 5, 10],
            [3, 6, 25, 30],
            [4, 6, 20, 25],
            [4, 7, 20, 25],
            [5, 6, 15, 20],
            [5, 8, 30, 35],
            [6, 8, 15, 20],
            [7, 8, 20, 25]
        ]

        for (let i = 0; i < edges.length; i++) {
            let val = getRandomInt(edges[i][2], edges[i][3]);
            arr[edges[i][0]][edges[i][1]] = val;
            arr[edges[i][1]][edges[i][0]] = val;
        }
        return arr;
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
        this.state.availablePaths = arr;
    }

    onPress(key) {
        let arr = this.state.visited.slice();
        const len = this.state.visited.length;

        if (this.state.visited[key]) {
            // ALERT
            this.setState(state => {
                return {
                    lives: state.lives - 1
                }
            })
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
                id={i}
                value={this.state.visited[i] ? 'visited' : 'not visited'}
                onClick={() => this.onPress(i)}
            />
        );
    }

    renderEdge(from, to) {
        return (
            <Text style={{ color: 'white' }}>
                {this.state.edgeList[from][to]}
            </Text>
        )
    }

    showNextButton() {
        if (this.state.visited.every(x => x == true)) {
            return <BackButton title='Next' to='PrimScreenTwo' />
        }
    }

    render() {
        this.updateAvailablePaths();
        const deviceDisplay = Dimensions.get("window");
        const maxWidth = deviceDisplay.width;
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 6, flexDirection: 'row' }}>
                    {/* <View style={{ flex: 1, backgroundColor: 'black' }}></View> */}

                    <ImageBackground
                        source={require(maxWidth > 1000
                            ? '../assets/PrimLarge2.png'
                            : '../assets/PrimSmall.jpg')}
                        style={{ flex: 6 }}
                        resizeMode='stretch'>

                        {/* NODE 0 */}
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 3 }}>
                                {/* BLANK */}
                            </View>

                            <View style={{ flex: 1 }}>
                                {this.renderNode(0)}
                            </View>

                            <View style={{ flex: 3 }}>
                                {/* BLANK */}
                            </View>

                        </View>

                        {/* EDGE 0to1 and EDGE 0to2 */}
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flex: 2 }}></View>
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                {this.renderEdge(0, 1)}
                            </View>
                            <View style={{ flex: 1 }}></View>
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                {this.renderEdge(0, 2)}
                            </View>
                            <View style={{ flex: 2 }}></View>
                        </View>

                        {/* NODE 1, EDGE 0to3, NODE 2 */}
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 1 }}>
                                {/* BLANK */}
                            </View>

                            <View style={{ flex: 1 }}>
                                {this.renderNode(1)}
                            </View>

                            <View style={{ flex: 2 }}>
                                {/* BLANK */}
                            </View>

                            <View style={{ flex: 1, alignItems: 'center' }}>
                                {this.renderEdge(0, 3)}
                            </View>

                            <View style={{ flex: 2 }}>
                                {/* BLANK */}
                            </View>

                            <View style={{ flex: 1 }}>
                                {this.renderNode(2)}
                            </View>

                            <View style={{ flex: 1 }}>
                                {/* BLANK */}
                            </View>
                        </View>

                        {/* EDGE 2to3 */}
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 6 }}>
                                {/* BLANK */}
                            </View>

                            <View style={{ flex: 1 }}>
                                {this.renderEdge(2, 3)}
                            </View>

                            <View style={{ flex: 2 }}>
                                {/* BLANK */}
                            </View>
                        </View>

                        {/* NODE 3 , EDGE 2to4 */}
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 3 }}>
                                {/* BLANK */}
                            </View>

                            <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
                                {this.renderNode(3)}
                            </View>

                            <View style={{ flex: 1.2 }}>
                                {/* BLANK */}
                            </View>

                            <View style={{ flex: 1 }}>
                                {this.renderEdge(2, 4)}
                            </View>

                            <View style={{ flex: 0.8 }}>
                                {/* BLANK */}
                            </View>

                        </View>

                        {/* EDGE 1to5, EDGE 3to4, EDGE2to7*/}
                        <View style={{ flex: 0.5, flexDirection: 'row' }}>
                            <View style={{ flex: 1 }}>
                                {/* BLANK */}
                            </View>
                            <View style={{ flex: 1 }}>
                                {this.renderEdge(1, 5)}
                            </View>

                            <View style={{ flex: 3 }}>
                                {/* BLANK */}
                            </View>

                            <View style={{ flex: 1 }}>
                                {this.renderEdge(3, 4)}
                            </View>

                            <View style={{ flex: 2 }}>
                                {/* BLANK */}
                            </View>

                            <View style={{ flex: 1 }}>
                                {this.renderEdge(2, 7)}
                            </View>
                        </View>

                        {/* EDGE 3to6, NODE 4 */}
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 2.5 }}>
                                {/* BLANK */}
                            </View>

                            <View style={{ flex: 1 }}>
                                {this.renderEdge(3, 6)}
                            </View>

                            <View style={{ flex: 0.5 }}>
                                {/* BLANK */}
                            </View>

                            <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
                                {this.renderNode(4)}
                            </View>

                            <View style={{ flex: 2 }}>
                                {/* BLANK */}
                            </View>
                        </View>

                        {/* BLANK */}
                        <View style={{ flex: 0.5, flexDirection: 'row' }}></View>

                        {/* NODE 5, EDGE4to6, EDGE4to7*/}
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                                {this.renderNode(5)}
                            </View>
                            <View style={{ flex: 2.5 }}>
                                {/* BLANK */}
                            </View>
                            <View style={{ flex: 1 }}>
                                {this.renderEdge(4, 6)}
                            </View>
                            <View style={{ flex: 1.5 }}>
                                {/* BLANK */}
                            </View>
                            <View style={{ flex: 1 }}>
                                {this.renderEdge(4, 7)}
                            </View>
                            <View style={{ flex: 0.5 }}>
                                {/* BLANK */}
                            </View>
                        </View>

                        {/* EDGE5to6 */}
                        <View style={{ flex: 0.5, flexDirection: 'row' }}>
                            <View style={{ flex: 1 }}>
                                {/* BLANK */}
                            </View>

                            <View style={{ flex: 1 }}>
                                {this.renderEdge(5, 6)}
                            </View>

                            <View style={{ flex: 4 }}>
                                {/* BLANK */}
                            </View>

                        </View>

                        {/* EDGE5to8, NODE 6 and NODE 7 */}
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 1 }}>
                                {/* BLANK */}
                            </View>

                            <View style={{ flex: 1 }}>
                                {this.renderEdge(5, 8)}
                            </View>

                            <View style={{ flex: 0.5 }}>
                                {/* BLANK */}
                            </View>

                            <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
                                {this.renderNode(6)}
                            </View>

                            <View style={{ flex: 2.5 }}>
                                {/* BLANK */}
                            </View>

                            <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
                                {this.renderNode(7)}
                            </View>
                        </View>

                        {/* EDGE6to8, EDGE7to8 */}
                        <View style={{ flex: 0.5, flexDirection: 'row' }}>
                            <View style={{ flex: 3 }}>
                                {/* BLANK */}
                            </View>

                            <View style={{ flex: 1 }}>
                                {this.renderEdge(6, 8)}
                            </View>

                            <View style={{ flex: 1 }}>
                                {/* BLANK */}
                            </View>

                            <View style={{ flex: 1 }}>
                                {this.renderEdge(7, 8)}
                            </View>

                            <View style={{ flex: 2 }}>
                                {/* BLANK */}
                            </View>
                        </View>

                        {/* NODE 8 */}
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 3 }}>
                                {/* BLANK */}
                            </View>

                            <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
                                {this.renderNode(8)}
                            </View>

                            <View style={{ flex: 3 }}>
                                {/* BLANK */}
                            </View>
                        </View>

                    </ImageBackground>
                    {/* <View style={{ flex: 1, backgroundColor: 'black' }}></View> */}
                </View>


                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 2 }}>
                        <BackButton title='Topics' to='Topics' />
                    </View>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 2 }}>
                        {this.showNextButton()}
                    </View>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                </View>
            </View>
        )
    }
}



function PrimScreenTwo({ navigation }) {
    return (
        <View>
            <Text>Heres a plot of the path you've designed.</Text>

            {/* SHOW GRAPH */}


            {/* Prev and Next buttons
            <View>
                <Button
                    title="Previous"
                    onPress={() => navigation.navigate('PrimScreenOne')}
                />
                <Button
                    title="Next"
                    onPress={() => navigation.navigate('PrimScreenTwo')}
                />
            </View> */}
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