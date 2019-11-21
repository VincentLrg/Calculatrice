import React, {Component, Consumer} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CalcsButton from './CalcsButton'
import CalcDisplay from './CalcDisplay'

import {CalculateContext} from '../context/Context';

export default class Container extends Component {
    constructor(props){
        super(props);
    }

    render(){
      return (
        <View style={styles.container}>
            <View style={styles.display}>
              <CalculateContext.Consumer>
                {({display})=>
                    <CalcDisplay display={display} />
                }
              </CalculateContext.Consumer>
            </View>

            <CalculateContext.Consumer>
              {({add,operator,equal,clear,del})=>
                <View style={styles.rowContainer}>
                  <View style={styles.row}>
                    <CalcsButton onPress={()=>clear()} title="CLEAR" color="#758CB3" backgroundColor="#D4E4FF" style={{flex:2}}/>
                    <CalcsButton onPress={()=>del()} title="DEL" color="#758CB3" backgroundColor="#D4E4FF"/>
                    <CalcsButton onPress={()=>operator("/")} title="/" backgroundColor="#FFC4BA"/>
                  </View>
                  <View style={styles.row}>
                    <CalcsButton onPress={()=>add("7")} title="7"/>
                    <CalcsButton onPress={()=>add("8")} title="8"/>
                    <CalcsButton onPress={()=>add("9")} title="9"/>
                    <CalcsButton onPress={()=>operator("*")} title="x" backgroundColor="#FFC4BA"/>
                  </View>
                  <View style={styles.row}>
                    <CalcsButton onPress={()=>add("4")} title="4"/>
                    <CalcsButton onPress={()=>add("5")} title="5"/>
                    <CalcsButton onPress={()=>add("6")} title="6"/>
                    <CalcsButton onPress={()=>operator("-")} title="-" backgroundColor="#FFC4BA"/>
                  </View>
                  <View style={styles.row}>
                    <CalcsButton onPress={()=>add("1")} title="1"/>
                    <CalcsButton onPress={()=>add("2")} title="2"/>
                    <CalcsButton onPress={()=>add("3")} title="3"/>
                    <CalcsButton onPress={()=>operator("+")} title="+" backgroundColor="#FFC4BA"/>
                  </View>
                  <View style={styles.row}>
                    <CalcsButton onPress={()=>add("0")} title="0" style={{flex:2}}/>
                    <CalcsButton onPress={()=>add(".")} title="."/>
                    <CalcsButton onPress={()=>equal()} title="=" backgroundColor="#FFC4BA"/>
                  </View>
                </View>
              }
            </CalculateContext.Consumer>
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 35,
      backgroundColor: "black",
    },
    display: {
      flex: 1,
      justifyContent: "flex-end"
    },
    rowContainer: {
      paddingBottom:20,
    },
    row: {
      flexDirection:"row", justifyContent:"space-between"
    },
  });