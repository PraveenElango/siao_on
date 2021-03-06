import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, ImageBackground, Dimensions, Button } from "react-native";

// import Lives from '../Components/Lives';
import PrimNode from './PrimNode';
import BackButton from '../Components/BackButton';
import ModalEnhanced from '../Components/ModalEnhanced';
import { human } from 'react-native-typography';
// import LottieView from 'react-native-web-lottie';
// import LottieView from 'lottie-react-native';

function PrimScreenOne() {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1.5, justifyContent: 'center' }}>
                <View style={{ flex: 0.7 }}></View>
                <Text style={[human.largeTitle, { textAlign: 'center' }]}>Prim's Algorithm</Text>
            </View>

            <View style={{ flex: 4, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}></View>
                <View style={{ flex: 6 }}>
                    <View style={{ flex: 1 }} />
                    <Text style={human.body}>The famous war general Tywin Lannister wants to deploy his troops to defend his lands against the enemy.</Text>
                    <Text></Text>
                    <Text style={human.body}>You have been instructed to assist in the war planning. You are to select the paths the troupes
                will take from the capital to their deployment locations, while keeping the total distance travelled at a minimum.</Text>
                    <Text></Text>
                    <Text style={human.body}>Click the following button to open the map of Westeros, to begin.</Text>
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
                    <BackButton title='Next' to='Prim' />
                </View>
                <View style={{ flex: 1 }}>
                    {/* BLANK */}
                </View>
            </View>
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
            showAlert: false
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
                    lives: state.lives - 1,
                    showAlert: true,
                    alertText: 'Visited Node'
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
            this.setState({
                showAlert: true,
                alertText: 'Incorrect Node'
            })
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
            <Text style={{ color: 'white', fontWeight:'bold', fontSize: 18 }}>
                {this.state.edgeList[from][to]}
            </Text>
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
        if (this.state.visited.every(x => x == true)) {
            return <BackButton title='Next' to='PrimScreenThree' />
        }
    }

    render() {
        this.updateAvailablePaths();
        const deviceDisplay = Dimensions.get("window");
        const maxWidth = deviceDisplay.width;
        return (
            <View style={{ flex: 1 }}>
                {this.renderAlert()}
                <View style={{ flex: 6, flexDirection: 'row' }}>
                    <ImageBackground
                        source={require('../assets/PrimSmall.jpg')}
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
                            <View style={{ flex: 1.5 }}></View>
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

                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
                            <View style={{ flex: 4.5 }}>
                                {/* BLANK */}
                            </View>

                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                {this.renderEdge(2, 3)}
                            </View>

                            <View style={{ flex: 1.5 }}>
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

                            <View style={{ flex: 0.9 }}>
                                {/* BLANK */}
                            </View>

                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                {this.renderEdge(2, 4)}
                            </View>

                            <View style={{ flex: 1 }}>
                                {/* BLANK */}
                            </View>

                        </View>

                        {/* EDGE 1to5, EDGE 3to4, EDGE2to7*/}
                        <View style={{ flex: 0.5, flexDirection: 'row' }}>
                            <View style={{ flex: 0.8 }}>
                                {/* BLANK */}
                            </View>
                            <View style={{ flex: 1 }}>
                                {this.renderEdge(1, 5)}
                            </View>

                            <View style={{ flex: 3.1 }}>
                                {/* BLANK */}
                            </View>

                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                {this.renderEdge(3, 4)}
                            </View>

                            <View style={{ flex: 1.9 }}>
                                {/* BLANK */}
                            </View>

                            <View style={{ flex: 1 }}>
                                {this.renderEdge(2, 7)}
                            </View>

                            <View style={{ flex: 0.3 }}>
                                {/* BLANK */}
                            </View>

                        </View>

                        {/* EDGE 3to6, NODE 4 */}
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 1.9 }}>
                                {/* BLANK */}
                            </View>

                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                {this.renderEdge(3, 6)}
                            </View>

                            <View style={{ flex: 1 }}>
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
                            <View style={{ flex: 2.2 }}>
                                {/* BLANK */}
                            </View>
                            <View style={{ flex: 1 }}>
                                {this.renderEdge(4, 6)}
                            </View>
                            <View style={{ flex: 1.3 }}>
                                {/* BLANK */}
                            </View>
                            <View style={{ flex: 1, justifyContent:'center' }}>
                                {this.renderEdge(4, 7)}
                            </View>
                            <View style={{ flex: 1 }}>
                                {/* BLANK */}
                            </View>
                        </View>

                        {/* EDGE5to6 */}
                        <View style={{ flex: 0.5, flexDirection: 'row' }}>
                            <View style={{ flex: 1.4 }}>
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
                            <View style={{ flex: 1.3 }}>
                                {/* BLANK */}
                            </View>

                            <View style={{ flex: 1, alignItems:'center', justifyContent: 'center' }}>
                                {this.renderEdge(5, 8)}
                            </View>

                            <View style={{ flex: 0.2 }}>
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
                            <View style={{ flex: 3.7 }}>
                                {/* BLANK */}
                            </View>

                            <View style={{ flex: 1 }}>
                                {this.renderEdge(6, 8)}
                            </View>

                            <View style={{ flex: 1.4 }}>
                                {/* BLANK */}
                            </View>

                            <View style={{ flex: 1 }}>
                                {this.renderEdge(7, 8)}
                            </View>

                            <View style={{ flex: 1.6 }}>
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

function PrimScreenThree() {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>

            <View style={{ flex: 2, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}></View>
                <View style={{ flex: 12 }}>
                    <View style={{ flex: 2 }}></View>
                    <Text style={human.body}>In Computer Science, the path that you travelled from the capital to the end is known as
                a Minimum Spanning Tree (MST).</Text>
                    <Text></Text>
                    <Text style={human.body}>A MST represents the subset of the edges of a graph
                    that connects all the vertices together, without any cycles and with
                the minimum possible total edge weight.</Text>
                    <Text></Text>
                    <Text style={human.body}>The castles are the vertices and the paths between each castle to the next are the edges.</Text>
                </View>
                <View style={{ flex: 1 }}></View>
            </View>
            {/* Box */}
            <View style={{ flex: 2, backgroundColor: 'pink' }}>

            </View>

            {/* Prev and Next buttons */}
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1 }}>
                    {/* BLANK */}
                </View>
                <View style={{ flex: 2 }}>
                    <BackButton title='Previous' to='Prim' />
                </View>
                <View style={{ flex: 1 }}>
                    {/* BLANK */}
                </View>
                <View style={{ flex: 2 }}>
                    <BackButton title='Next' to='PrimScreenFour' />
                </View>
                <View style={{ flex: 1 }}>
                    {/* BLANK */}
                </View>
            </View>
        </View>
    );
}

function PrimScreenFour({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>

            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}></View>
                <View style={{ flex: 10 }}>
                    <View style={{ flex: 2 }}></View>
                    <Text style={human.body}>What you played in the game is an algorithm known as Prim's Algorithm.</Text>
                    <Text></Text>
                    <Text style={human.body}>Prim's algorithm is an algorithm used to find the Minimum Spanning Tree of a weighted undirected graph.</Text>
                    <Text></Text>
                </View>
                <View style={{ flex: 1 }}></View>
            </View>
            {/* Box */}
            <View style={{ flex: 2, backgroundColor: 'pink' }}>

            </View>

            {/* Prev and Next buttons */}
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1 }}>
                    {/* BLANK */}
                </View>
                <View style={{ flex: 2 }}>
                    <BackButton title='Previous' to='PrimScreenThree' />
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
    );
}

export { Prim, PrimScreenOne, PrimScreenThree, PrimScreenFour };