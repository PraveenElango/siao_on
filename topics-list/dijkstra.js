import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Button } from 'react-native-elements';
import DijkstraNode from './DijkstraNode';
import DijkstraEdge from './DijkstraEdge';
import Lives from '../Components/Lives';
import ModalEnhanced from '../Components/ModalEnhanced';

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
                    console.log('from node' + i + 'to node ' + j + ': ' + edgeVal);
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

        if (this.state.visitedPaths[from][to]) {
            console.log("Already visited Edge");
            this.setState(state => {
                return {
                    showAlert: true,
                    alertText: "Already visited Edge"
                }
            })

        } else if (fromNode != toNode && (edgeVal + this.state.finalPathValues[from]) == this.state.currentShortest) {
            this.setState(state => {
                return {
                    showAlert: true,
                    alertText: "Correct Edge!"
                }
            })
            console.log("Correct Edge!");
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
            console.log("Wrong Edge!");
            this.setState(state => {
                return {
                    showAlert: true,
                    alertText: "Wrong Edge!"
                }
            })
        }
    }

    renderNode(i) {
        return (
            <DijkstraNode
                id={i}
                value={this.state.visitedNodes[i] ? 'visited' : 'not visited'}
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
                visted={this.state.visitedPaths[from][to]}
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

    render() {
        this.updateAvailablePaths();

        return (
            <View style={{ flex: 1, flexDirection: 'row' }}>
                {this.renderAlert()}
                {/* ACTUAL MAP */}
                {/* <ImageBackground
                    source={require('../assets/dijkstra_cropped.png')}
                    style={{ flex: 1, flexDirection: 'row' }}
                    resizeMode='stretch'> */}

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
                {/* </ImageBackground> */}
            </View>

        )
    }
}

function DijkstraScreenOne({ navigation }) {
    return (
        <View>
            <Text>Dijkstra's Algorithm</Text>
            <Text>The bad guys have held hostages in five different locations in Singapore.
            You will need to help our main character find the shortest path to get to those
            3 locations from his starting point. Click the following button to open
            the Map of Singapore to guide him.
                </Text>
            <Button
                title="Open Map"
                onPress={() => navigation.navigate('DijkstraScreenTwo')}
            />
        </View>

    );
}


function DijkstraScreenTwo({ navigation }) {
    return (
        <View>
            {/* Background Image */}

            {/* Locations */}
            <View style={styles.circle} />
            <View style={styles.circle} />
            <View style={styles.circle} />
            <View style={styles.circle} />

            {/* Table */}
            <View>
                {/* Row 1 */}
                <View>
                    <View>
                        {/* Col 1  */}
                    </View>
                    <View>
                        {/* Col 1  */}
                    </View>
                </View>
                {/* Row 2 */}
                <View>
                    <View>
                        {/* Col 1  */}
                    </View>
                    <View>
                        {/* Col 1  */}
                    </View>
                </View>
            </View>

        </View>
    )
}

function DijkstraScreenTwoWrong({ navigation }) {
    return (
        <View>
            {/* Background Image */}

            {/* Locations */}
            <View style={styles.circle} />
            <View style={styles.circle} />
            <View style={styles.circle} />
            <View style={styles.circle} />

            {/* Wrong Message */}
            <View style={styles.wrongMessage}>
                <Text>
                    You have selected the longer path. Try again!
                </Text>
            </View>

            {/* Table */}
            <View>
                {/* Row 1 */}
                <View>
                    <View>
                        {/* Col 1  */}
                    </View>
                    <View>
                        {/* Col 1  */}
                    </View>
                </View>
                {/* Row 2 */}
                <View>
                    <View>
                        {/* Col 1  */}
                    </View>
                    <View>
                        {/* Col 1  */}
                    </View>
                </View>
            </View>

        </View>
    )
}

function DijkstraScreenThree({ navigation }) {
    return (
        <View>
            {/* Background Image */}

            {/* Locations */}
            <View style={styles.circle} />
            <View style={styles.circle} />
            <View style={styles.circle} />
            <View style={styles.circle} />

            {/* Table */}
            <View>
                {/* Row 1 */}
                <View>
                    <View>
                        {/* Col 1  */}
                    </View>
                    <View>
                        {/* Col 1  */}
                    </View>
                </View>
                {/* Row 2 */}
                <View>
                    <View>
                        {/* Col 1  */}
                    </View>
                    <View>
                        {/* Col 1  */}
                    </View>
                </View>
            </View>

        </View>
    )
}

function DijkstraScreenThreeWrong({ navigation }) {
    return (
        <View>
            {/* Background Image */}

            {/* Locations */}
            <View style={styles.circle} />
            <View style={styles.circle} />
            <View style={styles.circle} />
            <View style={styles.circle} />

            {/* Wrong Message */}
            <View style={styles.wrongMessage}>
                <Text>
                    You have selected the longer path. Try again!
                </Text>
            </View>

            {/* Table */}
            <View>
                {/* Row 1 */}
                <View>
                    <View>
                        {/* Col 1  */}
                    </View>
                    <View>
                        {/* Col 1  */}
                    </View>
                </View>
                {/* Row 2 */}
                <View>
                    <View>
                        {/* Col 1  */}
                    </View>
                    <View>
                        {/* Col 1  */}
                    </View>
                </View>
            </View>

        </View>
    )
}

function DijkstraScreenFour({ navigation }) {
    return (
        <View>
            {/* Background Image */}

            {/* Locations */}
            <View style={styles.circle} />
            <View style={styles.circle} />
            <View style={styles.circle} />
            <View style={styles.circle} />

            {/* Table */}
            <View>
                {/* Row 1 */}
                <View>
                    <View>
                        {/* Col 1  */}
                    </View>
                    <View>
                        {/* Col 1  */}
                    </View>
                </View>
                {/* Row 2 */}
                <View>
                    <View>
                        {/* Col 1  */}
                    </View>
                    <View>
                        {/* Col 1  */}
                    </View>
                </View>
            </View>

        </View>
    )
}
function DijkstraScreenFourWrong({ navigation }) {
    return (
        <View>
            {/* Background Image */}

            {/* Locations */}
            <View style={styles.circle} />
            <View style={styles.circle} />
            <View style={styles.circle} />
            <View style={styles.circle} />

            {/* Wrong Message */}
            <View style={styles.wrongMessage}>
                <Text>
                    You have selected the longer path. Try again!
                </Text>
            </View>

            {/* Table */}
            <View>
                {/* Row 1 */}
                <View>
                    <View>
                        {/* Col 1  */}
                    </View>
                    <View>
                        {/* Col 1  */}
                    </View>
                </View>
                {/* Row 2 */}
                <View>
                    <View>
                        {/* Col 1  */}
                    </View>
                    <View>
                        {/* Col 1  */}
                    </View>
                </View>
            </View>

        </View>
    )
}

function DijkstraScreenFive({ navigation }) {
    return (
        <View>
            {/* Background Image */}

            {/* Locations */}
            <View style={styles.circle} />
            <View style={styles.circle} />
            <View style={styles.circle} />
            <View style={styles.circle} />

            {/* Congrats Message */}
            <View style={styles.wrongMessage}>
                <Text>
                    Congratulations! You have completed the path! Click the next button.
                </Text>
                <Button
                    title="Next"
                    onPress={() => navigation.navigate('DijkstraScreenSix')}
                />
            </View>

            {/* Table */}
            <View>
                {/* Row 1 */}
                <View>
                    <View>
                        {/* Col 1  */}
                    </View>
                    <View>
                        {/* Col 1  */}
                    </View>
                </View>
                {/* Row 2 */}
                <View>
                    <View>
                        {/* Col 1  */}
                    </View>
                    <View>
                        {/* Col 1  */}
                    </View>
                </View>
            </View>

        </View>
    )
}

function DijkstraScreenSix({ navigation }) {
    return (
        <View>
            <Text>Here's a plot of the path you've traversed.</Text>
            <View>
                <Button
                    title="Previous"
                    onPress={() => navigation.navigate('Dijkstra')}
                />
            </View>
            <View>
                <Button
                    title="Next"
                    onPress={() => navigation.navigate('DijkstraScreenSeven')}
                />
            </View>
            {/* Show Path */}

        </View>

    )
}

function DijkstraScreenSeven({ navigation }) {
    return (
        <View>
            <Text>
                In Computer Science, the following path can be represented as
                a Data Structure known as graphs.
                A graph consists of nodes and edges.
            </Text>
            <View>
                <Button
                    title="Previous"
                    onPress={() => navigation.navigate('DijkstraScreenSix')}
                />
            </View>
            <View>
                <Button
                    title="Next"
                    onPress={() => navigation.navigate('DijkstraScreenEight')}
                />
            </View>

            {/* Show Path transforming to graph*/}

        </View>
    )
}

function DijkstraScreenEight({ navigation }) {
    return (
        <View>
            <Text>
                What you played in the game was a graph traversal
                Algorithm known as Dijkstra's Algorithm.
                Dijkstra's Algorithm is a graph traversal method to
                find the shortest path from the starting node (S) to all
                the other nodes in the graph (A, B, C).
            </Text>
            <View>
                <Button
                    title="Previous"
                    onPress={() => navigation.navigate('DijkstraSeven')}
                />
            </View>
            <View>
                <Button
                    title="Next"
                    onPress={() => navigation.navigate('DijkstraScreenNine')}
                />
            </View>
            {/* Show graph with S, A, B, C highlighted */}

        </View>
    )
}

function DijkstraScreenNine({ navigation }) {
    return (
        <View>
            <Text>
                Here's how Dijkstra's Algorithm can be written out in code:
            </Text>

            {/* Show Dijkstra Code */}

            <View>
                <Button
                    title="Previous"
                    onPress={() => navigation.navigate('DijkstraScreenEight')}
                />
            </View>
            <View>
                <Button
                    title="Finish"
                    onPress={() => navigation.navigate('Topics')}
                />
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
    Dijkstra, DijkstraScreenOne, DijkstraScreenTwo, DijkstraScreenTwoWrong,
    DijkstraScreenThree, DijkstraScreenThreeWrong, DijkstraScreenFour,
    DijkstraScreenFourWrong, DijkstraScreenFive, DijkstraScreenSix,
    DijkstraScreenSeven, DijkstraScreenEight, DijkstraScreenNine
};