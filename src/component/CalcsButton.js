import React, {Component} from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';


export default class CalcsButton extends Component{
    static defaultProps = {
        onPress: function(){},
        title:"",
        color:"white",
        backgroundColor:"black",
        style: { },
    }
    constructor(props){
        super(props)
    }
    render(){
        let bc = this.props.backgroundColor
        let color= this.props.color
        return(
            <TouchableOpacity onPress={this.props.onPress} style={[styles.container, {backgroundColor: bc}, {...this.props.style}]}>
                <Text style={[styles.text, {color: color}]}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: { 
        alignItems: "center", justifyContent: "center", margin: 5,
        width: 80, height: 80, borderRadius: 40 },
    text: {fontSize: 30, fontWeight:"bold"},
})