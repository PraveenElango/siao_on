import * as React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'

class Show extends React.Component{
    constructor(props){
        super(props)
        // this.state={
        //     selected: false
        // }
    }
    render(){
        return(
            <TouchableOpacity
                onClick = {()=> this.props.onClick()}>
               <Image 
                    style = {styles.show}
                    source={this.props.imageSource}/>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    show: {
        width: 50,
        height: 50
    }
    
})

export default Show