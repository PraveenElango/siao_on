import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { CheckBox, Button } from 'react-native-elements'

function LinkedLists({ navigation }) {
    return (
        <View>
            <Text>Linked Lists</Text>


            <TouchableOpacity style={styles.train} onPress={() => navigation.navigate('LLScreenTwo')}>

            </TouchableOpacity>
            <TouchableOpacity style={styles.train} onPress={() => navigation.navigate('LLScreenTwo')}>

            </TouchableOpacity>
            <TouchableOpacity style={styles.train} onPress={() => navigation.navigate('LLScreenTwo')}>

            </TouchableOpacity>
        </View>
    );
}

function LLScreenTwo({ navigation }) {
    return (
        <View>
            {/* Train box  */}
            <View style={styles.train} />

            <View>
                <Text>Click on the three components that make up the train carriage</Text>
            </View>
            {/* Checkboxes */}
            <View>
                <CheckBox
                    title='4 flour bags'
                    value='false'
                />
                <CheckBox
                    title='Boxcar'
                    value='false'
                />
                <CheckBox
                    title='Connector'
                    value='false'
                />

            </View>

            {/* //Prev and Next buttons */}
            <View>
                <Button
                    title="Previous"
                    onPress={() => navigation.navigate('Linked List')}
                />
                <Button
                    title="Next"
                    onPress={() => navigation.navigate('LLScreenThree')}
                />
            </View>
        </View>
    )
}

function LLScreenThree({ navigation }) {
    return (
        <View>
            <View>
                <Text>
                    In Computer Science, the carriage below can be represented
                    by a data structure called Node.
                </Text>
            </View>

            <View style={styles.train} />
            <Button
                title="Click to see NODE"
                onPress={() => navigation.navigate('LLScreenThree_verTwo')}
            />

            <View>
                <Button
                    title="Previous"
                    onPress={() => navigation.navigate('LLScreenTwo')}
                />
            </View>
        </View>
    )
}

function LLScreenThree_verTwo({ navigation }) {
    return (
        <View>
            <View>
                <Text>
                    In Computer Science, the carriage below can be represented
                    by a data structure called Node.
                </Text>
            </View>

            <View style={styles.train} />

            {/* Train box  */}
            <View style={styles.train} />

            {/* //Prev and Next buttons */}
            <View>
                <Button
                    title="Previous"
                    onPress={() => navigation.navigate('LLScreenTwo')}
                />
                <Button
                    title="Next"
                    onPress={() => navigation.navigate('LLScreenFour')}
                />
            </View>
        </View>

    )
}

function LLScreenFour({ navigation }) {
    return (
        <View>

            <View>
                <Text>
                    Match the Corresponding components of the train carriage with
                    those of the node.
                </Text>
            </View>


            {/* Train box  */}
            <View style={styles.train} />

            {/* Train box  */}
            <View style={styles.train} />

            {/* Options */}
            <TouchableOpacity style={styles.train}><Text>Carriage</Text></TouchableOpacity>
            <TouchableOpacity style={styles.train}><Text>Flour bags</Text></TouchableOpacity>
            <TouchableOpacity style={styles.train}><Text>Connector</Text></TouchableOpacity>
            <TouchableOpacity style={styles.train}><Text>Node</Text></TouchableOpacity>
            <TouchableOpacity style={styles.train}><Text>Value field</Text></TouchableOpacity>
            <TouchableOpacity style={styles.train}><Text>Next pointer field</Text></TouchableOpacity>

            {/* //Prev and Next buttons */}
            <View>
                <Button
                    title="Previous"
                    onPress={() => navigation.navigate('LLScreenThree')}
                />
                <Button
                    title="Next"
                    onPress={() => navigation.navigate('LLScreenFive')}
                />
            </View>
        </View>
    )
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
    train: {
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

export {
    LinkedLists, LLScreenTwo, LLScreenThree,
    LLScreenThree_verTwo, LLScreenFour, LLScreenFive,
    LLScreenSix, LLScreenSix_verTwo, LLScreenSeven,
    LLScreenEight, LLScreenNine, LLScreenTen
};
