import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native'

export default class CalcDisplay extends Component{
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.display}>{this.props.display}</Text>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container: { },
    display: { fontSize: 80, color: "white", textAlign: "right" },
})