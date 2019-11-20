import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native'

export default class CalcDisplay extends Component{
    static defaultProps = {
        display: "",
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