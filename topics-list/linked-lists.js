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
            <Button
                title="Click to see NODE"
                onPress={() => navigation.navigate('LLScreenThree_verTwo')}
            />
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
                be used to point to another node. Press next to fid out how.
            </Text>

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
    LLScreenThree_verTwo, LLScreenFour, LLScreenFive 
};