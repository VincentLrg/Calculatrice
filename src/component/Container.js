import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CalcsButton from './CalcsButton'
import CalcDisplay from './CalcDisplay'

const initialState = {display: "0"}

export default class Container extends Component {
    constructor(props){
        super(props);
        this.state={...initialState}
    }
    addDigit = (number) => {
      if(this.state.display.charAt(0) == '0')
      {
        this.setState({
          display: this.state.display.slice(1)
        })
      }
      this.setState({
        display: this.state.display+number
      })
    }
    operator = (operator)=>{
      this.setState({
        display: this.state.display.concat('', operator)
      })
    }
    equal = ()=> {
      this.setState({
        display: eval(this.state.display)
      })
    }
    del = ()=>{
      if(this.state.display.length>1)
      {
        this.setState({
          display: this.state.display.slice(0, -1)
        })
      }
    }
    clear = ()=>{
      this.setState({...initialState})
    }

    render(){
      return (
        <View style={styles.container}>
            <View style={styles.display}>
              <CalcDisplay display={this.state.display} />
            </View>

            <View style={styles.rowContainer}>
              <View style={styles.row}>
                <CalcsButton onPress={()=>this.clear()} title="CLEAR" color="#758CB3" backgroundColor="#D4E4FF" style={{flex:2}}/>
                <CalcsButton onPress={()=>this.del()} title="DEL" color="#758CB3" backgroundColor="#D4E4FF"/>
                <CalcsButton onPress={()=>this.operator("/")} title="/" color="white" backgroundColor="#FFC4BA"/>
              </View>
              <View style={styles.row}>
                <CalcsButton onPress={()=>this.addDigit("7")}title="7" color="white" backgroundColor="#758CB3"/>
                <CalcsButton onPress={()=>this.addDigit("8")} title="8" color="white" backgroundColor="#758CB3"/>
                <CalcsButton onPress={()=>this.addDigit("9")} title="9" color="white" backgroundColor="#758CB3"/>
                <CalcsButton onPress={()=>this.operator("*")}  title="x" color="white" backgroundColor="#FFC4BA"/>
              </View>
              <View style={styles.row}>
                <CalcsButton onPress={()=>this.addDigit("4")} title="4" color="white" backgroundColor="#758CB3"/>
                <CalcsButton onPress={()=>this.addDigit("5")} title="5" color="white" backgroundColor="#758CB3"/>
                <CalcsButton onPress={()=>this.addDigit("6")} title="6" color="white" backgroundColor="#758CB3"/>
                <CalcsButton onPress={()=>this.operator("-")} title="-" color="white" backgroundColor="#FFC4BA"/>
              </View>
              <View style={styles.row}>
                <CalcsButton onPress={()=>this.addDigit("1")} title="1" color="white" backgroundColor="#758CB3"/>
                <CalcsButton onPress={()=>this.addDigit("2")} title="2" color="white" backgroundColor="#758CB3"/>
                <CalcsButton onPress={()=>this.addDigit("3")} title="3" color="white" backgroundColor="#758CB3"/>
                <CalcsButton onPress={()=>this.operator("+")}  title="+" color="white" backgroundColor="#FFC4BA"/>
              </View>
              <View style={styles.row}>
                <CalcsButton onPress={()=>this.addDigit("0")} title="0" color="white" backgroundColor="#758CB3" style={{flex:2}}/>
                <CalcsButton onPress={()=>this.addDigit(".")} title="." color="white" backgroundColor="#758CB3"/>
                <CalcsButton onPress={()=>this.equal()} title="=" color="white" backgroundColor="#FFC4BA"/>
              </View>
            </View>
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