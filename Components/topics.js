import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet } from "react-native";
// import { Button } from '@material-ui/core'
import BackButton from './BackButton';
// import LottieView from 'lottie-react-native';
import WaitingAnimation from "./WaitingAnimation"

class StartAnimation extends React.Component{
    render(){
        return(
            <View>
                <WaitingAnimation to='Topics'/>
            </View>
        )
    }
}

class Topics extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}></View>
    
                <View style={{ flex: 1 }}>
                    <Text style={{ flex: 1, textAlign: 'center', fontSize: 25, fontWeight: 'bold' }}>Topics</Text>
                    <Text style={{ flex: 1, textAlign: 'center', fontSize: 20 }}>Try selecting a topic!</Text>
                </View>
    
                <View style={{ flex: 4, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 4, justifyContent: 'space-around' }}>
                        <BackButton
                            title='Linked List'
                            to='Linked List'
                        />
                        <BackButton
                            title='Binary Search Trees'
                            to='BinarySearchTreesScreenOne'
                        />
                        <BackButton
                            title="Hash Tables"
                            to='HashTables'
                        />
                        <BackButton
                            title="Prim's Algorithm"
                            to='PrimScreenOne'
                        />
                        <BackButton
                            title="Dijkstra's Algorithm"
                            to='DijkstraStart'
                        />
                        <BackButton
                            title='Questions'
                            to='QuestionDisplay'
                        />
    
                        {/* <Button
                            variant="contained"
                            color="primary"
                            size='medium'
                            onClick={() => navigation.navigate('Linked List')}>
                            Linked List
                        </Button>
    
                        <Button
                            variant="contained"
                            color="primary"
                            size='medium'
                            onClick={() => navigation.navigate('BinarySearchTreesScreenOne')}>
                            Binary Search Tree
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            size='medium'
                            onClick={() => navigation.navigate('HashTables')}>
                            Hash Tables
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            size='medium'
                            onClick={() => navigation.navigate("Dijkstra")}>
                            Dijkstra's Algorithm
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            size='medium'
                            onClick={() => navigation.navigate("PrimScreenOne")}>
                            Prim's Algorithm
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            size='medium'
                            onClick={() => navigation.navigate("QuestionDisplay")}>
                            Practice Questions
                        </Button> */}
                    </View>
                    <View style={{ flex: 1 }}></View>
                </View>
    
                <View style={{ flex: 1 }}></View>
            </View>
        );
    }
}

export {
    Topics, StartAnimation
}