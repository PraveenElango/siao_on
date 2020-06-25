import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { CheckBox, Button } from 'react-native-elements'
import BackButton from '../Components/BackButton'

function LinkedLists({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <Text>Linked Lists</Text>

            <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 0.5 }} />
                <TouchableOpacity style={[styles.boxcar, { flex: 1 }]} onPress={() => navigation.navigate('LLScreenTwo')} />
                <View style={{ flex: 0.5 }} />
                <TouchableOpacity style={[styles.boxcar, { flex: 1 }]} onPress={() => navigation.navigate('LLScreenTwo')} />
                <View style={{ flex: 0.5 }} />
                <TouchableOpacity style={[styles.boxcar, { flex: 1 }]} onPress={() => navigation.navigate('LLScreenTwo')} />
                <View style={{ flex: 0.5 }} />
            </View>

            <View style={{ flex: 0.5 }}>

            </View>
            <View style={{ flex: 1 }}>
                <BackButton to='Topics' title='Previous' />
            </View>
        </View>
    );
}

class LLScreenTwo extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            flourbagsPressed: false,
            boxcarPressed: false,
            connectorPressed: false
        }
    }

    displayNextButton() {
        if (this.state.flourbagsPressed &&
            this.state.boxcarPressed &&
            this.state.connectorPressed) {
            return (<BackButton to='LLScreenThree' title='Next' />);
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>

                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text>Click on the three components that make up the train carriage</Text>
                </View>

                {/* Outer box  */}
                <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 2 }}>
                        {/* BLANK */}
                    </View>
                    {/* Inner box  */}
                    <TouchableOpacity
                        style={[{ flex: 3 }, styles.boxcar]}
                        onPress={() => {
                            this.setState((state) => {
                                return {
                                    boxcarPressed: true
                                }
                            })
                        }}>

                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flex: 1 }}>
                                {/* BLANK */}
                            </View>
                            <TouchableOpacity
                                style={[{ flex: 1 }, styles.flourbags]}
                                onPress={() => {
                                    this.setState((state) => {
                                        return {
                                            flourbagsPressed: true
                                        }
                                    })
                                }}>
                                {/* Flour */}
                            </TouchableOpacity>
                            <View style={{ flex: 1 }}>
                                {/* BLANK */}
                            </View>
                            <TouchableOpacity
                                style={[{ flex: 1 }, styles.flourbags]}
                                onPress={() => {
                                    this.setState((state) => {
                                        return {
                                            flourbagsPressed: true
                                        }
                                    })
                                }}>
                                {/* Flour */}
                            </TouchableOpacity>
                            <View style={{ flex: 1 }}>
                                {/* BLANK */}
                            </View>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flex: 1 }}>
                                {/* BLANK */}
                            </View>
                            <TouchableOpacity
                                style={[{ flex: 1 }, styles.flourbags]}
                                onPress={() => {
                                    this.setState((state) => {
                                        return {
                                            flourbagsPressed: true
                                        }
                                    })
                                }}>
                                {/* Flour */}
                            </TouchableOpacity>
                            <View style={{ flex: 1 }}>
                                {/* BLANK */}
                            </View>
                            <TouchableOpacity
                                style={[{ flex: 1 }, styles.flourbags]}
                                onPress={() => {
                                    this.setState((state) => {
                                        return {
                                            flourbagsPressed: true
                                        }
                                    })
                                }}>
                                {/* Flour */}
                            </TouchableOpacity>
                            <View style={{ flex: 1 }}>
                                {/* BLANK */}
                            </View>
                        </View>
                    </TouchableOpacity>

                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity
                            style={[{ flex: 1 }, styles.connector]}
                            onPress={() => {
                                this.setState((state) => {
                                    return {
                                        connectorPressed: true
                                    }
                                })
                            }}>
                            {/* Connector */}
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 2 }}>
                        {/* BLANK */}
                    </View>
                </View>

                <View style={{ flex: 1 }}>
                    {/* BLANK */}
                </View>

                {/* Checkboxes */}
                <View style={{ flex: 2, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 1 }}>
                        <CheckBox
                            title='4 flour bags'
                            checked={this.state.flourbagsPressed}
                        />
                        <CheckBox
                            title='Boxcar'
                            checked={this.state.boxcarPressed}
                        />
                        <CheckBox
                            title='Connector'
                            checked={this.state.connectorPressed}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>


                </View>

                {/* Prev and Next buttons */}
                <View style={{ flex: 2, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                    
                    <View style={{ flex: 1 }}>
                        <View style={{flex:1}}>
                        <BackButton to='Linked List' title='Previous' />
                        </View>
                        
                        <View style={{flex:0.3}}>

                        </View>
                        
                        <View style={{flex:1}}>
                            {this.displayNextButton()}
                        </View>

                    </View>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                </View>
                
            </View>
        )
    }
}

class LLScreenThree extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            nodeButtonPressed: false
        }
    }

    pressNodeButton() {
        if (this.state.nodeButtonPressed) {
            return (
                <View style={styles.boxcar} />
            );
        }
    }

    displayNextButton() {
        if (this.state.nodeButtonPressed) {
            return (<BackButton to='LLScreenFour' title='Next' />);
        }
    }

    render() {
        return (
            <View>
                <View>
                    <Text>
                        In Computer Science, the carriage below can be represented
                        by a data structure called Node.
                    </Text>
                </View>

                <View style={styles.boxcar} />
                <TouchableOpacity
                    // title="CLICK TO SEE NODE"
                    onClick={() => {
                        this.setState((state) => {
                            return {
                                nodeButtonPressed: true
                            }
                        })
                    }}
                >
                    <Text>CLICK TO SEE NODE</Text>
                </TouchableOpacity>
                {this.pressNodeButton()}

                <BackButton to='LLScreenTwo' title='Previous' />
                {this.displayNextButton()}

            </View>
        );
    }
}

class LLScreenFour extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentSelection: null,
            done: [false, false, false]
        }
    }

    displayNextButton() {
        if (this.state.done[0] && this.state.done[1] && this.state.done[2]) {
            return (<BackButton to='LLScreenFive' title='Next' />);
        }
    }

    renderLeftButton(id, text) {
        let inputText = <Text>{text}</Text>
        if (this.state.done[id]) {
            return (
                <TouchableOpacity
                    style={styles.done}
                >
                    {inputText}
                </TouchableOpacity>
            )
        } else if (id == this.state.currentSelection) {
            return (
                <TouchableOpacity
                    style={styles.selected}
                >
                    {inputText}
                </TouchableOpacity>
            )
        } else if (this.state.currentSelection == null) {
            return (
                <TouchableOpacity
                    style={styles.unselected}
                    onPress={() => this.setState((state) => {
                        return ({
                            currentSelection: id
                        })
                    })}
                >
                    {inputText}
                </TouchableOpacity>
            )
        } else {
            return (
                <TouchableOpacity
                    style={styles.unselected}
                >
                    {inputText}
                </TouchableOpacity>
            )
        }
    }

    renderRightButton(id, text) {
        let inputText = <Text>{text}</Text>
        if (this.state.done[id]) {
            return (
                <TouchableOpacity
                    style={styles.done}
                >
                    {inputText}
                </TouchableOpacity>
            )
        } else {
            return (
                <TouchableOpacity
                    style={styles.unselected}
                    onPress={() => this.setState((state) => {
                        if (this.state.currentSelection == id) {
                            let arr = state.done.slice();
                            arr[id] = true;
                            return ({
                                done: arr,
                                currentSelection: null
                            })
                        } else {
                            return ({
                                currentSelection: null
                            })
                        }
                    })}
                >
                    {inputText}
                </TouchableOpacity>
            )
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>

                <View style={{ flex: 0.5 }}>
                    {/* BLANK */}
                </View>

                <View style={{ flex: 0.5, alignItems: 'center' }}>
                    <Text>
                        Match the Corresponding components of the train carriage with
                        those of the node.
                    </Text>
                </View>

                <View style={{ flex: 0.5 }}>
                    {/* BLANK */}
                </View>

                <View style={{ flex: 1, alignItems: 'center'}}>
                    {/* Train box  */}
                    <View style={styles.boxcar} />
                </View>

                <View style={{ flex: 0.5 }}>
                    {/* BLANK */}
                </View>

                <View style={{ flex: 1, alignItems: 'center'}}>
                    {/* Train box  */}
                    <View style={styles.boxcar} />
                </View>

                <View style={{ flex: 0.5 }}>
                    {/* BLANK */}
                </View>

                <View style={{ flex: 1, flexDirection: 'row', }}>
                    <View style={{ flex: 0.5 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 1 }}>
                        {this.renderLeftButton(0, "Carriage")}
                        <View style={{ flex: 0.5 }}>
                            {/* BLANK */}
                        </View>
                        {this.renderLeftButton(1, "Flour Bags")}
                        <View style={{ flex: 0.5 }}>
                            {/* BLANK */}
                        </View>
                        {this.renderLeftButton(2, "Connector")}
                    </View>
                    <View style={{ flex: 0.5 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 1 }}>
                        {this.renderRightButton(2, "Next pointer")}
                        <View style={{ flex: 0.5 }}>
                            {/* BLANK */}
                        </View>
                        {this.renderRightButton(0, "Node")}
                        <View style={{ flex: 0.5 }}>
                            {/* BLANK */}
                        </View>
                        {this.renderRightButton(1, "Value")}
                    </View>
                    <View style={{ flex: 0.5 }}>
                        {/* BLANK */}
                    </View>
                </View>

                <View style={{ flex: 0.5 }}>
                    {/* BLANK */}
                </View>

                {/* Prev and Next buttons */}
                <View style={{ flex: 1 }}>
                    <BackButton to='LLScreenThree' title='Previous' />
                    {this.displayNextButton()}
                </View>
            </View>
        )
    }
}

function LLScreenFive({ navigation }) {
    return (
        <View>
            <View>
                <Text>
                    The node has two main components - val and next ptr.
                </Text>
            </View>

            <View style={styles.train} />

            <Text>
                The next ptr of this node(let's call it Node A) can
                be used to point to another node. Press next to find out how.
            </Text>

            {/* //Prev and Next buttons */}
            <View>
                <Button
                    title="Previous"
                    onPress={() => navigation.navigate('LLScreenFour')}
                />
                <Button
                    title="Next"
                    onPress={() => navigation.navigate('LLScreenSix')}
                />
            </View>
        </View>

    )
}

function LLScreenSix({ navigation }) {
    return (
        <View>

            <Text>
                The next ptr of Node A is now pointing to the whole of
                Node B.
            </Text>

            <View style={styles.train} />

            <Text>
                But what exactly is stored inside the next field so that it
                can point to the whole of Node B?
            </Text>

            <Button
                title="Click to find out"
                onPress={() => navigation.navigate('LLScreenSix_verTwo')}
            />
            {/* //Prev and Next buttons */}
            <View>
                <Button
                    title="Previous"
                    onPress={() => navigation.navigate('LLScreenFive')}
                />
            </View>
        </View>

    )
}

function LLScreenSix_verTwo({ navigation }) {
    return (
        <View>

            <Text>
                The next ptr of Node A is now pointing to the whole of
                Node B.
            </Text>

            <View style={styles.train} />

            <Text>
                But what exactly is stored inside the next field so that it
                can point to the whole of Node B?
            </Text>

            <View style={styles.train} />

            <Text>
                Each node has a memory address.
                The next field of Node A stores the memory address of
                Node B. This makes Node A point to Node B.
            </Text>

            {/* //Prev and Next buttons */}
            <View>
                <Button
                    title="Previous"
                    onPress={() => navigation.navigate('LLScreenFive')}
                />
                <Button
                    title="Next"
                    onPress={() => navigation.navigate('LLScreenSeven')}
                />
            </View>
        </View>

    )
}

function LLScreenSeven({ navigation }) {
    return (
        <View>
            <View>
                <Text>
                    When we have one node pointing to another node,
                    we call the whole structure a LINKED LIST
                </Text>
            </View>

            <View style={styles.train} />
            <View style={styles.train} />

            <Text>
                However, nodes in linked lists don't always have to point to another node.
                Sometimes, they can point to nothing or null, as we call it.
            </Text>

            <View style={styles.train} />
            <View style={styles.train} />

            {/* //Prev and Next buttons */}
            <View>
                <Button
                    title="Previous"
                    onPress={() => navigation.navigate('LLScreenSix')}
                />
                <Button
                    title="Next"
                    onPress={() => navigation.navigate('LLScreenEight')}
                />
            </View>
        </View>

    )
}
function LLScreenEight({ navigation }) {
    return (
        <View>
            <View>
                <Text>
                    Now, notice the resemblance?
                </Text>
            </View>

            <View style={styles.train} />

            <View style={styles.train} />

            <View style={styles.train} />

            <View style={styles.train} />

            <View style={styles.train} />

            <View style={styles.train} />

            <View style={styles.train} />

            <View>
                <Button
                    title="Previous"
                    onPress={() => navigation.navigate('LLScreenSeven')}
                />
            </View>
            <View>
                <Button
                    title="Next"
                    onPress={() => navigation.navigate('LLScreenNine')}
                />
            </View>
        </View>
    );
}

function LLScreenNine({ navigation }) {
    return (
        <View>
            <View>
                <Text>
                    Here's the code for a Node
                </Text>
            </View>

            <View style={styles.train} />


            <View>
                <Button
                    title="Previous"
                    onPress={() => navigation.navigate('LLScreenEight')}
                />
            </View>
            <View>
                <Button
                    title="Next"
                    onPress={() => navigation.navigate('LLScreenTen')}
                />
            </View>
        </View >
    )
}

function LLScreenTen({ navigation }) {
    return (
        <View>
            <View>
                <Text>
                    Here's the code for a Linked List
                </Text>
            </View>

            <View style={styles.train} />
            <View style={styles.train} />
            <View style={styles.train} />
            <View style={styles.train} />


            <View>
                <Button
                    title="Previous"
                    onPress={() => navigation.navigate('LLScreenNine')}
                />
            </View>
            <View>
                <Button
                    title="Exit"
                    onPress={() => navigation.navigate('Topics')}
                />
            </View>
        </View >
    )
}


const styles = StyleSheet.create({
    boxcar: {
        marginTop: 16,
        width: '50%',
        height: '100%',
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
        backgroundColor: "#61dafb",
        color: "#20232a"
    },
    flourbags: {
        marginTop: 16,
        width: '10%',
        height: '10%',
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
        backgroundColor: "#61dafb",
        color: "#20232a"
    },
    connector: {
        marginTop: 16,
        width: '70%',
        height: '10%',
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
        backgroundColor: "#61dafb",
        color: "#20232a"
    },
    done: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#07a321'
    },
    selected: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f50000'
    },
    unselected: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#000000'
    },
})

export {
    LinkedLists, LLScreenTwo, LLScreenThree,
    LLScreenFour, LLScreenFive,
    LLScreenSix, LLScreenSix_verTwo, LLScreenSeven,
    LLScreenEight, LLScreenNine, LLScreenTen
};
