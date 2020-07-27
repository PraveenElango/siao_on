import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, StyleSheet, Image } from "react-native";
import BackButton from '../Components/BackButton';
import ShoeArranging from '../Components/ShoeArranging';
import BSTTree from './BSTTree';
import BSTTreeInteractive from './BSTTreeInteractive';
import { human } from 'react-native-typography'
// import LottieView from 'react-native-web-lottie';
import LottieView from 'lottie-react-native';

function BinarySearchTreesScreenOne() {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ flex: 0.1 }}></View>
                <Text style={[human.largeTitle, { textAlign: 'center' }]}>Binary Search Trees</Text>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'space-between' }}>
                <View style={{ flex: 1 }}></View>
                <View style={{ flex: 6, justifyContent: 'space-between' }}>
                    <View style={{ flex: 1 }} />
                    <Text style={human.body}>You are a very passionate individual.</Text>
                    <Text style={human.body}>Very passionate about your shoe collection.</Text>
                    <Text style={human.body}>Unfortunately, your passion to keep everything neat and tidy isn't quite at the same level.</Text>
                    <Text style={human.body}>One day, you decide that enough is enough.</Text>
                    <Text style={human.body} >You want to start arranging your mighty shoes within shoeracks according to their shoe sizes, in ascending order.</Text>
                    <Text style={human.body}>Click the button below to get started.</Text>
                </View>
                <View style={{ flex: 1 }}></View>
            </View>

            {/* <View style={{flex:3}}>
                <LottieView source={require('./tree.json')} 
                autoPlay
                loop/>
            </View> */}

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
                <View style={{ flex: 1 }}>
                    {/* BLANK */}
                </View>

                <View style={{ flex: 5, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 6 }}>
                        <ShoeArranging
                            type='shoeLow'
                            order={[2, 0, 1]}
                            width={[1 / 8, 3 / 8, 5 / 8, 7 / 8]}
                            height={{
                                min: 1 / 13,
                                max: 8 / 39
                            }}
                            onComplete={(num, type) => this.shoeCompleted(num, type)}
                        />
                    </View>
                    <View style={{ flex: 1 }}></View>
                </View>
                <View style={{ flex: 5, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 6 }}>
                        <ShoeArranging
                            type='shoeHigh'
                            order={[2, 0, 1]}
                            width={[1 / 8, 3 / 8, 5 / 8, 7 / 8]}
                            height={{
                                min: 6 / 13,
                                max: 23 / 39
                            }}
                            onComplete={(num, type) => this.shoeCompleted(num, type)}
                        />
                    </View>
                    <View style={{ flex: 1 }}></View>
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
                <View style={{ flex: 3, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 12 }}>
                        <View style={{ flex: 3 }}></View>
                        <Text style={human.body}>Uh oh, greedy you has bought another pair of shoes! These shoes appear to be your favourite pair so far. </Text>
                        <Text></Text>
                        <Text style={human.body}>Thankfully, you have a special shoe rack for the shoe.</Text>
                        <View style={{ flex: 1 }}></View>
                    </View>
                    <View style={{ flex: 1 }}></View>
                </View>

                <View style={{ flex: 2, alignItems: 'center' }}>
                    <Image
                        source={require('../assets/Shoes/SpecialShoeRackWithShoe.png')}
                        style={{ flex: 1 }} resizeMode='contain' >
                    </Image>
                </View>

                <View style={{ flex: 3, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 12 }}>
                        <View style={{ flex: 2 }}></View>
                        <Text style={human.body}>To identify each individual Shoe Rack, you decide to remember them based on their middle shoe within the rack.</Text>
                        <Text></Text>
                        <Text style={human.body}>The 'identified' shoes representing their shoeracks are displayed below.</Text>
                        <View style={{ flex: 1 }}></View>
                    </View>
                    <View style={{ flex: 1 }}></View>
                </View>

                <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Image
                        source={require('../assets/Shoes/SpecialShoeRackWithShoe.png')}
                        style={{ flex: 1, height: 110, width: 110 }} resizeMode='contain' >
                    </Image>
                    <Image
                        source={require('../assets/Shoes/ShoeHighMid.png')}
                        style={{ flex: 1, height: 110, width: 110 }} resizeMode='contain' >
                    </Image>
                    <Image
                        source={require('../assets/Shoes/ShoeLowMid.png')}
                        style={{ flex: 1, height: 110, width: 110 }} resizeMode='contain' >
                    </Image>
                </View>


                {/* Prev and Next buttons */}
                <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center' }}>
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

    constructor(props) {
        super(props);
        this.state = {
            completed: [false, false, false]
        }
    }

    showNextButton() {
        if (this.state.completed.every((x) => x == true)) {
            return (
                <BackButton title='Next' to='BinarySearchTreesScreenFour' />
            );
        }
    }

    shoeCompleted(num) {
        this.setState(state => {
            let arr = state.completed.slice();
            arr[num] = true;
            return {
                completed: arr
            }
        });
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ flex: 2, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 12 }}>
                        <View style={{ flex: 2 }}></View>
                        <Text style={human.body}>For easy access, you want to arrange all the shoes in ascending order.</Text>
                        <Text></Text>
                        <Text style={human.body}>Arrange the racks in the correct order, so that this is accomplished!</Text>
                        <View style={{ flex: 1 }}></View>
                    </View>
                    <View style={{ flex: 1 }}></View>
                </View>


                <View style={{ flex: 3 }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}></View>
                        <View style={{ flex: 6 }}>
                            <ShoeArranging
                                type='shoeRack'
                                order={[1, 2, 0]}
                                width={[1 / 8, 3 / 8, 5 / 8, 7 / 8]}
                                height={{
                                    min: 2 / 7,
                                    max: 3 / 7
                                }}
                                onComplete={(num, type) => this.shoeCompleted(num)}
                            />
                        </View>
                        <View style={{ flex: 1 }}></View>
                    </View>
                </View>

                {/* Prev and Next buttons */}
                <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center' }}>
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

class BinarySearchTreesScreenFour extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 2, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 12 }}>
                        <View style={{ flex: 2 }}></View>
                        <Text style={human.body}>Getting your needed shoe is now a piece of cake!</Text>
                        <Text></Text>
                        <Text style={human.body}>If you need a shoe of a size less than 11, all you have to do is look left of the center rack.</Text>
                        <Text></Text>
                        <Text style={human.body}>If you need a shoe of a size larger than 11, just look to the right of your favourite shoe!</Text>
                        <View style={{ flex: 1 }}></View>
                    </View>
                    <View style={{ flex: 1 }}></View>
                </View>

                <View style={{ flex: 2, flexDirection: 'row' }}>
                    <Image
                        source={require('../assets/BSTImages/Comparison.png')}
                        style={{ flex: 1, resizeMode: 'contain' }}
                    ></Image>
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

                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 12 }}>
                        <View style={{ flex: 1 }}></View>
                        <Text style={human.body}>In the same way, every shoe to the right of the 'identified' shoe, 6, is definitely larger than 6, but smaller than 11 (favourite shoe).</Text>
                        <View style={{ flex: 1 }}></View>
                    </View>
                    <View style={{ flex: 1 }}></View>
                </View>

                <View style={{ flex: 1.5, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }} />
                    <Image
                        source={require('../assets/BSTImages/ShoerackLowComp.png')}
                        style={{ flex: 10, resizeMode: 'contain', height: undefined, width: undefined }}
                    ></Image>
                    <View style={{ flex: 1 }} />
                </View>

                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 12 }}>
                        <View style={{ flex: 1 }}></View>
                        <Text style={human.body}> Every shoe to the left of the 'identified' shoe, 13, is smaller than 13, but is larger than 11 (favourite shoe)</Text>
                        <View style={{ flex: 1 }}></View>
                    </View>
                    <View style={{ flex: 1 }}></View>
                </View>

                <View style={{ flex: 1.5, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }} />
                    <Image
                        source={require('../assets/BSTImages/ShoerackHighComp.png')}
                        style={{ flex: 10, resizeMode: 'contain', height: undefined, width: undefined }}
                    ></Image>
                    <View style={{ flex: 1 }} />
                </View>

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
                <View style={{ flex: 2, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 12 }}>
                        <View style={{ flex: 2 }}></View>
                        <Text style={human.body}>In Computer Science, these shoes and racks can be represented in a structure known as a Binary Search Tree.</Text>
                        <View style={{ flex: 1 }}></View>
                    </View>
                    <View style={{ flex: 1 }}></View>
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

                <View style={{ flex: 2, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 12 }}>
                        <View style={{ flex: 2 }}></View>
                        <Text style={human.body}>Similar to the shoe racks, all the values to the left of the centre
                        'node' is smaller, while all the values to the right of the centre node
                        is larger.</Text>
                        <Text></Text>
                        <Text style={human.body}>This makes searching for values within the tree simple.</Text>
                        <View style={{ flex: 1 }}></View>
                    </View>
                    <View style={{ flex: 1 }}></View>
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
                        <View style={{ flex: 1 }} />
                        <Text style={styles.text}>
                            Given the following graph, starting at the root node,
                            select the considered nodes in order, till you find the value 24!
                        </Text>
                        <View style={{ flex: 1 }} />
                    </View>
                    {/* <View style={{ flex: 0.5 }} /> */}
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
                        <View style={{ flex: 1 }} />
                        <Text style={styles.text}>
                            What you just did is a type of searching known as Binary Search,
                            and is extremely useful in searching for values,
                            as it halves the total search range at every step.
                        </Text>
                        <View style={{ flex: 1 }} />
                    </View>
                    <View style={{ flex: 0.5 }} />
                </View>

                <View style={{ flex: 4, flexDirection: 'row' }}>
                    <View style={{ flex: 1, flexDirection: 'column' }}></View>
                    <View style={{ flex: 5, flexDirection: 'column' }}>
                        <BSTTree half={true} />
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
        flex: 12,
        textAlign: 'center',
        fontSize: 18
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