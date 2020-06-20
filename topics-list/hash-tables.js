import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { CheckBox, Button } from 'react-native-elements';
import { useNavigation, } from '@react-navigation/native';
import BackButton from '../Components/BackButton';
import MoneyHeist from './hashTableImages/moneyheist.png'
import BreakingBad from './hashTableImages/breakingbad.jpg'
import TVShow from './TVShow'

const ALLIMAGESOURCES = [
    MoneyHeist, BreakingBad,
    MoneyHeist, BreakingBad,
    MoneyHeist, BreakingBad,
    MoneyHeist, BreakingBad,
    MoneyHeist, BreakingBad,
    MoneyHeist, BreakingBad,
    MoneyHeist, BreakingBad,
    MoneyHeist, BreakingBad,
    MoneyHeist, BreakingBad,
    MoneyHeist, BreakingBad,
    MoneyHeist, BreakingBad,
    MoneyHeist, BreakingBad,
    MoneyHeist, BreakingBad,
    MoneyHeist, BreakingBad,
    MoneyHeist, BreakingBad,
    MoneyHeist
];

const TVSHOWIMAGETITLES = [
    MoneyHeist, BreakingBad,
    MoneyHeist, BreakingBad,
    MoneyHeist, BreakingBad,
    MoneyHeist, BreakingBad,
    MoneyHeist, BreakingBad,
    MoneyHeist, BreakingBad
];

class HashTables extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sevenShows: [],
        }
    }

    showNextButton() {
        if (this.state.sevenShows.length == 7) {
            const toPass = {
                selectedShows: this.state.sevenShows
            }
            return (
                <BackButton
                    title='Next'
                    to='HashTablesScreenTwo'
                    toTransfer={toPass}
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
            }
        })
    }

    renderTVShow(i) {
        return (
            <TVShow
                id={i}
                imageSource={ALLIMAGESOURCES[i]}
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

                <View>
                    {/* TOP ROW */}
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1, alignItems: "center" }}>
                            {this.renderTVShow(0)}
                        </View>
                        <View style={{ flex: 1, alignItems: "center" }}>
                            {this.renderTVShow(1)}
                        </View>
                        <View style={{ flex: 1, alignItems: "center" }}>
                            {this.renderTVShow(2)}
                        </View>
                        <View style={{ flex: 1, alignItems: "center" }}>
                            {this.renderTVShow(3)}
                        </View>
                    </View>

                    {/* MID ROW*/}
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1, alignItems: "center" }}>
                            {this.renderTVShow(4)}
                        </View>
                        <View style={{ flex: 1, alignItems: "center" }}>
                            {this.renderTVShow(5)}
                        </View>
                        <View style={{ flex: 1, alignItems: "center" }}>
                            {this.renderTVShow(6)}
                        </View>
                        <View style={{ flex: 1, alignItems: "center" }}>
                            {this.renderTVShow(7)}
                        </View>
                    </View>

                    {/* BOTTOM ROW */}
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1, alignItems: "center" }}>
                            {this.renderTVShow(8)}
                        </View>
                        <View style={{ flex: 1, alignItems: "center" }}>
                            {this.renderTVShow(9)}
                        </View>
                        <View style={{ flex: 1, alignItems: "center" }}>
                            {this.renderTVShow(10)}
                        </View>
                        <View style={{ flex: 1, alignItems: "center" }}>
                            {this.renderTVShow(11)}
                        </View>
                    </View>

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
            sevenShows: this.props.route.params.selectedShows,
        }
    }

    renderTVShowImageTitle(i) {
        let index = this.state.sevenShows[i];
        return (
            <TVShow
                id={index}
                imageSource={TVSHOWIMAGETITLES[index]}
                onClick={() => 1}
            />
        )
    }

    nextButton() {
        const toPass = {
            selectedShows: this.state.sevenShows
        }
        return (
            <BackButton
                title='Next'
                to='HashTablesScreenThree'
                toTransfer={toPass}
            />

        );
    }
    render() {

        return (
            <View>
                <Text>
                    Because you're ambitious,
                    you have decided to binge watch the shows at a rate of one show per week.
                    Here's how your planned schedule looks based on the order you have selected the shows:
                </Text>

                {/* Weeks and tv shows */}
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 1, flexDirection: "column" }}>
                                <View>
                                    <Text>Week</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: "column" }}>
                                <View>
                                    <Text>TV Show</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 1, flexDirection: "column" }}>
                                <View>
                                    <Text>1</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: "column" }}>
                                <View>
                                    {this.renderTVShowImageTitle(0)}
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 1, flexDirection: "column" }}>
                                <View>
                                    <Text>2</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: "column" }}>
                                <View>
                                    {this.renderTVShowImageTitle(1)}
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 1, flexDirection: "column" }}>
                                <View>
                                    <Text>3</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: "column" }}>
                                <View>
                                    {this.renderTVShowImageTitle(2)}
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 1, flexDirection: "column" }}>
                                <View>
                                    <Text>4</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: "column" }}>
                                <View>
                                    {this.renderTVShowImageTitle(3)}
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 1, flexDirection: "column" }}>
                                <View>
                                    <Text>5</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: "column" }}>
                                <View>
                                    {this.renderTVShowImageTitle(4)}
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 1, flexDirection: "column" }}>
                                <View>
                                    <Text>6</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: "column" }}>
                                <View>
                                    {this.renderTVShowImageTitle(5)}
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 1, flexDirection: "column" }}>
                                <View>
                                    <Text>7</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: "column" }}>
                                <View>
                                    {this.renderTVShowImageTitle(6)}
                                </View>
                            </View>
                        </View>
                    </View>


                    <View style={{ flex: 1 }}></View>
                </View>

                {/* Prev and Next buttons */}
                <BackButton title='Previous' to='HashTables' />
                {this.nextButton()}
            </View >
        );
    }
}

class HashTablesScreenThree extends React.Component {
    nextButton() {
        const toPass = {
            selectedShows: this.props.route.params.selectedShows
        }
        return (
            <BackButton
                title='Next'
                to='HashTablesScreenFour'
                toTransfer={toPass}
            />

        );
    }

    render() {
        return (
            <View>
                <Text>
                    You stored your schedule on your computer and when you went back to check your schedule,
                    your computer tries to be funny with you.

                    You can't see the shows you planned for each week anymore....
                </Text>

                {/* Weeks and tv shows */}

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



                <Text>TV show</Text>


                {/* //Prev and Next buttons */}
                <BackButton title='Previous' to='HashTablesScreenTwo' />
                {this.nextButton()}

            </View >
        );
    }
}

class HashTablesScreenFour extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sevenShows: this.props.route.params.selectedShows,
            pressed: [false, false, false, false, false, false, false]
        }
    }

    nextButton() {
        const toPass = {
            selectedShows: this.props.route.params.selectedShows
        }
        return (
            <BackButton
                title='Next'
                to='HashTablesScreenFive'
                toTransfer={toPass}
            />

        );
    }

    // renderTVShowImageTitle(i) {
    //     let index = this.state.sevenShows[i];
    //     return (
    //         <TVShow
    //             id={index}
    //             imageSource={TVSHOWIMAGETITLES[index]}
    //         />
    //     )
    // }

    onWeekClick(i) {
        let arr = this.state.pressed;
        arr[i] = true;
        this.setState(state => {
            return {
                sevenShows: this.props.route.params.selectedShows,
                pressed: arr
            }
        })
    }

    renderTVShow(i) {
        if (this.state.pressed[i]) {
            let index = this.state.sevenShows[i];
            return (
                <TVShow
                    id={index}
                    imageSource={TVSHOWIMAGETITLES[index]}
                />
            );
        }
    }

    render() {
        return (
            <View>
                <Text>
                    You really need to know what to binge watch each week because you forgot.
                    Your computer thankfully let you view the show you were supposed to
                    watch each week once you input the week into the following box.
                </Text>

                {/* Weeks and tv shows */}

                <View style={{ flex: 1, flexDirection: "row" }}>
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <View>
                            <Text>Week</Text>
                        </View>
                        <View>
                            <TouchableOpacity
                                onClick={() => this.onWeekClick(0)}>
                                <Text>0</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity
                                onClick={() => this.onWeekClick(1)}>
                                <Text>1</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity
                                onClick={() => this.onWeekClick(2)}>
                                <Text>2</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity
                                onClick={() => this.onWeekClick(3)}>
                                <Text>3</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity
                                onClick={() => this.onWeekClick(4)}>
                                <Text>4</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <View>
                            <Text>TV Show</Text>
                        </View>
                        <View>
                            {this.renderTVShow(0)}
                        </View>
                        <View>
                            {this.renderTVShow(1)}
                        </View>
                        <View>
                            {this.renderTVShow(2)}
                        </View>
                        <View>
                            {this.renderTVShow(3)}
                        </View>
                        <View>
                            {this.renderTVShow(4)}
                        </View>

                    </View>
                </View>


                {/* //Prev and Next buttons */}
                <BackButton title='Previous' to='HashTablesScreenThree' />
                {this.nextButton()}
            </View>
        );
    }
}

class HashTablesScreenFive extends React.Component {
    nextButton() {
        const toPass = {
            selectedShows: this.props.route.params.selectedShows
        }
        return (
            <BackButton
                title='Next'
                to='HashTablesScreenSix'
                toTransfer={toPass}
            />

        );
    }

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
                {this.nextButton()}
            </View>
        );
    }
}

class HashTablesScreenSix extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sevenShows: this.props.route.params.selectedShows,
            weekThreeShows: [],
            weekFiveShows: [],
            weekSevenShows: [],
        }
    }

    showNextButton() {
        if (this.state.weekThreeShows.length == 3 &&
            this.state.weekFiveShows.length == 3 &&
            this.state.weekSevenShows.length == 3) {
            const toPass = {
                selectedShows: this.state.sevenShows,
                week3: this.state.weekThreeShows,
                week5: this.state.weekFiveShows,
                week7: this.state.weekSevenShows
            }
            return (
                <BackButton
                    title='Next'
                    to='HashTablesScreenSeven'
                    toTransfer={toPass}
                />

            );
        }
    }

    showIsSelected = (id) => {

        if (this.state.sevenShows.indexOf(id) > -1 ||
            this.state.weekThreeShows.indexOf(id) > -1 ||
            this.state.weekFiveShows.indexOf(id) > -1 ||
            this.state.weekSevenShows.indexOf(id) > -1) {
            console.log("show has been added already");
            return;
        }
        
        if (id >= 12 && id <= 16) {
            if (this.state.weekThreeShows.length >= 3) {
                console.log("cannot add more than 3 shows to week 3")
            } else {
                this.setState(state => {
                    const newWeekThreeShows = state.weekThreeShows.concat([id]);
                    return {
                        sevenShows: this.state.sevenShows,
                        weekThreeShows: newWeekThreeShows,
                        weekFiveShows: this.state.weekFiveShows,
                        weekSevenShows: this.state.weekSevenShows
                    }
                });
            }
            // } else if (17 <= id <= 21) {
        } else if (id <= 21) {
            if (this.state.weekFiveShows.length >= 3) {
                console.log("cannot add more than 3 shows to week 5")
            } else {
                this.setState(state => {
                    const newWeekFiveShows = state.weekFiveShows.concat([id]);
                    return {
                        sevenShows: this.state.sevenShows,
                        weekThreeShows: this.state.weekThreeShows,
                        weekFiveShows: newWeekFiveShows,
                        weekSevenShows: this.state.weekSevenShows
                    }
                });
            }
            // } else if (22 <= id <= 26) {
        } else if (id >= 22) {
            if (this.state.weekSevenShows.length >= 3) {
                console.log("cannot add more than 3 shows to week 7")
            } else {
                this.setState(state => {
                    const newWeekSevenShows = state.weekSevenShows.concat([id]);
                    return {
                        sevenShows: this.state.sevenShows,
                        weekThreeShows: this.state.weekThreeShows,
                        weekFiveShows: this.state.weekFiveShows,
                        weekSevenShows: newWeekSevenShows
                    }
                });
            }
        }
    }

    renderTVShow(i) {
        return (
            <TVShow
                id={i}
                imageSource={ALLIMAGESOURCES[i]}
                onClick={() => {
                    this.showIsSelected(i);
                }}
            />
        )
    }

    render() {
        { console.log('week3' + this.state.weekThreeShows); }
        { console.log('week5' + this.state.weekFiveShows); }
        { console.log('week7' + this.state.weekSevenShows); }
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
                <View>
                    <Text>Week 3</Text>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1, alignItems: "center" }}>
                            {this.renderTVShow(12)}
                        </View>
                        <View style={{ flex: 1, alignItems: "center" }}>
                            {this.renderTVShow(13)}
                        </View>
                        <View style={{ flex: 1, alignItems: "center" }}>
                            {this.renderTVShow(14)}
                        </View>
                        <View style={{ flex: 1, alignItems: "center" }}>
                            {this.renderTVShow(15)}
                        </View>
                        <View style={{ flex: 1, alignItems: "center" }}>
                            {this.renderTVShow(16)}
                        </View>
                    </View>

                    <Text>Week 5</Text>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1, alignItems: "center" }}>
                            {this.renderTVShow(17)}
                        </View>
                        <View style={{ flex: 1, alignItems: "center" }}>
                            {this.renderTVShow(18)}
                        </View>
                        <View style={{ flex: 1, alignItems: "center" }}>
                            {this.renderTVShow(19)}
                        </View>
                        <View style={{ flex: 1, alignItems: "center" }}>
                            {this.renderTVShow(20)}
                        </View>
                        <View style={{ flex: 1, alignItems: "center" }}>
                            {this.renderTVShow(21)}
                        </View>
                    </View>

                    <Text>Week 7</Text>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1, alignItems: "center" }}>
                            {this.renderTVShow(22)}
                        </View>
                        <View style={{ flex: 1, alignItems: "center" }}>
                            {this.renderTVShow(23)}
                        </View>
                        <View style={{ flex: 1, alignItems: "center" }}>
                            {this.renderTVShow(24)}
                        </View>
                        <View style={{ flex: 1, alignItems: "center" }}>
                            {this.renderTVShow(25)}
                        </View>
                        <View style={{ flex: 1, alignItems: "center" }}>
                            {this.renderTVShow(26)}
                        </View>
                    </View>

                </View>


                {/* //Prev and Next buttons */}
                <BackButton title='Previous' to='HashTablesScreenFive' />
                {this.showNextButton()}
            </View>
        );
    }
}

class HashTablesScreenSeven extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sevenShows: this.props.route.params.selectedShows,
            pressed: [false, false, false, false, false, false, false]
        }
    }
    onWeekClick(i) {
        let arr = this.state.pressed;
        arr[i] = true;
        this.setState(state => {
            return {
                sevenShows: this.props.route.params.selectedShows,
                pressed: arr
            }
        })
    }

    renderTVShow(i) {
        if (this.state.pressed[i]) {
            return (
                <TVShow
                    id={i}
                    imageSource={TVSHOWIMAGETITLES[i]}
                />
            );
        }
    }
    render() {
        return (
            <View>
                <Text>
                    Back to your hash table program. Now key in week 5, 7, and 9 below to reveal
                    the TV shows you will be watching in those weeks.
                </Text>

                <Text>Week number</Text>

                {/* Weeks and tv shows */}

                <View style={{ flex: 1, flexDirection: "row" }}>
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
                            <TouchableOpacity
                                onClick={() => this.onWeekClick(2)}
                            >
                                <Text>3</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text>4</Text>
                        </View>
                        <View>
                            <TouchableOpacity
                                onClick={() => this.onWeekClick(4)}
                            >
                                <Text>5</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text>6</Text>
                        </View>
                        <View>
                            <TouchableOpacity
                                onClick={() => this.onWeekClick(6)}
                            >
                                <Text>7</Text>
                            </TouchableOpacity>
                        </View>


                    </View>

                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <View>
                            <Text>TV Show</Text>
                        </View>
                        <View>
                            {this.renderTVShow(0)}
                        </View>
                        <View>
                            {this.renderTVShow(1)}
                        </View>
                        <View>
                            {this.renderTVShow(2)}
                        </View>
                        <View>
                            {this.renderTVShow(3)}
                        </View>
                        <View>
                            {this.renderTVShow(4)}
                        </View>
                        <View>
                            {this.renderTVShow(5)}
                        </View>
                        <View>
                            {this.renderTVShow(6)}
                        </View>

                    </View>
                </View>

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