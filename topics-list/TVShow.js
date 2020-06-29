import * as React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'

class Show extends React.Component{
    constructor(props){
        super(props)
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
        width: 120,
        height: 120,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    }
    
})

export default Show