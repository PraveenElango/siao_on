import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, StyleSheet, TextInput } from "react-native";
import { CheckBox, Button } from 'react-native-elements';
import { useNavigation, } from '@react-navigation/native';
import BackButton from '../Components/BackButton';
import MoneyHeist from './hashTableImages/moneyheist.png'
import BreakingBad from './hashTableImages/breakingbad.jpg'
import TVShow from './TVShow'


function NewButton(props) {
    const navigation = useNavigation();
    return (
        <Button
            title={props.title}
            onPress={() => navigation.navigate(props.to, {
                selectedShows: props.shows
            })}
        />);
}

class HashTables extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            sevenShows: [],
            allImageSources: [
                MoneyHeist, BreakingBad,
                MoneyHeist, BreakingBad,
                MoneyHeist, BreakingBad,
                MoneyHeist, BreakingBad,
                MoneyHeist, BreakingBad,
                MoneyHeist, BreakingBad
            ],
            TVShowImageTitles: [
                MoneyHeist, BreakingBad,
                MoneyHeist, BreakingBad,
                MoneyHeist, BreakingBad,
                MoneyHeist, BreakingBad,
                MoneyHeist, BreakingBad,
                MoneyHeist, BreakingBad
            ]

        }
    }
    showNextButton() {
        if (this.state.sevenShows.length == 7) {
            return (
                <NewButton
                    title='Next'
                    to='HashTablesScreenTwo'
                    shows={this.state.sevenShows}
                />

            );
        }
    }

    showIsSelected = (id) => {
        if (this.state.sevenShows.indexOf(id) > -1) {
            console.log("show has been added already");
            return;
        }
        if (this.state.sevenShows.length == 7) {
            console.log("cannot add more than 7 shows!")
            return;
        }
        this.setState(state => {
            const newSevenShows = state.sevenShows.concat([id]);
            return {
                sevenShows: newSevenShows,
                allImageSources: this.state.allImageSources
            }
        })
    }

    //how to pass TVShow component itself into showIsSelected?
    renderTVShow(i) {
        return (
            <TVShow
                id={i}
                imageSource={this.state.allImageSources[i]}
                onClick={() => {
                    this.showIsSelected(i);
                }}
            />
        )
    }

    render() {
        return (
            <View>
                <Text>Hash Tables</Text>
                <Text>
                    Congratulations! You've finished you finals and it's now the summer break.
                    You have just gotten your Netflix subscription.
                    Choose 7 favourite shows to get started.
                </Text>


                {/* TV Shows */}
                {/* TOP ROW */}
                <View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            {this.renderTVShow(0)}
                        </View>
                        <View style={{ flex: 1 }}>
                            {this.renderTVShow(1)}
                        </View>
                        <View style={{ flex: 1 }}>
                            {this.renderTVShow(2)}
                        </View>
                        <View style={{ flex: 1 }}>
                            {this.renderTVShow(3)}
                        </View>
                    </View>

                    {/* MID ROW*/}
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            {this.renderTVShow(4)}
                        </View>
                        <View style={{ flex: 1 }}>
                            {this.renderTVShow(5)}
                        </View>
                        <View style={{ flex: 1 }}>
                            {this.renderTVShow(6)}
                        </View>
                        <View style={{ flex: 1 }}>
                            {this.renderTVShow(7)}
                        </View>
                    </View>

                    {/* BOTTOM ROW */}
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            {this.renderTVShow(8)}
                        </View>
                        <View style={{ flex: 1 }}>
                            {this.renderTVShow(9)}
                        </View>
                        <View style={{ flex: 1 }}>
                            {this.renderTVShow(10)}
                        </View>
                        <View style={{ flex: 1 }}>
                            {this.renderTVShow(11)}
                        </View>
                    </View>

                    {console.log(this.state.sevenShows)}
                </View>

                <BackButton title='Previous' to='Topics' />
                {this.showNextButton()}
            </View>

        );
    }
}

class HashTablesScreenTwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //  sevenShows: this.props.route.selectedShows,
            TVShowImageTitles: [
                MoneyHeist, BreakingBad,
                MoneyHeist, BreakingBad,
                MoneyHeist, BreakingBad,
                MoneyHeist, BreakingBad,
                MoneyHeist, BreakingBad,
                MoneyHeist, BreakingBad
            ]
        }
    }

    renderTVShowImageTitle() {
        { console.log(this.state.sevenShows) }
        { console.log(this.props.route.selectedShows) }
        // for(let k = 0; k < 7; k++) {
        //     let i = this.state.sevenShows[k];
        //     <TVShow
        //         id={i}
        //         imageSource={this.state.TVShowImageTitles[i]}
        //     />
        // }   
    }

    render() {
        return (
            <View>
                <Text>
                    Because you're ambitious,
                    you have decided to binge watch the shows at a rate of one show per week.
                    Here's how your planned schedule looks based on the order you have selected the shows:
                </Text>

                {/* {console.log(this.state.sevenShows)} */}
                {/* Weeks and tv shows */}
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <View>
                            <Text>Week</Text>
                        </View>
                        <View>
                            <Text>0</Text>
                        </View>
                        <View>
                            <Text>1</Text>
                        </View>
                        <View>
                            <Text>2</Text>
                        </View>
                        <View>
                            <Text>3</Text>
                        </View>
                        <View>
                            <Text>4</Text>
                        </View>
                        <View>
                            <Text>5</Text>
                        </View>
                        <View>
                            <Text>6</Text>
                        </View>
                    </View>
                    <View style={{ flex: 4, flexDirection: 'column' }}>
                        <View>
                            <Text>TV Show</Text>
                        </View>
                        <View>
                            {this.renderTVShowImageTitle()}
                            {/* 0 */}
                        </View>
                        <View>
                            {/* 1 */}
                        </View>
                        <View>
                            {/* 2 */}
                        </View>
                        <View>
                            {/* 3 */}
                        </View>
                        <View>
                            {/* 4 */}
                        </View>
                        <View>
                            {/* 5 */}
                        </View>
                        <View>
                            {/* 6 */}
                        </View>
                    </View>
                </View>

                {/* //Prev and Next buttons */}
                <BackButton title='Previous' to='HashTableScreenOne' />
                <BackButton title='Next' to='HashTablesScreenThree' />
            </View>
        );
    }
}

class HashTablesScreenThree extends React.Component {
    render() {
        return (
            <View>
                <Text>
                    You stored your schedule on your computer and when you went back to check your schedule,
                    your computer tries to be funny with you.

                    You can't see the shows you planned for each week anymore....
                </Text>

                {/* Weeks and tv shows */}
                <Text>Week</Text>
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />

                <Text>TV show</Text>
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />

                {/* //Prev and Next buttons */}
                <BackButton title='Previous' to='HashTableScreenTwo' />
                <BackButton title='Next' to='HashTablesScreenFour' />

            </View>
        );
    }
}

class HashTablesScreenFour extends React.Component {
    render() {
        return (
            <View>
                <Text>
                    You really need to know what to binge watch each week because you forgot.
                    Your computer thankfully let you view the show you were supposed to
                    watch each week once you input the week into the following box.
                </Text>
                <Text>Week number</Text>
                {/* <TextInput>Week</TextInput> */}

                {/* Weeks and tv shows */}
                <Text>Week</Text>
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />

                <Text>TV show</Text>
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />

                {/* //Prev and Next buttons */}
                <BackButton title='Previous' to='HashTablesScreenThree' />
                <BackButton title='Next' to='HashTablesScreenFive' />
            </View>
        );
    }
}

class HashTablesScreenFive extends React.Component {
    render() {
        return (
            <View>
                <Text>
                    When your computer helped you to find the TV to show to watch each week
                    based on the week number you gave as input, what it did was to pass the
                    week into a hash function to return your TV show.
                </Text>

                <Text>
                    h(week) = TV_shows[week]
                </Text>

                <Text>
                    Your week acts as a key.

                    Your TV show acts as the value.

                    Together, we call this a key-value pair.

                    A key-value pair can be stored in an hash table (array) where you can extract a value based on its key.

                    This is known as Linear Probing.
                </Text>

                {/* //Prev and Next buttons */}
                <BackButton title='Previous' to='HashTablesScreenFour' />
                <BackButton title='Next' to='HashTablesScreenSix' />
            </View>
        );
    }
}

class HashTablesScreenSix extends React.Component {
    render() {
        return (
            <View>
                <Text>
                    Now the COVID19 lockdown means that your summer internship also got cancelled :(
                </Text>

                <Text>
                    You decide to put the time to good use by..... WATCHING MORE TV SHOWS!!
                </Text>

                <Text>
                    You are going to watch more than two shows instead of one on some weeks.
                    Click to add shows for weeks 5, 7, and 9.
                </Text>
                {/* Weeks and tv shows */}
                <Text>Week 5</Text>
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />

                <Text>Week 7</Text>
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />

                <Text>Week 9</Text>
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />


                {/* //Prev and Next buttons */}
                <BackButton title='Previous' to='HashTablesScreenFive' />
                <BackButton title='Next' to='HashTablesScreenSeven' />
            </View>
        );
    }
}

class HashTablesScreenSeven extends React.Component {
    render() {
        return (
            <View>
                <Text>
                    Back to your hash table program. Now key in week 5, 7, and 9 below to reveal
                    the TV shows you will be watching in those weeks.
                </Text>

                <Text>Week number</Text>
                {/* <TextInput>Week</TextInput> */}

                {/* Weeks and tv shows */}
                <Text>Week</Text>
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />

                <Text>TV show</Text>
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />

                <Text>
                    You are going to watch more than two shows instead of one on some weeks.
                    Click to add shows for weeks 5, 7, and 9.
                </Text>

                {/* //Prev and Next buttons */}
                <BackButton title='Previous' to='HashTablesScreenSix' />
                <BackButton title='Next' to='HashTablesScreenEight' />
            </View>
        );
    }
}

class HashTablesScreenEight extends React.Component {
    render() {
        return (
            <View>
                <Text>
                    This is known as collision....
                </Text>

                {/* Weeks and tv shows */}
                <Text>Week</Text>
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />

                <Text>TV show</Text>
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />

                {/* //Prev and Next buttons */}
                <BackButton title='Previous' to='HashTablesScreenSeven' />
                <BackButton title='Next' to='HashTablesScreenNine' />
            </View>
        );
    }
}

class HashTablesScreenNine extends React.Component {
    render() {
        return (
            <View>
                <Text>
                    We can solve this using chaining.

                    Using the shows you previously selected, here's how we do it.
                </Text>

                {/* Weeks and tv shows */}
                <Text>Week</Text>
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />

                <Text>TV show</Text>
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />

                {/* //Prev and Next buttons */}
                <BackButton title='Previous' to='HashTablesScreenEight' />
                <BackButton title='Next' to='HashTablesScreenTen' />
            </View>
        );
    }
}

class HashTablesScreenTen extends React.Component {
    render() {
        return (
            <View>
                <Text>
                    This is the hash function that the computer uses for chaining.
                    *EQUATION*

                    Index - Week
                    Key - Week
                    Values - TV Shows

                </Text>

                {/* Weeks and tv shows */}
                <Text>Week</Text>
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />

                <Text>TV show</Text>
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />

                {/* //Prev and Next buttons */}
                <BackButton title='Previous' to='HashTablesScreenNine' />
                <BackButton title='Next' to='HashTablesScreenEleven' />
            </View>
        );
    }
}

class HashTablesScreenEleven extends React.Component {
    render() {
        return (
            <View>
                <Text>
                    We can also use keys that are not week numbers to retrieve the TV shows.

                    Index - Week
                    Key - Some hexadecimal ints
                    Values - TV Shows
                </Text>

                {/* Weeks and tv shows */}
                <Text>Week</Text>
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />

                <Text>TV show</Text>
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />

                {/* //Prev and Next buttons */}
                <BackButton title='Previous' to='HashTablesScreenTen' />
                <BackButton title='Exit' to='Topics' />
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
    HashTables, HashTablesScreenTwo, HashTablesScreenThree,
    HashTablesScreenFour, HashTablesScreenFive,
    HashTablesScreenSix, HashTablesScreenSeven, HashTablesScreenEight,
    HashTablesScreenNine, HashTablesScreenTen, HashTablesScreenEleven
};