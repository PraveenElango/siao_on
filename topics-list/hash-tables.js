import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Dimensions, Image } from "react-native";
import BackButton from '../Components/BackButton';
import MoneyHeist from '../assets/hashTableImages/moneyheist.png'
import BreakingBad from '../assets/hashTableImages/breakingbad.jpg'
import Narcos from '../assets/hashTableImages/narcos.jpg'
import GameOfThrones from '../assets/hashTableImages/gameofthrones.jpg'
import PeakyBlinders from '../assets/hashTableImages/peakyblinders.jpg'
import TheOffice from '../assets/hashTableImages/theoffice.jpg'
import Sherlock from '../assets/hashTableImages/sherlock.jpg'
import Friends from '../assets/hashTableImages/friends.jpg'
import StrangerThings from '../assets/hashTableImages/strangerthings.jpg'
import BrooklynNineNine from '../assets/hashTableImages/brooklyn99.jpg'
import PrisonBreak from '../assets/hashTableImages/prisonbreak.jpg'
import BlackMirror from '../assets/hashTableImages/blackmirror.jpg'
import BetterCallSaul from '../assets/hashTableImages/bettercallsaul.jpg'
import BigBangTheory from '../assets/hashTableImages/bigbangtheory.jpg'
import GreysAnatomy from '../assets/hashTableImages/greysanatomy.jpg'
import TheKing from '../assets/hashTableImages/theking.jpg'
import SacredGames from '../assets/hashTableImages/sacredgames.jpg'
import Chernobyl from '../assets/hashTableImages/chernobyl.jpg'
import SpaceForce from '../assets/hashTableImages/spaceforce.jpg'
import DirtyMoney from '../assets/hashTableImages/dirtymoney.jpg'
import TheSinner from '../assets/hashTableImages/thesinner.jpg'
import TVShow from './TVShow'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { human } from 'react-native-typography';
import ModalEnhanced from '../Components/ModalEnhanced';

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
                onClick={() => {
                    this.showIsSelected(i);
                }}
                opacity={this.state.fiveShows.indexOf(i) > -1
                    ? 0.4
                    : 1}
                type='1'
            />
        )
    }

    renderBlock() {
        const deviceDisplay = Dimensions.get("window");
        const wid = deviceDisplay.width;

        // if (wid < 500) {
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
        // } else {
        //     return (
        //         <View style={{ flex: 20, flexDirection: 'row' }}>
        //             <View style={{ flex: 2 }}></View>

        //             <View style={{ flex: 3 }}>
        //                 {/* TOP ROW */}
        //                 <View style={{ flex: 1, flexDirection: 'row' }}>
        //                     <View style={{ flex: 1, flexDirection: 'column' }}>
        //                         {this.renderTVShow(0)}
        //                         <View style={{ flex: 1, alignItems: "center" }}>
        //                             <Text>Money Heist</Text>
        //                         </View>
        //                     </View>
        //                     <View style={{ flex: 1, flexDirection: 'column' }}>
        //                         {this.renderTVShow(1)}
        //                         <View style={{ flex: 1, alignItems: "center" }}>
        //                             <Text>Breaking Bad</Text>
        //                         </View>
        //                     </View>
        //                     <View style={{ flex: 1, flexDirection: 'column' }}>
        //                         {this.renderTVShow(2)}
        //                         <View style={{ flex: 1, alignItems: "center" }}>
        //                             <Text>Narcos</Text>
        //                         </View>
        //                     </View>
        //                 </View>

        //                 {/* SECOND ROW*/}
        //                 <View style={{ flex: 1, flexDirection: 'row' }}>
        //                     <View style={{ flex: 2, flexDirection: 'column' }}>
        //                         {this.renderTVShow(3)}
        //                         <View style={{ flex: 1, alignItems: "center" }}>
        //                             <Text>Stranger Things</Text>
        //                         </View>
        //                     </View>
        //                     <View style={{ flex: 2, flexDirection: 'column' }}>
        //                         {this.renderTVShow(4)}
        //                         <View style={{ flex: 1, alignItems: "center" }}>
        //                             <Text>Sherlock</Text>
        //                         </View>
        //                     </View>
        //                     <View style={{ flex: 2, flexDirection: 'column' }}>
        //                         {this.renderTVShow(5)}
        //                         <View style={{ flex: 1, alignItems: "center" }}>
        //                             <Text>Peaky Blinders</Text>
        //                         </View>
        //                     </View>
        //                 </View>

        //                 {/* THIRD ROW */}
        //                 <View style={{ flex: 1, flexDirection: 'row' }}>
        //                     <View style={{ flex: 2, flexDirection: 'column' }}>
        //                         {this.renderTVShow(6)}
        //                         <View style={{ flex: 1, alignItems: "center" }}>
        //                             <Text>The Office</Text>
        //                         </View>
        //                     </View>
        //                     <View style={{ flex: 2, flexDirection: 'column' }}>
        //                         {this.renderTVShow(7)}
        //                         <View style={{ flex: 1, alignItems: "center" }}>
        //                             <Text>Game of Thrones</Text>
        //                         </View>
        //                     </View>
        //                     <View style={{ flex: 2, flexDirection: 'column' }}>
        //                         {this.renderTVShow(8)}
        //                         <View style={{ flex: 1, alignItems: "center" }}>
        //                             <Text>Friends</Text>
        //                         </View>
        //                     </View>
        //                 </View>
        //             </View>

        //             <View style={{ flex: 2 }}></View>
        //         </View>
        //     )
        // }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}></View>

                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={[human.largeTitle, { textAlign: 'center' }]}>Hash Tables</Text>
                </View>

                <View style={{ flex: 0.25 }}></View>

                <View style={{ flex: 2, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 12 }}>
                        <View style={{ flex: 2 }}></View>
                        <Text style={human.footnote}>Congratulations! You've finished your finals and it's now the summer break. You have just gotten your Netflix subscription.</Text>
                        <Text style={human.footnote}>Choose 5 favourite shows to get started.</Text>
                        <View style={{ flex: 1 }}></View>
                    </View>
                    <View style={{ flex: 1 }}></View>
                </View>

                <View style={{ flex: 0.75 }}></View>

                {/* TV Shows */}
                {this.renderBlock()}

                {/* Prev and Next buttons */}
                <View style={{ flex: 1.8, flexDirection: 'row', alignItems: 'center' }}>
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
                type='2'
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
            <View style={{ flex: 1 }}>

                <View style={{ flex: 1.2, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 14 }}>
                        <View style={{ flex: 2 }}></View>
                        <Text style={human.body}>Because you're ambitious, you have decided to binge watch the shows at a rate of one show per week.</Text>
                        <Text style={human.body}>Here's how your planned schedule looks based on the order you have selected the shows:</Text>
                        <View style={{ flex: 1 }}></View>
                    </View>
                    <View style={{ flex: 1 }}></View>
                </View>


                <View style={{ flex: 3 }}>

                    <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                        <Row data={state.tableHead} style={styles.head} textStyle={styles.text} />
                        {
                            state.tableData.map((rowData, index) => (
                                <TableWrapper key={index} style={{ height: 85, flexDirection: 'row', backgroundColor: '#FFF1C1', justifyContent: 'center' }}>
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
                <View style={{ flex: 0.5, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 2 }}>
                        <BackButton title='Previous' to='HashTables' />
                    </View>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 2 }}>
                        {this.nextButton()}
                    </View>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                </View>



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
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 14 }}>
                        <View style={{ flex: 1 }}></View>
                        <Text style={human.body}>You stored your schedule on your computer and when you went back to check your schedule, your computer tries to be funny with you.</Text>
                        <Text style={human.body}>You can't see the shows you planned for each week anymore....</Text>
                        <View style={{ flex: 1 }}></View>
                    </View>
                    <View style={{ flex: 1 }}></View>
                </View>


                {/* Weeks and tv shows */}

                <View style={{ flex: 2 }}>
                    <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                        <Row data={state.tableHead} style={styles.head} textStyle={styles.text} />
                        {
                            state.tableData.map((rowData, index) => (
                                <TableWrapper key={index} style={{ height: 70, flexDirection: 'row', backgroundColor: '#FFF1C1' }}>
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
                {/* Prev and Next buttons */}
                <View style={{ flex: 0.5, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 2 }}>
                        <BackButton title='Previous' to='HashTablesScreenTwo' />
                    </View>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 2 }}>
                        {this.nextButton()}
                    </View>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                </View>


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
                type='2'
                imageSource={TVSHOWIMAGETITLES[this.state.fiveShows[i]]}
                onClick={() => 1}
            />
        )
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1.7, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 14 }}>
                        <View style={{ flex: 1 }}></View>
                        <Text style={human.body}>You really need to know what to binge watch each week because you forgot.
                        Your computer thankfully let you view the show you were supposed to
                    watch each week once you input the week into the following box.</Text>
                    </View>
                    <View style={{ flex: 1 }}></View>
                </View>


                <View style={{ flex: 0.75, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 1 }} />
                        <Text style={{ flex: 1, textAlign: 'right' }}>Input a Number:</Text>
                        <View style={{ flex: 1 }} />
                    </View>
                    <View style={{ flex: 2 }}>
                        <TextInput style={styles.input}
                            keyboardType={'numeric'}
                            onChangeText={this.handleNumber} />
                    </View>
                </View>

                <View style={{ flex: 4, backgroundColor: 'pink' }}>
                    <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                        <Row data={state.tableHead} style={styles.head} textStyle={styles.text} />
                        {
                            state.tableData.map((rowData, index) => (
                                <TableWrapper key={index} style={{ height: 70, flexDirection: 'row', backgroundColor: '#FFF1C1' }}>
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

                {/* Prev and Next buttons */}
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 2 }}>
                        <BackButton title='Previous' to='HashTablesScreenThree' />
                    </View>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 2 }}>
                        {this.nextButton()}
                    </View>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                </View>
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
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 14 }}>
                        <View style={{ flex: 1 }}></View>
                        <Text style={human.body}>When your computer helped you to find the TV to show to watch each week
                        based on the week number you gave as input, what it did was to pass the
                    week into a hash function to return your TV show.</Text>
                    </View>
                    <View style={{ flex: 1 }}></View>
                </View>

                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 14 }}>
                        <View style={{ flex: 1 }}></View>
                        <View style={{ flex: 3 }}>
                            <Text style={human.body}>The hash function:</Text>
                            <Text></Text>
                            <Text style={[human.body, { textAlign: 'center' }]}>h(key) = values[key]</Text>
                            <Text style={[human.body, { textAlign: 'center' }]}>h(week) = TV_shows[week]</Text>
                        </View>
                        {/* <View style={{ flex: 1 }}></View> */}
                    </View>
                    <View style={{ flex: 1 }}></View>
                </View>

                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 14 }}>
                        <View style={{ flex: 1 }}></View>
                        <View style={{ flex: 3 }}>
                            <Text style={human.body}>Your week acts as a key. Your TV show acts as the value.</Text>
                            <Text style={human.body}>Together, we call this a key-value pair.  A key-value pair can be stored in an hash table (array) where you can extract a value based on it</Text>
                            <Text style={human.body}>This is known as Linear Probing.</Text>
                        </View>
                        <View style={{ flex: 1 }}></View>
                    </View>
                    <View style={{ flex: 1 }}></View>
                </View>



                {/* Prev and Next buttons */}
                <View style={{ flex: 0.5, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 2 }}>
                        <BackButton title='Previous' to='HashTablesScreenFour' />
                    </View>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 2 }}>
                        {this.nextButton()}
                    </View>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                </View>


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
            showAlert: false,
            alertText: ""
        }
    }

    showNextButton() {
        if (this.state.weekThreeShows.length == 2 &&
            this.state.weekFiveShows.length == 2 &&
            this.state.weekTwoShows.length == 2) {
            const toPass = {
                selectedShows: this.state.fiveShows,
                week2: this.state.weekTwoShows,
                week3: this.state.weekThreeShows,
                week5: this.state.weekFiveShows,
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

    renderAlert() {
        return (
            <ModalEnhanced
                showAlert={this.state.showAlert}
                closeAlert={() => this.setState({ showAlert: false })}
                text={this.state.alertText}
            />
        )
    }

    showIsSelected = (id) => {
        if (
            this.state.weekThreeShows.indexOf(id) > -1 ||
            this.state.weekFiveShows.indexOf(id) > -1 ||
            this.state.weekTwoShows.indexOf(id) > -1) {
            this.setState({
                alertText: "Show has been added already! Please choose another show",
                showAlert: true
            });
            return;
        }
        if (id >= 9 && id <= 12) {
            if (this.state.weekTwoShows.length >= 2) {
                this.setState({
                    alertText: "Cannot add more than 2 shows to week 2! Choose a show from a different week!",
                    showAlert: true
                });
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
        } else if (id <= 16) {
            if (this.state.weekThreeShows.length >= 2) {
                this.setState({
                    alertText: "Cannot add more than 2 shows to week 3! Choose a show from a different week!",
                    showAlert: true
                });
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
        } else if (id >= 17) {
            if (this.state.weekFiveShows.length >= 2) {
                this.setState({
                    alertText: "Cannot add more than 2 shows to week 5! Choose a show from a different week!",
                    showAlert: true
                });
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
                opacity={this.state.weekTwoShows.indexOf(i) > -1 || this.state.weekThreeShows.indexOf(i) > -1 || this.state.weekFiveShows.indexOf(i) > -1
                    ? 0.4
                    : 1}
                type='1'
            />
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                {this.renderAlert()}
                <View style={{ flex: 2.4, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 14 }}>
                        <View style={{ flex: 1 }}></View>
                        <View style={{ flex: 5 }}>
                            <Text style={human.body}>Now the COVID19 lockdown means that your summer internship also got cancelled :(</Text>
                            <Text style={human.body}>You decide to put the time to good use by..... WATCHING MORE TV SHOWS!!</Text>
                            <Text style={human.body}> You are going to watch more than two shows instead of one on some weeks.
                        Click to add shows for weeks 2, 3, and 5.</Text>
                        </View>
                        <View style={{ flex: 2 }}></View>
                    </View>
                    <View style={{ flex: 1 }}></View>
                </View>

                <View style={{ flex: 5 }}>
                    {/* Weeks and tv shows */}

                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            {this.renderTVShow(9)}
                        </View>
                        <View style={{ flex: 1 }}>
                            {this.renderTVShow(10)}
                        </View>

                        <View style={{ flex: 1 }}>
                            {this.renderTVShow(11)}
                        </View>
                        <View style={{ flex: 1 }}>
                            {this.renderTVShow(12)}
                        </View>
                    </View>
                    <Text style={{ flex: 0.2, textAlign: 'center', fontWeight: 'bold' }}>Week 2</Text>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            {this.renderTVShow(13)}
                        </View>
                        <View style={{ flex: 1 }}>
                            {this.renderTVShow(14)}
                        </View>

                        <View style={{ flex: 1 }}>
                            {this.renderTVShow(15)}
                        </View>
                        <View style={{ flex: 1 }}>
                            {this.renderTVShow(16)}
                        </View>
                    </View>
                    <Text style={{ flex: 0.2, textAlign: 'center', fontWeight: 'bold' }}>Week 3</Text>

                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            {this.renderTVShow(17)}
                        </View>
                        <View style={{ flex: 1 }}>
                            {this.renderTVShow(18)}
                        </View>

                        <View style={{ flex: 1 }}>
                            {this.renderTVShow(19)}
                        </View>
                        <View style={{ flex: 1 }}>
                            {this.renderTVShow(20)}
                        </View>
                    </View>
                    <Text style={{ flex: 0.2, textAlign: 'center', fontWeight: 'bold' }}>Week 5</Text>

                </View>

                {/* Prev and Next buttons */}
                <View style={{ flex: 0.5, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 2 }}>
                        <BackButton title='Previous' to='HashTablesScreenFive' />
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
            <View style={{ flex: 1 }}>

                <View style={{ flex: 1.5, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 14 }}>
                        <View style={{ flex: 1 }}></View>
                        <Text style={human.body}>Back to your hash table program. Now key in week 2, 3, and 5 below to reveal
                    the TV shows you will be watching in those weeks.</Text>
                    </View>
                    <View style={{ flex: 1 }}></View>
                </View>


                <View style={{ flex: 0.75, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 1 }} />
                        <Text style={{ flex: 1, textAlign: 'right' }}>Input a Number:</Text>
                        <View style={{ flex: 1 }} />
                    </View>
                    <View style={{ flex: 2 }}>
                        <TextInput style={styles.input}
                            keyboardType={'numeric'}
                            onChangeText={this.handleNumber} />
                    </View>
                </View>

                <View style={{ flex: 4 }}>
                    <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                        <Row data={state.tableHead} style={styles.head} textStyle={styles.text} />
                        {
                            state.tableData.map((rowData, index) => (
                                <TableWrapper key={index} style={{ height: 70, flexDirection: 'row', backgroundColor: '#FFF1C1' }}>
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

                {/* Prev and Next buttons */}
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 2 }}>
                        <BackButton title='Previous' to='HashTablesScreenSix' />
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

class HashTablesScreenEight extends React.Component {
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
                to='HashTablesScreenNine'
                toTransfer={toPass}
            />
        );
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 14 }}>
                        <View style={{ flex: 1 }}></View>
                        <Text style={human.body}>You would have noticed that the shows that you added to watch
                    in weeks 2, 3, and 5 were not updated. What is going on?</Text>
                    </View>
                    <View style={{ flex: 1 }}></View>
                </View>

                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 14 }}>
                        <View style={{ flex: 1 }}></View>
                        <Text style={human.body}>Since the hash table only had space for one entry per week, the added TV shows
                    did not have space to update themselves in the hash table.</Text>
                        <Text style={human.body}>This phenomenon is known as collision</Text>
                    </View>
                    <View style={{ flex: 1 }}></View>
                </View>


                <View style={{ flex: 3, justifyContent: 'center' }}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 9, flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}></View>
                        <View style={{ flex: 20 }}>
                            <Image
                                style={{
                                    flex: 1,
                                    width: undefined,
                                    height: undefined,
                                }}
                                source={require('../assets/hashTableImages/collide.png')} />
                        </View>
                        <View style={{ flex: 1 }}></View>
                    </View>
                    <View style={{ flex: 1 }}></View>

                </View>

                {/* Prev and Next buttons */}
                <View style={{ flex: 0.5, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 2 }}>
                        <BackButton title='Previous' to='HashTablesScreenSeven' />
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

class HashTablesScreenNine extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fiveShows: this.props.route.params.selectedShows,
            weekThreeShows: this.props.route.params.week3,
            weekFiveShows: this.props.route.params.week5,
            weekTwoShows: this.props.route.params.week2,
            pressed: [false, false, false, false, false]
        }
    }

    renderTVShowImageTitle(i) {
        let index = this.state.fiveShows[i];
        return (
            <TVShow
                imageSource={TVSHOWIMAGETITLES[index]}
                onClick={() => {
                    this.onWeekClick(i);
                }}
                type='3'
            />
        )
    }

    onWeekClick(i) {
        if (i == 1 || i == 2 || i == 4) {
            this.setState((state) => {
                let newArr = state.pressed.slice();
                newArr[i] = true;
                return {
                    fiveShows: this.props.route.params.selectedShows,
                    weekTwoShows: this.props.route.params.week2,
                    weekThreeShows: this.props.route.params.week3,
                    weekFiveShows: this.props.route.params.week5,
                    pressed: newArr
                }
            });
            console.log(this.state.pressed);

        }
    }

    renderLinkedTVShow(i) {
        // console.log(i + " is being pressed");
        if (this.state.pressed[i]) {
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
            } else if (i == 1) {
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
                            type='3'
                        />
                    </View>
                    <View style={{ flex: 1 }}><Text>Arrow</Text></View>
                    <View style={{ flex: 1 }}>
                        <TVShow
                            id={indexTwo}
                            imageSource={ALLIMAGESOURCES[indexTwo]}
                            onClick={() => 1}
                            type='3'
                        />
                    </View>
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
        return (

            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 14 }}>
                        <View style={{ flex: 1 }}></View>
                        <Text style={human.body}>We can solve this using chaining. Using the shows you previously selected, here's how we do it.</Text>
                    </View>
                    <View style={{ flex: 1 }}></View>
                </View>

                {/* Weeks and tv shows */}
                <View style={{ flex: 5, flexDirection: 'row' }}>
                    {/* <View style={{ flex: 1 }}></View */}
                    <View style={{ flex: 5, flexDirection: 'column' }}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 1, flexDirection: "column" }}>
                                <Text>Week</Text>
                            </View>
                            <View style={{ flex: 7, flexDirection: "column" }}>
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
                            <View style={{ flex: 7, flexDirection: 'row' }}>
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
                            <View style={{ flex: 7, flexDirection: 'row' }}>
                                <View style={{ flex: 1 }}>
                                    {this.renderTVShowImageTitle(1)}
                                </View>
                                <View style={{ flex: 6 }}>
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
                            <View style={{ flex: 7, flexDirection: 'row' }}>
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
                            <View style={{ flex: 7, flexDirection: 'row' }}>
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
                            <View style={{ flex: 7, flexDirection: 'row' }}>
                                <View style={{ flex: 1 }}>
                                    {this.renderTVShowImageTitle(4)}
                                </View>
                                <View style={{ flex: 6 }}>
                                    {this.renderLinkedTVShow(4)}
                                </View>
                            </View>
                        </View>
                    </View>

                </View>

                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 14 }}>
                        <View style={{ flex: 1 }}></View>
                        <Text style={human.body}>Each element of the hash table now acts as a linked list</Text>
                        <Text style={human.body}>This allows us to store more TV shows in each week</Text>
                    </View>
                    <View style={{ flex: 1 }}></View>
                </View>

                {/* Prev and Next buttons */}
                <View style={{ flex: 0.5, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 2 }}>
                        <BackButton title='Previous' to='HashTablesScreenEight' />
                    </View>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                    <View style={{ flex: 2 }}>
                        {this.nextButton()}
                    </View>
                    <View style={{ flex: 1 }}>
                        {/* BLANK */}
                    </View>
                </View>
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

                {/* Prev and Next buttons */}
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
    container: { flex: 3, },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 },
    row: { height: 85, flexDirection: 'row', backgroundColor: '#FFF1C1' }
})


export {
    HashTables, HashTablesScreenTwo, HashTablesScreenThree,
    HashTablesScreenFour, HashTablesScreenFive,
    HashTablesScreenSix, HashTablesScreenSeven, HashTablesScreenEight,
    HashTablesScreenNine, HashTablesScreenTen, HashTablesScreenEleven
};