import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, StyleSheet, Image } from "react-native";
import BackButton from '../Components/BackButton';
import ShoeArranging from '../Components/ShoeArranging';
import BSTTree from './BSTTree';
import BSTTreeInteractive from './BSTTreeInteractive';

function BinarySearchTreesScreenOne() {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 22 }}>Binary Search Trees</Text>
            </View>

            <View style={{ flex: 3, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}></View>
                <View style={{ flex: 5 }}>
                    <Text style={{ textAlign: 'center', fontSize: 18 }}>You are a very passionate individual. Very passionate about your shoe collection.</Text>
                    <Text style={{ textAlign: 'center', fontSize: 18 }}> Unfortunately, your passion to keep everything neat and tidy isn't quite at the same level.</Text>
                    <Text style={{ textAlign: 'center', fontSize: 18 }}>One day, you decide that enough is enough.</Text>
                    <Text style={{ textAlign: 'center', fontSize: 18 }} >You want to start arranging your mighty shoes within shoeracks according to their shoe sizes, in ascending order.</Text>
                    <Text style={{ textAlign: 'center', fontSize: 18 }}>Click the button below to get started.</Text>
                </View>
                <View style={{ flex: 1 }}></View>
            </View>

            {/* Prev and Next buttons */}
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1 }}>
                    {/* BLANK */}
                </View>
                <View style={{ flex: 2 }}>
                    <BackButton title='Back To Topics' to='Topics' />
                </View>
                <View style={{ flex: 1 }}>
                    {/* BLANK */}
                </View>
                <View style={{ flex: 2 }}>
                    <BackButton title='Start Arranging' to='BinarySearchTrees' />
                </View>
                <View style={{ flex: 1 }}>
                    {/* BLANK */}
                </View>
            </View>


        </View>
    );
}

class BinarySearchTrees extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            completed: [false, false, false, false, false, false]
        }
    }

    shoeCompleted(num, type) {
        let extra = type == 'shoeLow' ? 0 : 3; 
        this.setState(state => {
            let arr = state.completed.slice();
            arr[num + extra] = true;
            return {
                completed: arr
            }
        });
    }

    showNextButton() {
        if (this.state.completed.every((x) => x == true)) {
            return (
                <BackButton title='Next' to='BinarySearchTreesScreenTwo' />
            );
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 4, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 2 }}>
                        <ShoeArranging
                            // shoe1={1}
                            // shoe2={2}
                            // shoe3={3}
                            type='shoeLow'
                            order={[2, 0, 1]}
                            height={{
                                min: 0,
                                max: 4 / 33
                            }}
                            onComplete={(num, type) => this.shoeCompleted(num, type)}
                        />
                    </View>
                    <View style={{ flex: 1 }}></View>
                </View>
                <View style={{ flex: 4, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 2 }}>
                        <ShoeArranging
                            // shoe1={4}
                            // shoe2={5}
                            // shoe3={6}
                            type='shoeHigh'
                            order={[2, 0, 1]}
                            height={{
                                min: 12 / 33,
                                max: 16 / 33
                            }}
                            onComplete={(i) => this.shoeCompleted(i)}
                        />
                    </View>
                    <View style={{ flex: 1 }}></View>
                </View>

                <View style={{ flex: 1 }}>
                    {/* BLANK */}
                </View>

                {/* Prev and Next buttons */}
                <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center' }}>
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
        );
    }
}


class BinarySearchTreesScreenTwo extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>

                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1 }} />
                    <View style={{ flex: 1, flexDirection: 'row' }} >
                        <View style={{ flex: 0.2 }} />
                        <Text style={styles.text}>
                            Uh oh, greedy you has bought another pair of shoes!
                            These shoes appear to be your favourite pair so far.
                            Thankfully, you have a special shoe rack for the shoe.
                        </Text>
                        <View style={{ flex: 0.2 }} />
                    </View>
                    <View style={{ flex: 1 }} />
                </View>

                <Image
                    source={require('../assets/SpecialShoeRackWithShoe.png')}
                    style={{ flex: 2 }}
                    resizeMode='center' />

                {/* Prev and Next buttons */}
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 2 }}>
                        <BackButton title='Previous' to='BinarySearchTrees' />
                    </View>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 2 }}>
                        <BackButton title='Next' to='BinarySearchTreesScreenThree' />
                    </View>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                </View>
            </View>
        );
    }
}

class BinarySearchTreesScreenThree extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1 }} />
                    <View style={{ flex: 1, flexDirection: 'row' }} >
                        <View style={{ flex: 0.2 }} />
                        <Text style={styles.text}>
                            For easy access, you want to arrange all the shoes in ascending order.

                            Arrange the racks in the correct order,
                            so that the shoes are arranged in ascending order!
                        </Text>
                        <View style={{ flex: 0.2 }} />
                    </View>
                    <View style={{ flex: 1 }} />
                </View>

                <View style={{ flex: 2 }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}></View>
                        <View style={{ flex: 1 }}>
                        <ShoeArranging
                            type='shoeRack'
                            order={[2, 0, 1]}
                            height={{
                                min: 12 / 33,
                                max: 16 / 33
                            }}
                            onComplete={(i) => this.shoeCompleted(i)}
                        />
                        </View>
                        <View style={{ flex: 1 }}></View>
                    </View>
                </View>

                {/* Prev and Next buttons */}
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 2 }}>
                        <BackButton title='Previous' to='BinarySearchTreesScreenTwo' />
                    </View>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 2 }}>
                        <BackButton title='Next' to='BinarySearchTreesScreenFour' />
                    </View>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                </View>

            </View>
        );
    }
}

class BinarySearchTreesScreenFour extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1 }} />
                    <View style={{ flex: 1, flexDirection: 'row' }} >
                        <View style={{ flex: 0.2 }} />
                        <Text style={styles.text}>
                            Getting your needed shoe is now a piece of cake!

                            If you need a shoe of a size less than 11,
                            all you have to do is look left of the center rack.

                            If you need a shoe of a size larger than 11,
                            just look to the right of your favourite shoe!
                        </Text>
                        <View style={{ flex: 0.2 }} />
                    </View>
                    <View style={{ flex: 1 }} />
                </View>

                <View style={{ flex: 1, flexDirection: 'row' }}>

                </View>

                {/* Prev and Next buttons */}
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 2 }}>
                        <BackButton title='Previous' to='BinarySearchTreesScreenThree' />
                    </View>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 2 }}>
                        <BackButton title='Next' to='BinarySearchTreesScreenFive' />
                    </View>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                </View>
            </View>
        );
    }
}

class BinarySearchTreesScreenFive extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1 }} />
                    <View style={{ flex: 1, flexDirection: 'row' }} >
                        <View style={{ flex: 0.2 }} />
                        <Text style={styles.text}>
                            In the same way, if you knew what was in the middle of the left portion,
                            you could find the shoes within that portion, in the same way.
                        </Text>
                        <View style={{ flex: 0.2 }} />
                    </View>
                    <View style={{ flex: 1 }} />
                </View>

                {/* Box */}
                <View style={{ flex: 1 }} />

                {/* Prev and Next buttons */}
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 2 }}>
                        <BackButton title='Previous' to='BinarySearchTreesScreenFour' />
                    </View>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 2 }}>
                        <BackButton title='Next' to='BinarySearchTreesScreenSix' />
                    </View>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                </View>
            </View>
        );
    }
}

class BinarySearchTreesScreenSix extends React.Component {

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ flex: 2 }}>
                    <View style={{ flex: 0.5 }} />
                    <View style={{ flex: 1, flexDirection: 'row' }} >
                        <View style={{ flex: 0.2 }} />
                        <Text style={styles.text}>
                            In Computer Science, these shoes and racks can represented in a structure
                            known as a Binary Search Tree.
                        </Text>
                        <View style={{ flex: 0.2 }} />
                    </View>
                    <View style={{ flex: 0.5 }} />
                </View>

                <View style={{ flex: 4, flexDirection: 'row' }}>
                    <View style={{ flex: 1, flexDirection: 'column' }}></View>
                    <View style={{ flex: 5, flexDirection: 'column', justifyContent: 'center' }}>
                        <BSTTree />
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column' }}></View>
                </View>

                {/* Prev and Next buttons */}
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 2 }}>
                        <BackButton title='Previous' to='BinarySearchTreesScreenFive' />
                    </View>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 2 }}>
                        <BackButton title='Next' to='BinarySearchTreesScreenSeven' />
                    </View>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                </View>

            </View >
        );
    }
}

class BinarySearchTreesScreenSeven extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ flex: 2 }}>
                    <View style={{ flex: 0.5 }} />
                    <View style={{ flex: 1, flexDirection: 'row' }} >
                        <View style={{ flex: 0.2 }} />
                        <Text style={styles.text}>
                            Similar to the shoe racks, all the values to the left of the centre
                            'node' is smaller, while all the values to the right of the centre node
                            is larger.

                            This makes searching for values within the tree simple.
                        </Text>
                        <View style={{ flex: 0.2 }} />
                    </View>
                    <View style={{ flex: 0.5 }} />
                </View>


                <View style={{ flex: 4, flexDirection: 'row' }}>
                    <View style={{ flex: 1, flexDirection: 'column' }}></View>
                    <View style={{ flex: 5, flexDirection: 'column' }}>
                        <BSTTree />
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column' }}></View>
                </View>

                {/* Prev and Next buttons */}
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 2 }}>
                        <BackButton title='Previous' to='BinarySearchTreesScreenSix' />
                    </View>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 2 }}>
                        <BackButton title='Next' to='BinarySearchTreesScreenEight' />
                    </View>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                </View>
            </View>


        );
    }
}

class BinarySearchTreesScreenEight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            completed: false,
        }
    }

    renderNext() {
        if (this.state.completed) {
            return (
                <BackButton title='Next' to='BinarySearchTreesScreenNine' />
            )
        }
    }

    onComplete() {
        this.setState(state => {
            return {
                completed: true,
            }
        });
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ flex: 2 }}>
                    <View style={{ flex: 0.5 }} />
                    <View style={{ flex: 1, flexDirection: 'row' }} >
                        <View style={{ flex: 0.2 }} />
                        <Text style={styles.text}>
                            Given the following graph, starting at the root node (11),
                            select the considered nodes in order, till you find the value 9!
                        </Text>
                        <View style={{ flex: 0.2 }} />
                    </View>
                    <View style={{ flex: 0.5 }} />
                </View>


                <View style={{ flex: 4, flexDirection: 'row' }}>
                    <View style={{ flex: 1, flexDirection: 'column' }}></View>
                    <View style={{ flex: 5, flexDirection: 'column' }}>
                        <BSTTreeInteractive onComplete={() => this.onComplete()} />
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column' }}></View>
                </View>

                {/* Prev and Next buttons */}
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 2 }}>
                        <BackButton title='Previous' to='BinarySearchTreesScreenSeven' />
                    </View>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 2 }}>
                        {this.renderNext()}
                    </View>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                </View>
            </View>
        );
    }
}

class BinarySearchTreesScreenNine extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ flex: 2 }}>
                    <View style={{ flex: 0.5 }} />
                    <View style={{ flex: 1, flexDirection: 'row' }} >
                        <View style={{ flex: 0.2 }} />
                        <Text style={styles.text}>
                            What you just did is a type of searching known as Binary Search,
                            and is extremely useful in searching for values,
                            as it halves the total search range at every step.
                        </Text>
                        <View style={{ flex: 0.2 }} />
                    </View>
                    <View style={{ flex: 0.5 }} />
                </View>

                <View style={{ flex: 4, flexDirection: 'row' }}>
                    <View style={{ flex: 1, flexDirection: 'column' }}></View>
                    <View style={{ flex: 5, flexDirection: 'column' }}>
                        <BSTTree interactive={false} />
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column' }}></View>
                </View>

                {/* Prev and Next buttons */}
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 2 }}>
                        <BackButton title='Previous' to='BinarySearchTreesScreenEight' />
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
}

const styles = StyleSheet.create({
    text: {
        flex: 1,
        fontSize: '11',
        justifyContent: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
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
    BinarySearchTrees, BinarySearchTreesScreenOne, BinarySearchTreesScreenTwo, BinarySearchTreesScreenThree,
    BinarySearchTreesScreenFour, BinarySearchTreesScreenFive, BinarySearchTreesScreenSix,
    BinarySearchTreesScreenSeven, BinarySearchTreesScreenEight, BinarySearchTreesScreenNine
};