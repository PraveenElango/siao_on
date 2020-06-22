import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, StyleSheet } from "react-native";
import BackButton from '../Components/BackButton';
import ShoeArranging from '../Components/ShoeArranging';
import BSTTree from './BSTTree';

class BinarySearchTrees extends React.Component {
    render() {
        return (

            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 1 }}>
                        <ShoeArranging
                            shoe1={1}
                            shoe2={2}
                            shoe3={3}
                        />
                    </View>
                    <View style={{ flex: 1 }}></View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 1 }}>
                        <ShoeArranging
                            shoe1={4}
                            shoe2={5}
                            shoe3={6}
                        />
                    </View>
                    <View style={{ flex: 1 }}></View>
                </View>

                {/* Prev and Next buttons */}
                <BackButton title='Previous' to='Topics' />
                <BackButton title='Next' to='BinarySearchTreesScreenTwo' />

            </View>



        );

    }
}



class BinarySearchTreesScreenTwo extends React.Component {
    render() {
        return (
            <View>
                <Text>
                    Uh oh, greedy you has bought another pair of shoes!

                    These shoes appear to be your favourite pair so far.

                    Thankfully, you have a special shoe rack for the shoe.
                </Text>

                {/* Box */}
                <View style={styles.box} />

                {/* Prev and Next buttons */}
                <BackButton title='Previous' to='BinarySearchTrees' />
                <BackButton title='Next' to='BinarySearchTreesScreenThree' />
            </View>
        );
    }
}

class BinarySearchTreesScreenThree extends React.Component {
    render() {
        return (
            <View>
                <Text>
                    For easy access, you want to arrange all the shoes in ascending order.

                    Arrange the racks in the correct order,
                    so that the shoes are arranged in ascending order!
                </Text>

                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}></View>
                        <View style={{ flex: 1 }}>
                            <ShoeArranging
                                shoe1={1}
                                shoe2={2}
                                shoe3={3}
                            />
                        </View>
                        <View style={{ flex: 1 }}></View>
                    </View>
                </View>
                {/* //Prev and Next buttons */}
                <BackButton title='Previous' to='BinarySearchTreesScreenTwo' />
                <BackButton title='Next' to='BinarySearchTreesScreenFour' />

            </View>
        );
    }
}

class BinarySearchTreesScreenFour extends React.Component {
    render() {
        return (
            <View>
                <Text>
                    Getting your needed shoe is now a piece of cake!

                    If you need a shoe of a size less than 11,
                    all you have to do is look left of the center rack.

                    If you need a shoe of a size larger than 11,
                    just look to the right of your favourite shoe!
                </Text>

                {/* Box */}
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />

                {/* //Prev and Next buttons */}
                <BackButton title='Previous' to='BinarySearchTreesScreenThree' />
                <BackButton title='Next' to='BinarySearchTreesScreenFive' />
            </View>
        );
    }
}

class BinarySearchTreesScreenFive extends React.Component {
    render() {
        return (
            <View>
                <Text>
                    In the same way, if you knew what was in the middle of the left portion,
                    you could find the shoes within that portion, in the same way.
                </Text>

                {/* Box */}
                <View style={styles.box} />

                {/* //Prev and Next buttons */}
                <BackButton title='Previous' to='BinarySearchTreesScreenFour' />
                <BackButton title='Next' to='BinarySearchTreesScreenSix' />
            </View>
        );
    }
}

class BinarySearchTreesScreenSix extends React.Component {

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <Text>
                        In Computer Science, these shoes and racks can represented in a structure
                        known as a Binary Search Tree.
                </Text>
                </View>

                <View style={{ flex: 4, flexDirection: 'row' }}>
                    <View style={{ flex: 1, flexDirection: 'column' }}></View>
                    <View style={{ flex: 5, flexDirection: 'column' }}>
                        <BSTTree interactive={false} />
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column' }}></View>
                </View>

                <View style={{ flex: 2, flexDirection: 'column' }}>
                    {/* Prev and Next buttons */}
                    <BackButton title='Previous' to='BinarySearchTreesScreenFive' />
                    <BackButton title='Next' to='BinarySearchTreesScreenSeven' />
                </View>
            </View>
        );
    }
}

class BinarySearchTreesScreenSeven extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <Text>
                        Similar to the shoe racks, all the values to the left of the centre
                        'node' is smaller, while all the values to the right of the centre node
                        is larger.

                        This makes searching for values within the tree simple.
                </Text>
                </View>

                <View style={{ flex: 4, flexDirection: 'row' }}>
                    <View style={{ flex: 1, flexDirection: 'column' }}></View>
                    <View style={{ flex: 5, flexDirection: 'column' }}>
                        <BSTTree interactive={false} />
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column' }}></View>
                </View>

                <View style={{ flex: 2, flexDirection: 'column' }}>
                    {/* Prev and Next buttons */}
                    <BackButton title='Previous' to='BinarySearchTreesScreenSix' />
                    <BackButton title='Next' to='BinarySearchTreesScreenEight' />
                </View>
            </View>


        );
    }
}

class BinarySearchTreesScreenEight extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <Text>
                        Given the following graph, starting at the root node (11),
                        select the considered nodes in order, till you find the value 9!
                </Text>
                </View>

                <View style={{ flex: 4, flexDirection: 'row' }}>
                    <View style={{ flex: 1, flexDirection: 'column' }}></View>
                    <View style={{ flex: 5, flexDirection: 'column' }}>
                        <BSTTree interactive={true} />
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column' }}></View>
                </View>

                <View style={{ flex: 2, flexDirection: 'column' }}>
                    {/* Prev and Next buttons */}
                    <BackButton title='Previous' to='BinarySearchTreesScreenSeven' />
                    <BackButton title='Next' to='BinarySearchTreesScreenNine' />
                </View>
            </View>
        );
    }
}

class BinarySearchTreesScreenNine extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <Text>
                        What you just did is a type of searching known as Binary Search,
                        and is extremely useful in searching for values,
                        as it halves the total search range at every step.
                </Text>
                </View>

                <View style={{ flex: 4, flexDirection: 'row' }}>
                    <View style={{ flex: 1, flexDirection: 'column' }}></View>
                    <View style={{ flex: 5, flexDirection: 'column' }}>
                        <BSTTree interactive={false} />
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column' }}></View>
                </View>

                <View style={{ flex: 2, flexDirection: 'column' }}>
                    {/* Prev and Next buttons */}
                    <BackButton title='Previous' to='BinarySearchTreesScreenEight' />
                    <BackButton title='Exit' to='Topics' />
                </View>
            </View>

            
        );
    }
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

export {
    BinarySearchTrees, BinarySearchTreesScreenTwo, BinarySearchTreesScreenThree,
    BinarySearchTreesScreenFour, BinarySearchTreesScreenFive, BinarySearchTreesScreenSix,
    BinarySearchTreesScreenSeven, BinarySearchTreesScreenEight, BinarySearchTreesScreenNine
};