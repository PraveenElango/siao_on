import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Button } from 'react-native-elements';
import DijkstraNode from './DijkstraNode';
import DijkstraEdge from './DijkstraEdge';
// import Lives from '../Components/Lives';
import ModalEnhanced from '../Components/ModalEnhanced';
import { human } from 'react-native-typography';
// import LottieView from 'react-native-web-lottie';
import BackButton from '../Components/BackButton';
// import LottieView from 'lottie-react-native';
import DijkstraBackground from '../assets/DijkstraImages/DijkstraBackground.png';

function DijkstraStart() {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 2, justifyContent: 'center' }}>
                <View style={{ flex: 0.1 }}></View>
                <Text style={[human.largeTitle, { textAlign: 'center' }]}>Dijkstra's Algorithm</Text>
            </View>

            <View style={{ flex: 4, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}></View>
                <View style={{ flex: 6 }}>
                    <View style={{ flex: 1 }} />
                    <Text style={human.body}>The bad guys have held hostages in five different locations in Singapore.
                    You will need to help our main character find the shortest path to get to those
                        3 locations from his starting point.</Text>
                    <Text></Text>
                    <Text style={human.body}>Click the following button to open
                        the Map of Singapore to guide him.</Text>
                    <View style={{ flex: 1 }} />
                </View>
                <View style={{ flex: 1 }}></View>
            </View>

            {/* Prev and Next buttons */}
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
                    <BackButton title='Next' to='DijkstraScreenOne' />
                </View>
                <View style={{ flex: 1 }}>
                    {/* BLANK */}
                </View>
            </View>
        </View>
    );
}

function DijkstraScreenOne() {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>

            <View style={{ flex: 2, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}></View>
                <View style={{ flex: 10 }}>
                    <View style={{ flex: 2 }}></View>
                    <Text style={human.body}>Before we start, let us give you some key pointers to look out for.</Text>
                    <Text></Text>
                    <Text style={human.body}>Initially, only the start point will be marked as visited. An accessible path connects an already visited location, to an unvisited location</Text>
                    {/* <View style={{ flex: 1 }}></View> */}
                </View>
                <View style={{ flex: 1 }}></View>
            </View>
            {/* Box */}
            <View style={{ flex: 2, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}></View>
                <View style={{ flex: 10 }}>
                    <View style={{ flex: 1 }}></View>
                    <Text style={human.body}>What you need to do is, at each step, select the path that contributes to the smallest cumulative total distance from the start location to that newly visited location</Text>
                    <Text></Text>
                    <Text style={human.body}>Remember, you can only select paths that are accessible. Don't skip steps. Good Luck!</Text>
                    <View style={{ flex: 1 }}></View>
                </View>
                <View style={{ flex: 1 }}></View>
            </View>

            {/* Prev and Next buttons */}
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1 }}>
                    {/* BLANK */}
                </View>
                <View style={{ flex: 2 }}>
                    <BackButton title='Previous' to='DijkstraStart' />
                </View>
                <View style={{ flex: 1 }}>
                    {/* BLANK */}
                </View>
                <View style={{ flex: 2 }}>
                    <BackButton title='Next' to='Dijkstra' />
                </View>
                <View style={{ flex: 1 }}>
                    {/* BLANK */}
                </View>
            </View>
        </View>
    );
}

class Dijkstra extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edgeList: [
                [null, 5, null, 3, null, null, null, null, null],
                [5, null, 7, null, 4, null, null, null, null],
                [null, 7, null, null, null, 3, null, null, null],
                [3, null, null, 6, null, null, 4, null, null],
                [null, 4, null, 6, null, 7, null, 4, null],
                [null, null, 3, null, 7, null, null, null, 3],
                [null, null, null, 4, null, null, 5, null, null],
                [null, null, null, 4, null, 5, null, null, 8],
                [null, null, null, null, null, 3, null, 8, null]],
            visitedNodes: [true, false, false, false, false, false, false, false, false],
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
            visitedPaths: [
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
            finalPathValues: [0, null, null, null, null, null, null, null, null],
            showAlert: false,
            alertText: null
        }
    }

    updateAvailablePaths() {
        let arr = this.state.availablePaths.slice();
        const len = this.state.visitedNodes.length;

        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                let edgeVal = this.state.edgeList[i][j];
                let startNode = this.state.visitedNodes[i];
                let endNode = this.state.visitedNodes[j];

                if (edgeVal != null && startNode && !endNode) {
                    arr[i][j] = this.state.finalPathValues[i] + edgeVal;

                    if (this.state.currentShortest == -1 ||
                        (edgeVal + this.state.finalPathValues[i]) < this.state.currentShortest) {
                        this.state.currentShortest = edgeVal + this.state.finalPathValues[i];
                    }
                } else {
                    arr[i][j] = null;
                }
            }
        }
        console.log("current shortest = " + this.state.currentShortest)
        this.state.availablePaths = arr;
    }

    onEdgePress(from, to) {
        let arr = this.state.visitedPaths.slice();
        let nodeArr = this.state.visitedNodes.slice();
        let finalVal = this.state.finalPathValues.slice();

        let fromNode = this.state.visitedNodes[from];
        let toNode = this.state.visitedNodes[to];
        const edgeVal = this.state.edgeList[from][to];

        console.log(from + ' ' + to);
        if (this.state.visitedPaths[from][to]) {
            console.log("Already visited Edge");
            this.setState(state => {
                return {
                    showAlert: true,
                    alertText: "The edge has already been visited. Try again on another unvisited edge!"
                }
            })

        } else if (fromNode != toNode && (edgeVal + this.state.finalPathValues[from]) == this.state.currentShortest) {
            this.setState(state => {
                return {
                    showAlert: true,
                    alertText: "Correct Edge!"
                }
            })
            arr[from][to] = true;
            arr[to][from] = true;
            if (fromNode && !toNode) {
                nodeArr[to] = true;
                finalVal[to] = this.state.currentShortest;
            } else {
                nodeArr[from] = true;
                finalVal[from] = this.state.currentShortest;
            }
            this.setState({
                visitedPaths: arr,
                visitedNodes: nodeArr,
                finalPathValues: finalVal,
                currentShortest: -1
            });
            this.updateAvailablePaths();
        } else {
            console.log("");
            this.setState(state => {
                return {
                    showAlert: true,
                    alertText: "Wrong! There exists an unvisited path of a lower total value. Try again!"
                }
            })
        }
    }

    renderNode(i) {
        return (
            <DijkstraNode
                id={i}
                value={this.state.visitedNodes[i] ? this.state.finalPathValues[i] : 'Not visited'}
            />
        );
    }

    renderEdge(from, to, isVertical) {
        return (
            <DijkstraEdge
                fromNode={from}
                toNode={to}
                vertical={isVertical}
                value={this.state.edgeList[from][to]}
                visited={this.state.visitedPaths[from][to]}
                onClick={() => this.onEdgePress(from, to)}
            />
        )
    }

    renderAlert() {
        return (
            <ModalEnhanced
                showAlert={this.state.showAlert}
                closeAlert={() => this.setState({ showAlert: false })}
                text={this.state.alertText}
            />
        )
    }

    showNextButton() {
        if (this.state.visitedNodes[8]) {
            return (
                <BackButton title='Next' to='DijkstraScreenTwo' />
            )
        }
    }

    render() {
        this.updateAvailablePaths();

        return (
            <View style={{ flex: 1 }}>
                {this.renderAlert()}
                <View style={{ flex: 1 }}></View>
                <ImageBackground source={DijkstraBackground} style={{ flex: 6, flexDirection: 'row', resizeMode: 'stretch' }}>
                    {this.renderAlert()}
                    {/* ACTUAL MAP */}

                    {/* COLUMN 1 */}
                    <View style={{ flex: 1 }}>
                        {this.renderNode(6)}
                        {this.renderEdge(3, 6, true)}
                        {this.renderNode(3)}
                        {this.renderEdge(0, 3, true)}
                        {this.renderNode(0)}
                    </View>
                    {/* COLUMN 2 */}
                    <View style={{ flex: 1 }}>
                        {this.renderEdge(6, 7, false)}
                        <View style={{ flex: 1 }}>
                            {/* BLANK */}
                        </View>
                        {this.renderEdge(3, 4, false)}
                        <View style={{ flex: 1 }}>
                            {/* BLANK */}
                        </View>
                        {this.renderEdge(0, 1, false)}
                    </View>
                    {/* COLUMN 3 */}
                    <View style={{ flex: 1 }}>
                        {this.renderNode(7)}
                        {this.renderEdge(4, 7, true)}
                        {this.renderNode(4)}
                        {this.renderEdge(1, 4, true)}
                        {this.renderNode(1)}
                    </View>
                    {/* COLUMN 4 */}
                    <View style={{ flex: 1 }}>
                        {this.renderEdge(7, 8, false)}
                        <View style={{ flex: 1 }}>
                            {/* BLANK */}
                        </View>
                        {this.renderEdge(4, 5, false)}
                        <View style={{ flex: 1 }}>
                            {/* BLANK */}
                        </View>
                        {this.renderEdge(1, 2, false)}
                    </View>
                    {/* COLUMN 5 */}
                    <View style={{ flex: 1 }}>
                        {this.renderNode(8)}
                        {this.renderEdge(5, 8, true)}
                        {this.renderNode(5)}
                        {this.renderEdge(2, 5, true)}
                        {this.renderNode(2)}
                    </View>
                </ImageBackground>

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

function DijkstraScreenTwo({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>

            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}></View>
                <View style={{ flex: 10 }}>
                    <View style={{ flex: 2 }}></View>
                    <Text style={human.body}>Here's a plot of the path you've traversed.</Text>
                    <Text></Text>
                </View>
                <View style={{ flex: 1 }}></View>
            </View>
            {/* Box */}
            <View style={{ flex: 2, backgroundColor:'pink' }}>
                
            </View>

            {/* Prev and Next buttons */}
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1 }}>
                    {/* BLANK */}
                </View>
                <View style={{ flex: 2 }}>
                    <BackButton title='Previous' to='Dijkstra' />
                </View>
                <View style={{ flex: 1 }}>
                    {/* BLANK */}
                </View>
                <View style={{ flex: 2 }}>
                    <BackButton title='Next' to='DijkstraScreenThree' />
                </View>
                <View style={{ flex: 1 }}>
                    {/* BLANK */}
                </View>
            </View>
        </View>

    )
}

function DijkstraScreenThree({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>

            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}></View>
                <View style={{ flex: 10 }}>
                    <View style={{ flex: 2 }}></View>
                    <Text style={human.body}>In Computer Science, the path can be represented in
                a Data Structure known as graphs.
                A graph consists of nodes and edges.</Text>
                    <Text></Text>
                </View>
                <View style={{ flex: 1 }}></View>
            </View>
            {/* Box */}
            <View style={{ flex: 2, backgroundColor:'pink' }}>
                
            </View>

            {/* Prev and Next buttons */}
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1 }}>
                    {/* BLANK */}
                </View>
                <View style={{ flex: 2 }}>
                    <BackButton title='Previous' to='DijkstraScreenTwo' />
                </View>
                <View style={{ flex: 1 }}>
                    {/* BLANK */}
                </View>
                <View style={{ flex: 2 }}>
                    <BackButton title='Next' to='DijkstraScreenFour' />
                </View>
                <View style={{ flex: 1 }}>
                    {/* BLANK */}
                </View>
            </View>
        </View>

    )
}

function DijkstraScreenFour({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>

            <View style={{ flex: 1.2, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}></View>
                <View style={{ flex: 10 }}>
                    <View style={{ flex: 2 }}></View>
                    <Text style={human.body}>What you played in the game was a graph traversal
                Algorithm known as Dijkstra's Algorithm.
                Dijkstra's Algorithm is a graph traversal method to
                find the shortest path from the starting node to all
                the other nodes in the graph.</Text>
                    <Text></Text>
                </View>
                <View style={{ flex: 1 }}></View>
            </View>
            {/* Box */}
            <View style={{ flex: 2, backgroundColor:'pink' }}>
                
            </View>

            {/* Prev and Next buttons */}
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1 }}>
                    {/* BLANK */}
                </View>
                <View style={{ flex: 2 }}>
                    <BackButton title='Previous' to='DijkstraScreenThree' />
                </View>
                <View style={{ flex: 1 }}>
                    {/* BLANK */}
                </View>
                <View style={{ flex: 2 }}>
                    <BackButton title='Exit' to='Topics' />
                </View>
                <View style={{ flex: 1 }}>
                    {/* BLANK */}
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    circle: {
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
    }
})
export {
    DijkstraStart, Dijkstra, DijkstraScreenOne, DijkstraScreenTwo,
    DijkstraScreenThree, DijkstraScreenFour
};