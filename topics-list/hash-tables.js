import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Dimensions } from "react-native";
import BackButton from '../Components/BackButton';
import MoneyHeist from './hashTableImages/moneyheist.png'
import BreakingBad from './hashTableImages/breakingbad.jpg'
import Narcos from './hashTableImages/narcos.jpg'
import GameOfThrones from './hashTableImages/gameofthrones.jpg'
import PeakyBlinders from './hashTableImages/peakyblinders.jpg'
import TheOffice from './hashTableImages/theoffice.jpg'
import Sherlock from './hashTableImages/sherlock.jpg'
import Friends from './hashTableImages/friends.jpg'
import StrangerThings from './hashTableImages/strangerthings.jpg'
import BrooklynNineNine from './hashTableImages/brooklyn99.jpg'
import PrisonBreak from './hashTableImages/prisonbreak.jpg'
import BlackMirror from './hashTableImages/blackmirror.jpg'
import BetterCallSaul from './hashTableImages/bettercallsaul.jpg'
import BigBangTheory from './hashTableImages/bigbangtheory.jpg'
import GreysAnatomy from './hashTableImages/greysanatomy.jpg'
import TheKing from './hashTableImages/theking.jpg'
import SacredGames from './hashTableImages/sacredgames.jpg'
import Chernobyl from './hashTableImages/chernobyl.jpg'
import SpaceForce from './hashTableImages/spaceforce.jpg'
import DirtyMoney from './hashTableImages/dirtymoney.jpg'
import TheSinner from './hashTableImages/thesinner.jpg'
import TVShow from './TVShow'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


const ALLIMAGESOURCES = [
    MoneyHeist, BreakingBad,
    Narcos, StrangerThings,
    Sherlock, PeakyBlinders,
    TheOffice, GameOfThrones,
    Friends, BrooklynNineNine,
    PrisonBreak, BlackMirror,
    BetterCallSaul, BigBangTheory,
    GreysAnatomy, TheKing,
    SacredGames, Chernobyl,
    SpaceForce, DirtyMoney,
    TheSinner
];

const TVSHOWIMAGETITLES = [
    MoneyHeist, BreakingBad,
    Narcos, StrangerThings,
    Sherlock, PeakyBlinders,
    TheOffice, GameOfThrones,
    Friends
];

class HashTables extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fiveShows: [],
        }
    }

    showNextButton() {
        if (this.state.fiveShows.length == 5) {
            const toPass = {
                selectedShows: this.state.fiveShows
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
        if (this.state.fiveShows.indexOf(id) > -1) {
            console.log("show has been added already");
            return;
        }
        if (this.state.fiveShows.length == 5) {
            console.log("cannot add more than 5 shows!")
            return;
        }
        this.setState(state => {
            const newFiveShows = state.fiveShows.concat([id]);
            return {
                fiveShows: newFiveShows,
            }
        })
    }

    renderTVShow(i) {
        return (
            <TVShow
                id={i}
                imageSource={ALLIMAGESOURCES[i]}
                // style={{flex: 1}}
                onClick={() => {
                    this.showIsSelected(i);
                }}
                opacity={this.state.fiveShows.indexOf(i) > -1
                    ? 0.4
                    : 1}
            />
        )
    }

    renderBlock() {
        const deviceDisplay = Dimensions.get("window");
        const wid = deviceDisplay.width;

        if (wid < 500) {
            return (
                <View style={{ flex: 11 }}>
                    {/* TOP ROW */}
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            {this.renderTVShow(0)}
                            <View style={{ flex: 1, alignItems: "center" }}>
                                <Text>Money Heist</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            {this.renderTVShow(1)}
                            <View style={{ flex: 1, alignItems: "center" }}>
                                <Text>Breaking Bad</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            {this.renderTVShow(2)}
                            <View style={{ flex: 1, alignItems: "center" }}>
                                <Text>Narcos</Text>
                            </View>
                        </View>
                    </View>

                    {/* SECOND ROW*/}
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 2, flexDirection: 'column' }}>
                            {this.renderTVShow(3)}
                            <View style={{ flex: 1, alignItems: "center" }}>
                                <Text>Stranger Things</Text>
                            </View>
                        </View>
                        <View style={{ flex: 2, flexDirection: 'column' }}>
                            {this.renderTVShow(4)}
                            <View style={{ flex: 1, alignItems: "center" }}>
                                <Text>Sherlock</Text>
                            </View>
                        </View>
                        <View style={{ flex: 2, flexDirection: 'column' }}>
                            {this.renderTVShow(5)}
                            <View style={{ flex: 1, alignItems: "center" }}>
                                <Text>Peaky Blinders</Text>
                            </View>
                        </View>
                    </View>

                    {/* THIRD ROW */}
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 2, flexDirection: 'column' }}>
                            {this.renderTVShow(6)}
                            <View style={{ flex: 1, alignItems: "center" }}>
                                <Text>The Office</Text>
                            </View>
                        </View>
                        <View style={{ flex: 2, flexDirection: 'column' }}>
                            {this.renderTVShow(7)}
                            <View style={{ flex: 1, alignItems: "center" }}>
                                <Text>Game of Thrones</Text>
                            </View>
                        </View>
                        <View style={{ flex: 2, flexDirection: 'column' }}>
                            {this.renderTVShow(8)}
                            <View style={{ flex: 1, alignItems: "center" }}>
                                <Text>Friends</Text>
                            </View>
                        </View>
                    </View>
                </View>
            )
        } else {
            return (
                <View style={{ flex: 14, flexDirection: 'row' }}>
                    <View style={{ flex: 2 }}></View>

                    <View style={{ flex: 3 }}>
                        {/* TOP ROW */}
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 1, flexDirection: 'column' }}>
                                {this.renderTVShow(0)}
                                <View style={{ flex: 1, alignItems: "center" }}>
                                    <Text>Money Heist</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'column' }}>
                                {this.renderTVShow(1)}
                                <View style={{ flex: 1, alignItems: "center" }}>
                                    <Text>Breaking Bad</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'column' }}>
                                {this.renderTVShow(2)}
                                <View style={{ flex: 1, alignItems: "center" }}>
                                    <Text>Narcos</Text>
                                </View>
                            </View>
                        </View>

                        {/* SECOND ROW*/}
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 2, flexDirection: 'column' }}>
                                {this.renderTVShow(3)}
                                <View style={{ flex: 1, alignItems: "center" }}>
                                    <Text>Stranger Things</Text>
                                </View>
                            </View>
                            <View style={{ flex: 2, flexDirection: 'column' }}>
                                {this.renderTVShow(4)}
                                <View style={{ flex: 1, alignItems: "center" }}>
                                    <Text>Sherlock</Text>
                                </View>
                            </View>
                            <View style={{ flex: 2, flexDirection: 'column' }}>
                                {this.renderTVShow(5)}
                                <View style={{ flex: 1, alignItems: "center" }}>
                                    <Text>Peaky Blinders</Text>
                                </View>
                            </View>
                        </View>

                        {/* THIRD ROW */}
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 2, flexDirection: 'column' }}>
                                {this.renderTVShow(6)}
                                <View style={{ flex: 1, alignItems: "center" }}>
                                    <Text>The Office</Text>
                                </View>
                            </View>
                            <View style={{ flex: 2, flexDirection: 'column' }}>
                                {this.renderTVShow(7)}
                                <View style={{ flex: 1, alignItems: "center" }}>
                                    <Text>Game of Thrones</Text>
                                </View>
                            </View>
                            <View style={{ flex: 2, flexDirection: 'column' }}>
                                {this.renderTVShow(8)}
                                <View style={{ flex: 1, alignItems: "center" }}>
                                    <Text>Friends</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ flex: 2 }}></View>
                </View>
            )
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 0.5 }}></View>

                <View style={{ flex: 1.5 }}>
                    <Text style={{ flex: 1, textAlign: 'center' }}>Hash Tables</Text>
                    <Text style={{ flex: 1, textAlign: 'center' }}>
                        Congratulations! You've finished your finals and it's now the summer break.
                        You have just gotten your Netflix subscription.
                        Choose 5 favourite shows to get started.
                    </Text>
                </View>

                <View style={{ flex: 0.5 }}></View>

                {/* TV Shows */}
                {this.renderBlock()}

                {/* Prev and Next buttons */}
                <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 2 }}>
                        <BackButton title='Previous' to='Topics' />
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

class HashTablesScreenTwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fiveShows: this.props.route.params.selectedShows,
            tableHead: ['Week', 'TV Shows'],
            // tableWeeks: [1, 2, 3, 4, 5],
            tableData: [
                [1, 'tv'],
                [2, 'tv'],
                [3, 'tv'],
                [4, 'tv'],
                [5, 'tv']
            ]
        }
    }

    renderTVShowImageTitle(i) {
        let index = this.state.fiveShows[i];
        return (
            <TVShow
                id={index}
                imageSource={TVSHOWIMAGETITLES[index]}
                onClick={() => 1}
            />
        )
    }

    onWeekClick(i) {
        let arr = this.state.pressed;
        arr[i] = true;
        this.setState(state => {
            return {
                fiveShows: this.props.route.params.selectedShows,
                pressed: arr
            }
        })
    }


    // renderTableData() {
    //     let newArr = this.state.tableData
    //     for (let i = 0; i < 5; i++) {
    //         const image = this.renderTVShowImageTitle(i)
    //         newArr[i] = image
    //     }
    //     console.log(newArr)
    //     this.setState(state => {
    //         return {
    //             tableData: newArr
    //         }
    //     })
    // }

    // renderTableData(){
    //     const jsxArray = this.state.tableWeeks.map((i)=>this.renderTVShowImageTitle(i-1))
    //     console.log(jsxArray)
    //     console.log(this.state.tableWeeks)
    //     return{
    //         tableData: jsxArray
    //     }
    // }
    // renderTVShowImageTitle(i) {
    //     let index = this.state.fiveShows[i];
    //     return (
    //         <TVShow
    //             id={index}
    //             imageSource={TVSHOWIMAGETITLES[index]}
    //             onClick={() => 1}
    //         />
    //     )
    // }

    nextButton() {
        const toPass = {
            selectedShows: this.state.fiveShows
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
        const state = this.state;
        const element = (i) => (
            <TVShow
                id={this.state.fiveShows[i]}
                imageSource={TVSHOWIMAGETITLES[this.state.fiveShows[i]]}
                onClick={() => 1}
            />
        )
        return (
            <View>

                <Text>
                    Because you're ambitious,
                    you have decided to binge watch the shows at a rate of one show per week.
                    Here's how your planned schedule looks based on the order you have selected the shows:
                </Text>

                <View style={styles.container}>
                    <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                        <Row data={state.tableHead} style={styles.head} textStyle={styles.text} />
                        {
                            state.tableData.map((rowData, index) => (
                                <TableWrapper key={index} style={styles.row}>
                                    {
                                        rowData.map((cellData, cellIndex) => (
                                            <Cell key={cellIndex} data={cellIndex == 1 ? element(index) : cellData} />
                                        ))
                                    }
                                </TableWrapper>
                            ))
                        }
                    </Table>
                </View>

                {/* Prev and Next buttons */}
                <BackButton title='Previous' to='HashTables' />
                {this.nextButton()}

            </View >
        );
    }
}

class HashTablesScreenThree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fiveShows: this.props.route.params.selectedShows,
            tableHead: ['Week', 'TV Shows'],
            // tableWeeks: [1, 2, 3, 4, 5],
            tableData: [
                [1, 'tv'],
                [2, 'tv'],
                [3, 'tv'],
                [4, 'tv'],
                [5, 'tv']
            ]
        }
    }

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
        const state = this.state;
        const element = (i) => (
            <TVShow
                id={this.state.fiveShows[i]}
                imageSource={TVSHOWIMAGETITLES[this.state.fiveShows[i]]}
                onClick={() => 1}
            />
        )
        return (
            <View>
                <Text>
                    You stored your schedule on your computer and when you went back to check your schedule,
                    your computer tries to be funny with you.

                    You can't see the shows you planned for each week anymore....
                </Text>

                {/* Weeks and tv shows */}

                {/* <View style={{ flex: 1, flexDirection: 'column' }}>
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



                <Text>TV show</Text> */}

                <View style={styles.container}>
                    <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                        <Row data={state.tableHead} style={styles.head} textStyle={styles.text} />
                        {
                            state.tableData.map((rowData, index) => (
                                <TableWrapper key={index} style={styles.row}>
                                    {
                                        rowData.map((cellData, cellIndex) => (
                                            <Cell key={cellIndex} data={cellIndex == 1 ? element(cellData, index) : cellData} />
                                        ))
                                    }
                                </TableWrapper>
                            ))
                        }
                    </Table>
                </View>
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
            currentNumber: null,
            fiveShows: this.props.route.params.selectedShows,
            pressed: [false, false, false, false, false, false, false],
            tableHead: ['Week', 'TV Shows'],
            // tableWeeks: [1, 2, 3, 4, 5],
            tableData: [
                [1, null],
                [2, null],
                [3, null],
                [4, null],
                [5, null]
            ]
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

    onWeekClick(i) {
        let arr = this.state.pressed;
        arr[i] = true;
        this.setState(state => {
            return {
                fiveShows: this.props.route.params.selectedShows,
                pressed: arr
            }
        })
    }

    renderTVShow(i) {
        if (this.state.pressed[i]) {
            let index = this.state.fiveShows[i];
            return (
                <TVShow
                    id={index}
                    imageSource={TVSHOWIMAGETITLES[index]}
                />
            );
        }
    }

    handleNumber = (text) => {
        this.setState({ currentNumber: text })
    }

    render() {
        const state = this.state;
        const element = (i) => (
            <TVShow
                id={this.state.fiveShows[i]}
                imageSource={TVSHOWIMAGETITLES[this.state.fiveShows[i]]}
                onClick={() => 1}
            />
        )
        return (
            <View>
                <Text>
                    You really need to know what to binge watch each week because you forgot.
                    Your computer thankfully let you view the show you were supposed to
                    watch each week once you input the week into the following box.
                </Text>
                <View>
                    <TextInput style={styles.input}
                        keyboardType={'numeric'}
                        onChangeText={this.handleNumber} />

                    <View style={styles.container}>
                        <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                            <Row data={state.tableHead} style={styles.head} textStyle={styles.text} />
                            {
                                state.tableData.map((rowData, index) => (
                                    <TableWrapper key={index} style={styles.row}>
                                        {
                                            rowData.map((cellData, cellIndex) => (

                                                <Cell key={cellIndex} data={
                                                    (cellIndex == 1 && index == this.state.currentNumber - 1) ?
                                                        (1 <= this.state.currentNumber <= 5 ? element(this.state.currentNumber - 1) : cellData) : cellData
                                                } />
                                            ))
                                        }
                                    </TableWrapper>
                                ))
                            }
                        </Table>
                    </View>
                </View>
                {/* Weeks and tv shows */}

                {/* <View style={{ flex: 1, flexDirection: "row" }}>
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

                    </View> */}



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
            fiveShows: this.props.route.params.selectedShows,
            weekThreeShows: [],
            weekFiveShows: [],
            weekTwoShows: [],
        }
    }

    showNextButton() {
        if (this.state.weekThreeShows.length == 2 &&
            this.state.weekFiveShows.length == 2 &&
            this.state.weekTwoShows.length == 2) {
            const toPass = {
                selectedShows: this.state.fiveShows,
                week3: this.state.weekThreeShows,
                week5: this.state.weekFiveShows,
                week2: this.state.weekTwoShows
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
        // this.state.fiveShows.indexOf(id) > -1 ||
        if (
            this.state.weekThreeShows.indexOf(id) > -1 ||
            this.state.weekFiveShows.indexOf(id) > -1 ||
            this.state.weekTwoShows.indexOf(id) > -1) {
            console.log("show has been added already");
            return;
        }

        if (id >= 9 && id <= 12) {
            if (this.state.weekTwoShows.length >= 2) {
                console.log("cannot add more than 2 shows to week 2")
            } else {
                this.setState(state => {
                    const newWeekTwoShows = state.weekTwoShows.concat([id]);
                    return {
                        fiveShows: this.state.fiveShows,
                        weekTwoShows: newWeekTwoShows,
                        weekFiveShows: this.state.weekFiveShows,
                        weekThreeShows: this.state.weekThreeShows
                    }
                });
            }
            // } else if (17 <= id <= 21) {
        } else if (id <= 16) {
            if (this.state.weekThreeShows.length >= 2) {
                console.log("cannot add more than 2 shows to week 3")
            } else {
                this.setState(state => {
                    const newWeekThreeShows = state.weekThreeShows.concat([id]);
                    return {
                        fiveShows: this.state.fiveShows,
                        weekFiveShows: this.state.weekFiveShows,
                        weekThreeShows: newWeekThreeShows,
                        weekTwoShows: this.state.weekTwoShows
                    }
                });
            }
            // } else if (22 <= id <= 26) {
        } else if (id >= 17) {
            if (this.state.weekFiveShows.length >= 2) {
                console.log("cannot add more than 2 shows to week 5")
            } else {
                this.setState(state => {
                    const newWeekFiveShows = state.weekFiveShows.concat([id]);
                    return {
                        fiveShows: this.state.fiveShows,
                        weekThreeShows: this.state.weekThreeShows,
                        weekTwoShows: this.state.weekTwoShows,
                        weekFiveShows: newWeekFiveShows
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
        { console.log('week2' + this.state.weekTwoShows); }
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
                    Click to add shows for weeks 2, 3, and 5.
                </Text>

                {/* Weeks and tv shows */}

                <Text>Week 3</Text>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 2, flexDirection: 'column' }}>
                        <View style={{ flex: 1 }}>
                            {this.renderTVShow(9)}
                        </View>
                        <View style={{ flex: 1 }}>
                            {this.renderTVShow(10)}
                        </View>
                    </View>
                    <View style={{ flex: 2, flexDirection: 'column' }}>
                        <View style={{ flex: 1 }}>
                            {this.renderTVShow(11)}
                        </View>
                        <View style={{ flex: 1 }}>
                            {this.renderTVShow(12)}
                        </View>
                    </View>
                </View>


                <Text>Week 5</Text>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 2, flexDirection: 'column' }}>
                        <View style={{ flex: 1 }}>
                            {this.renderTVShow(13)}
                        </View>
                        <View style={{ flex: 1 }}>
                            {this.renderTVShow(14)}
                        </View>
                    </View>
                    <View style={{ flex: 2, flexDirection: 'column' }}>
                        <View style={{ flex: 1 }}>
                            {this.renderTVShow(15)}
                        </View>
                        <View style={{ flex: 1 }}>
                            {this.renderTVShow(16)}
                        </View>
                    </View>

                </View>

                <Text>Week 7</Text>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 2, flexDirection: 'column' }}>
                        <View style={{ flex: 1 }}>
                            {this.renderTVShow(17)}
                        </View>
                        <View style={{ flex: 1 }}>
                            {this.renderTVShow(18)}
                        </View>
                    </View>
                    <View style={{ flex: 2, flexDirection: 'column' }}>
                        <View style={{ flex: 1 }}>
                            {this.renderTVShow(19)}
                        </View>
                        <View style={{ flex: 1 }}>
                            {this.renderTVShow(20)}
                        </View>
                    </View>

                </View>

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
            currentNumber: null,
            fiveShows: this.props.route.params.selectedShows,
            pressed: [false, false, false, false, false, false, false],
            tableHead: ['Week', 'TV Shows'],
            // tableWeeks: [1, 2, 3, 4, 5],
            tableData: [
                [1, null],
                [2, null],
                [3, null],
                [4, null],
                [5, null]
            ]
        }
    }
    showNextButton() {
        const toPass = {
            selectedShows: this.props.route.params.selectedShows,
            week3: this.props.route.params.week3,
            week5: this.props.route.params.week5,
            week2: this.props.route.params.week2
        }
        return (
            <BackButton
                title='Next'
                to='HashTablesScreenEight'
                toTransfer={toPass}
            />
        );
    }

    onWeekClick(i) {
        let arr = this.state.pressed;
        arr[i] = true;
        this.setState(state => {
            return {
                fiveShows: this.props.route.params.selectedShows,
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

    handleNumber = (text) => {
        this.setState({ currentNumber: text })
    }

    render() {
        const state = this.state;
        const element = (i) => (
            <TVShow
                id={this.state.fiveShows[i]}
                imageSource={TVSHOWIMAGETITLES[this.state.fiveShows[i]]}
                onClick={() => 1}
            />
        )
        return (
            <View>
                <Text>
                    Back to your hash table program. Now key in week 5, 7, and 9 below to reveal
                    the TV shows you will be watching in those weeks.
                </Text>

                <View>
                    <TextInput style={styles.input}
                        keyboardType={'numeric'}
                        onChangeText={this.handleNumber} />

                    <View style={styles.container}>
                        <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                            <Row data={state.tableHead} style={styles.head} textStyle={styles.text} />
                            {
                                state.tableData.map((rowData, index) => (
                                    <TableWrapper key={index} style={styles.row}>
                                        {
                                            rowData.map((cellData, cellIndex) => (

                                                <Cell key={cellIndex} data={
                                                    (cellIndex == 1 && index == this.state.currentNumber - 1) ?
                                                        (1 <= this.state.currentNumber <= 5 ? element(this.state.currentNumber - 1) : cellData) : cellData
                                                } />
                                            ))
                                        }
                                    </TableWrapper>
                                ))
                            }
                        </Table>
                    </View>
                </View>

                {/* <Text>Week number</Text> */}

                {/* Weeks and tv shows */}

                {/* <View style={{ flex: 1, flexDirection: "row" }}>
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
                </View> */}

                <Text>
                    You are going to watch more than two shows instead of one on some weeks.
                    Click to add shows for weeks 5, 7, and 9.
                </Text>

                {/* //Prev and Next buttons */}
                <BackButton title='Previous' to='HashTablesScreenSix' />
                {this.showNextButton()}
            </View>
        );
    }
}

class HashTablesScreenEight extends React.Component {
    showNextButton() {
        const toPass = {
            selectedShows: this.props.route.params.selectedShows,
            week3: this.props.route.params.week3,
            week5: this.props.route.params.week5,
            week2: this.props.route.params.week2
        }
        console.log(this.props.route.params.selectedShows);
        return (
            <BackButton
                title='Next'
                to='HashTablesScreenNine'
                toTransfer={toPass}
            />
        );
    }

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
                {this.showNextButton()}
            </View>
        );
    }
}

class HashTablesScreenNine extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fiveShows: this.props.route.params.selectedShows,
            weekThreeShows: this.props.route.params.week3,
            weekFiveShows: this.props.route.params.week5,
            weekTwoShows: this.props.route.params.week2,
            pressed: [false, false, false]
        }
    }

    renderTVShowImageTitle(i) {
        let index = this.state.fiveShows[i];
        return (
            <TVShow
                id={index}
                imageSource={TVSHOWIMAGETITLES[index]}
                onClick={() => {
                    console.log("clicked");
                    return this.onWeekClick(i);
                }}
            />
        )
    }

    onWeekClick(i) {
        if (i == 1 || i == 2 || i == 4) {
            this.setState((state) => {
                let newArr = state.pressed;
                newArr[i / 2 - 1] = true;
                console.log(newArr);
                return {
                    fiveShows: this.props.route.params.selectedShows,
                    weekThreeShows: this.props.route.params.week3,
                    weekFiveShows: this.props.route.params.week5,
                    weekTwoShows: this.props.route.params.week2,
                    pressed: newArr
                }
            });
            console.log(this.state.pressed);

        }
    }

    renderLinkedTVShow(i) {
        // console.log(i + " is being pressed");
        if (this.state.pressed[i / 2 - 1]) {
            let indexOne;
            let indexTwo;
            // let indexThree;

            if (i == 2) {
                indexOne = this.state.weekThreeShows[0]
                indexTwo = this.state.weekThreeShows[1]
                // indexThree = this.state.weekThreeShows[2]
                console.log("This is week 3")
                console.log("value of indexOne" + indexOne)
                console.log("value of indexTwo" + indexTwo)
                // console.log("value of indexThree" + indexThree)

            } else if (i == 4) {
                indexOne = this.state.weekFiveShows[0]
                indexTwo = this.state.weekFiveShows[1]
                // indexThree = this.state.weekFiveShows[2]
                console.log("This is week 5")
                console.log("value of indexOne" + indexOne)
                console.log("value of indexTwo" + indexTwo)
                // console.log("value of indexThree" + indexThree)
            } else if (i == 6) {
                indexOne = this.state.weekTwoShows[0]
                indexTwo = this.state.weekTwoShows[1]
                // indexThree = this.state.weekTwoShows[2]
                console.log("This is week 7")
                console.log("value of indexOne" + indexOne)
                console.log("value of indexTwo" + indexTwo)
                // console.log("value of indexThree" + indexThree)
            } else {
                console.log("Click on only Week 3,5,7!")
                return;
            }
            console.log("SUPPOSED TO RENDER EXTRA STUFF");
            return (
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}><Text>Arrow</Text></View>
                    <View style={{ flex: 1 }}>
                        <TVShow
                            id={indexOne}
                            imageSource={ALLIMAGESOURCES[indexOne]}
                            onClick={() => 1}
                        />
                    </View>
                    <View style={{ flex: 1 }}><Text>Arrow</Text></View>
                    <View style={{ flex: 1 }}>
                        <TVShow
                            id={indexTwo}
                            imageSource={ALLIMAGESOURCES[indexTwo]}
                            onClick={() => 1}
                        />
                    </View>
                    {/* <View style={{ flex: 1 }}><Text>Arrow</Text></View>
                    <View style={{ flex: 1 }}>
                        <TVShow
                            id={indexThree}
                            imageSource={ALLIMAGESOURCES[indexThree]}
                            onClick={() => 1}
                        />
                    </View> */}
                </View>
            );
        } else {
            return;
        }

    }

    nextButton() {
        const toPass = {
            selectedShows: this.state.fiveShows
        };
        return (
            <BackButton
                title='Next'
                to='HashTablesScreenTen'
                toTransfer={toPass}
            />

        );
    }
    render() {
        { console.log("week 3 state = " + this.state.weekThreeShows); }
        { console.log("week 5 state = " + this.state.weekFiveShows); }
        { console.log("week 2 state = " + this.state.weekTwoShows); }
        return (

            <View>
                <Text>
                    We can solve this using chaining. Using the shows you previously selected, here's how we do it.
                </Text>

                {/* Weeks and tv shows */}
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 5, flexDirection: 'column' }}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 1, flexDirection: "column" }}>
                                <View>
                                    <Text>Week</Text>
                                </View>
                            </View>
                            <View style={{ flex: 4, flexDirection: "column" }}>
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
                            <View style={{ flex: 4, flexDirection: 'row' }}>
                                <View>
                                    {this.renderTVShowImageTitle(0)}
                                    {this.renderLinkedTVShow(0)}
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 1, flexDirection: "column" }}>
                                <View>
                                    <Text>2</Text>
                                </View>
                            </View>
                            <View style={{ flex: 4, flexDirection: 'row' }}>
                                <View>
                                    {this.renderTVShowImageTitle(1)}
                                    {this.renderLinkedTVShow(1)}
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 1, flexDirection: "column" }}>
                                <View>
                                    <Text>3</Text>
                                </View>
                            </View>
                            <View style={{ flex: 4, flexDirection: 'row' }}>
                                <View style={{ flex: 1 }}>
                                    {this.renderTVShowImageTitle(2)}
                                </View>
                                <View style={{ flex: 6 }}>
                                    {this.renderLinkedTVShow(2)}
                                </View>

                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 1, flexDirection: "column" }}>
                                <View>
                                    <Text>4</Text>
                                </View>
                            </View>
                            <View style={{ flex: 4, flexDirection: 'row' }}>
                                <View>
                                    {this.renderTVShowImageTitle(3)}
                                    {this.renderLinkedTVShow(3)}
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 1, flexDirection: "column" }}>
                                <View>
                                    <Text>5</Text>
                                </View>
                            </View>
                            <View style={{ flex: 4, flexDirection: 'row' }}>
                                <View style={{ flex: 1 }}>
                                    {this.renderTVShowImageTitle(4)}
                                </View>
                                <View style={{ flex: 6 }}>
                                    {this.renderLinkedTVShow(4)}
                                </View>
                            </View>
                        </View>
                        {/* <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 1, flexDirection: "column" }}>
                                <View>
                                    <Text>6</Text>
                                </View>
                            </View>
                            <View style={{ flex: 4, flexDirection: 'row' }}>
                                <View>
                                    {this.renderTVShowImageTitle(5)}
                                    {this.renderLinkedTVShow(5)}
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 1, flexDirection: "column" }}>
                                <View>
                                    <Text>7</Text>
                                </View>
                            </View>
                            <View style={{ flex: 4, flexDirection: 'row' }}>
                                <View style={{ flex: 1 }}>
                                    {this.renderTVShowImageTitle(6)}
                                </View>
                                <View style={{ flex: 6 }}>
                                    {this.renderLinkedTVShow(6)}
                                </View>
                            </View>
                        </View> */}
                    </View>
                    <View style={{ flex: 1 }}>

                    </View>
                    <View style={{ flex: 1 }}></View>
                </View>

                {/* Prev and Next buttons */}
                <BackButton title='Previous' to='HashTablesScreenEight' />
                {this.nextButton()}
            </View >
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
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 },
    row: { flexDirection: 'row', backgroundColor: '#FFF1C1' }
})


export {
    HashTables, HashTablesScreenTwo, HashTablesScreenThree,
    HashTablesScreenFour, HashTablesScreenFive,
    HashTablesScreenSix, HashTablesScreenSeven, HashTablesScreenEight,
    HashTablesScreenNine, HashTablesScreenTen, HashTablesScreenEleven
};