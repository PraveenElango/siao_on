import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, Button } from "react-native";
import { CheckBox } from 'react-native-elements'
import BackButton from '../Components/BackButton'
import Train from '../assets/linkedListImages/train.png'
import TrainToScreenTwo from "./TrainToScreenTwo"
import { human } from 'react-native-typography'
// import LottieView from 'react-native-web-lottie';
import LottieView from 'lottie-react-native';

class LinkedLists extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={[human.largeTitle, { textAlign: 'center' }]}>Linked Lists</Text>
                </View>

                <Text style={[human.body, { textAlign: 'center' }]}>
                    Click one any one of the following carriages of the train to proceed.
                </Text>

                <View style={{ flex: 1, flexDirection: "row" }}>
                    <View style={{ flex: 0.2 }} />
                    <TrainToScreenTwo
                        to="LLScreenTwo"
                        imageSource={Train}
                    />
                    <TrainToScreenTwo
                        to="LLScreenTwo"
                        imageSource={Train}
                    />
                    <TrainToScreenTwo
                        to="LLScreenTwo"
                        imageSource={Train}
                    />
                    <View style={{ flex: 0.2 }} />

                </View>

                {/* Prev and Next buttons */}
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 2 }}>
                        <BackButton to='Topics' title='Back to Topics' />
                    </View>

                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                </View>
            </View>
        );
    }
}

class LLScreenTwo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            flourbagsPressed: false,
            boxcarPressed: false,
            connectorPressed: false,
        }
    }

    displayNextButton() {
        if (this.state.flourbagsPressed &&
            this.state.boxcarPressed &&
            this.state.connectorPressed) {
            return (<BackButton to='LLScreenThree' title='Next' />);
        }
    }

    renderPerson() {
        return (
            <TouchableOpacity
                style={[{ flex: 1, justifyContent: 'center', alignItems: 'center' }]}
                onPress={() => {
                    this.setState((state) => {
                        return {
                            flourbagsPressed: true
                        }
                    })
                }}>
                <Image
                    style={{
                        // flex: 1,
                        resizeMode: 'contain',
                        height: 50,
                        width: 50
                    }}
                    source={require('../assets/linkedListImages/person.png')} />
            </TouchableOpacity>
        );
    }
    render() {
        return (
            <View style={{ flex: 1 }}>

                <View style={{ flex: 2, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 12 }}>
                        <View style={{ flex: 1 }}></View>
                        <Text style={human.body}>Click on the three components that make up the train carriage</Text>
                        {/* <Text style={{ textAlign: 'center', fontSize: 18 }}>Thankfully, you have a special shoe rack for the shoe.</Text> */}
                        <View style={{ flex: 1 }}></View>
                    </View>
                    <View style={{ flex: 1 }}></View>
                </View>


                {/* Outer box  */}
                <View style={{ flex: 3, flexDirection: 'row' }}>

                    {/* Inner box  */}
                    <TouchableOpacity
                        style={[{ flex: 3 }]}
                        onPress={() => {
                            this.setState((state) => {
                                return {
                                    boxcarPressed: true
                                }
                            })
                        }}>
                        <ImageBackground
                            // style={styles.newboxcar}
                            style={{ flex: 1 }}
                            resizeMode='stretch'
                            source={require('../assets/linkedListImages/boxcarconstrained.png')}>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <View style={{ flex: 1 }}>
                                    {/* BLANK */}
                                </View>
                                {this.renderPerson()}
                                <View style={{ flex: 1 }}>
                                    {/* BLANK */}
                                </View>
                                {this.renderPerson()}
                                <View style={{ flex: 1 }}>
                                    {/* BLANK */}
                                </View>
                            </View>

                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <View style={{ flex: 1 }}>
                                    {/* BLANK */}
                                </View>
                                {this.renderPerson()}
                                <View style={{ flex: 1 }}>
                                    {/* BLANK */}
                                </View>
                                {this.renderPerson()}
                                <View style={{ flex: 1 }}>
                                    {/* BLANK */}
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>


                    <TouchableOpacity
                        style={{ flex: 1, flexDirection: 'row' }}
                        onPress={() => {
                            this.setState((state) => {
                                return {
                                    connectorPressed: true
                                }
                            })
                        }}>
                        {/* Connector */}
                        <View style={{ flex: 1 }}>
                            <Image
                                style={{
                                    flex: 1
                                }}
                                resizeMode='contain'
                                source={require('../assets/linkedListImages/coupler.gif')}
                            />
                        </View>
                        <View style={{ flex: 1 }}>
                            {/* BLANK */}
                        </View>
                    </TouchableOpacity>

                </View>

                {/* Checkboxes */}
                <View style={{ flex: 2 }}>
                    <View style={{ flex: 1 }} />
                    <View style={{ flex: 1 }}>
                        <CheckBox
                            title='4 passengers'
                            checked={this.state.flourbagsPressed}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <CheckBox
                            title='Boxcar'
                            checked={this.state.boxcarPressed}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <CheckBox
                            title='Connector'
                            checked={this.state.connectorPressed}
                        />
                    </View>
                </View>

                {/* Prev and Next buttons */}
                <View style={{ flex: 1.5, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 2 }}>
                        <BackButton to='Linked List' title='Previous' />
                    </View>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 2 }}>
                        {this.displayNextButton()}
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

                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Image
                        resizeMode='contain'
                        style={{
                            flex: 1
                        }}
                        source={require('../assets/linkedListImages/node.png')} />
                </View>

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
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 12 }}>
                        <View style={{ flex: 1 }} />
                        <Text style={human.body}>In Computer Science, the carriage below can be represented by a data structure called Node.</Text>
                        <View style={{ flex: 1 }} />
                    </View>
                    <View style={{ flex: 1 }}></View>
                </View>

                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Image
                        style={{
                            flex: 1,
                            // width: '80%',
                            resizeMode: 'contain'
                        }}
                        source={require('../assets/linkedListImages/boxcar.png')} />
                </View>

                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Button
                        title="CLICK TO SEE NODE"
                        onPress={() => {
                            this.setState((state) => {
                                return {
                                    nodeButtonPressed: true
                                }
                            })
                        }}
                    />
                </View>

                <View style={{ flex: 1 }}>
                    {this.pressNodeButton()}
                </View>

                {/* Prev and Next buttons */}
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 2 }}>
                        <BackButton to='LLScreenTwo' title='Previous' />
                    </View>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 2 }}>
                        {this.displayNextButton()}
                    </View>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                </View>
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
        let inputText = <Text style={{ fontSize: 19 }}>{text}</Text>
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
        let inputText = <Text style={{ fontSize: 19 }}>{text}</Text>
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

                <View style={{ flex: 2, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 12 }}>
                        <View style={{ flex: 1.5 }} />
                        <Text style={human.body}>Match the Corresponding components of the train carriage with those of the node.</Text>
                        <View style={{ flex: 1 }} />
                    </View>
                    <View style={{ flex: 1 }}></View>
                </View>


                <View style={{ flex: 2, alignItems: 'center' }}>
                    {/* Train box  */}
                    <Image
                        style={{
                            flex: 1,
                            width: 200,
                            height: 250,
                            resizeMode: 'contain'
                        }}
                        source={require('../assets/linkedListImages/fulltrain.png')} />
                </View>

                <View style={{ flex: 0.5 }}>
                    {/* BLANK */}
                </View>

                <View style={{ flex: 2, alignItems: 'center' }}>
                    {/* NODE  */}

                    <Image
                        style={{
                            flex: 1,
                            width: 200,
                            height: 250,
                            resizeMode: 'contain'
                        }}
                        source={require('../assets/linkedListImages/node.png')} />
                </View>

                <View style={{ flex: 0.5 }}>
                    {/* BLANK */}
                </View>

                <View style={{ flex: 2, flexDirection: 'row', }}>
                    <View style={{ flex: 0.5 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 2 }}>
                        {this.renderLeftButton(0, "Carriage")}
                        <View style={{ flex: 0.5 }}>
                            {/* BLANK */}
                        </View>
                        {this.renderLeftButton(1, "Passengers")}
                        <View style={{ flex: 0.5 }}>
                            {/* BLANK */}
                        </View>
                        {this.renderLeftButton(2, "Connector")}
                    </View>
                    <View style={{ flex: 0.75 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 2 }}>
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
                <View style={{ flex: 1.5, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 2 }}>
                        <BackButton to='LLScreenThree' title='Previous' />
                    </View>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 2 }}>
                        {this.displayNextButton()}
                    </View>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                </View>
            </View>
        )
    }
}

function LLScreenFive({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 2, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}></View>
                <View style={{ flex: 12 }}>
                    <View style={{ flex: 1 }} />
                    <Text style={human.body}>The node has two main components - val and next pointer.</Text>
                    <View style={{ flex: 1 }} />
                </View>
                <View style={{ flex: 1 }}></View>
            </View>


            <View style={{ flex: 2, alignItems: 'center' }}>
                {/* Train box  */}
                <Image
                    style={{
                        flex: 1,
                        width: 200,
                        height: 250,
                        resizeMode: 'contain'
                    }}
                    source={require('../assets/linkedListImages/valnext.png')} />
            </View>


            <View style={{ flex: 2, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}></View>
                <View style={{ flex: 12 }}>
                    <View style={{ flex: 1 }} />
                    <Text style={human.body}>The next ptr of this node(let's call it Node A) can be used to point to another node. Press next to find out how.</Text>
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
                    <BackButton to='LLScreenFour' title='Previous' />
                </View>
                <View style={{ flex: 1 }}>
                    {/* BLANK */}
                </View>
                <View style={{ flex: 2 }}>
                    <BackButton to='LLScreenSix' title='Next' />
                </View>
                <View style={{ flex: 1 }}>
                    {/* BLANK */}
                </View>
            </View>
        </View>

    )
}

class LLScreenSix extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nodeButtonPressed: false
        }
    }
    pressNodeButton() {
        if (this.state.nodeButtonPressed) {
            return (
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}></View>
                        <View style={{ flex: 12 }}>
                            <View style={{ flex: 2 }} />
                            <Text style={human.body}>Each node has a memory address.</Text>
                            <Text style={human.body}>The next field of Node A stores the memory address of Node B. This makes Node A point to Node B.</Text>
                            <View style={{ flex: 1 }} />
                        </View>
                        <View style={{ flex: 1 }}></View>
                    </View>

                    <View style={{ flex: 1, alignItems: 'center' }}>
                        {/* Train box  */}
                        <Image
                            style={{
                                flex: 1,
                                width: '90%',
                                // height: 250,
                                resizeMode: 'contain'
                            }}
                            source={require('../assets/linkedListImages/atobadd.png')} />
                    </View>
                </View>

            );
        }
    }

    renderNextButton() {
        if (this.state.nodeButtonPressed) {
            return (
                <BackButton to='LLScreenSeven' title='Next' />
            );
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 12 }}>
                        <View style={{ flex: 1 }} />
                        <Text style={human.body}>The next ptr of Node A is now pointing to the whole of Node B.</Text>
                        <View style={{ flex: 1 }} />
                    </View>
                    <View style={{ flex: 1 }}></View>
                </View>
                <View style={{ flex: 1.5, alignItems: 'center' }}>
                    {/* Train box  */}
                    <Image
                        style={{
                            flex: 1,
                            width: '80%',
                            resizeMode: 'contain'
                        }}
                        source={require('../assets/linkedListImages/atob.png')} />
                </View>
                {/* <View style={{flex: 1}} /> */}
                <View style={styles.train} />

                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 12 }}>
                        <View style={{ flex: 1 }} />
                        <Text style={human.body}>But what exactly is stored inside the next field so that it can point to the whole of Node B?</Text>
                        <View style={{ flex: 1 }} />
                    </View>
                    <View style={{ flex: 1 }}></View>
                </View>

                <View style={{ flex: 0.3, justifyContent: 'center' }}>
                    <Button
                        title="What is inside the 'next' field?"
                        onPress={() => {
                            this.setState((state) => {
                                return {
                                    nodeButtonPressed: true
                                }
                            })
                        }} />
                </View>

                <View style={{ flex: 3 }}>
                    {this.pressNodeButton()}
                </View>

                {/* Prev and Next buttons */}
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 2 }}>
                        <BackButton to='LLScreenFive' title='Previous' />
                    </View>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 2 }}>
                        {this.renderNextButton()}
                    </View>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                </View>

            </View>

        )
    }
}

function LLScreenSeven() {
    return (
        <View style={{ flex: 1 }}>

            <View style={{ flex: 2, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}></View>
                <View style={{ flex: 12 }}>
                    <View style={{ flex: 1 }} />
                    <Text style={human.body}>When we have one node pointing to another node, we call the whole structure a LINKED LIST</Text>
                    <View style={{ flex: 1 }} />
                </View>
                <View style={{ flex: 1 }}></View>
            </View>

            <View style={{ flex: 2, alignItems: 'center' }}>
                {/* Train box  */}
                <Image
                    style={{
                        flex: 1,
                        width: '80%',
                        resizeMode: 'contain'
                    }}
                    source={require('../assets/linkedListImages/atob.png')} />
            </View>

            <View style={{ flex: 2, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}></View>
                <View style={{ flex: 12 }}>
                    <View style={{ flex: 1 }} />
                    <Text style={human.body}>However, nodes in linked lists don't always have to point to another node. Sometimes, they can point to nothing or null, as we call it.</Text>
                    <View style={{ flex: 1 }} />
                </View>
                <View style={{ flex: 1 }}></View>
            </View>

            <View style={{ flex: 2, alignItems: 'center' }}>
                {/* Train box  */}
                <Image
                    style={{
                        flex: 1,
                        width: '80%',
                        resizeMode: 'contain'
                    }}
                    source={require('../assets/linkedListImages/nodeb.png')} />
            </View>

            {/* Prev and Next buttons */}
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1 }}>
                    {/* BLANK */}
                </View>
                <View style={{ flex: 2 }}>
                    <BackButton to='LLScreenSix' title='Previous' />
                </View>
                <View style={{ flex: 1 }}>
                    {/* BLANK */}
                </View>
                <View style={{ flex: 2 }}>
                    <BackButton to='Topics' title='Exit' />
                </View>
                <View style={{ flex: 1 }}>
                    {/* BLANK */}
                </View>
            </View>
        </View>

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
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#07a321',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderWidth: 2,
        borderColor: 'black'
    },
    selected: {
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderWidth: 2,
        borderColor: 'black'
    },
    unselected: {
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderColor: 'black',
        borderWidth: 2
        // backgroundColor: '#000000'
    },
    person: {
        flex: 1,
        height: 70,
        width: 30
    },
    newboxcar: {
        flex: 1,
        width: 400,
        height: 260,
    }
})

export {
    LinkedLists, LLScreenTwo, LLScreenThree,
    LLScreenFour, LLScreenFive,
    LLScreenSix, LLScreenSeven,
};
