import React, { Component, createContext} from 'react';

const initialState = {
    display: "0",
};

export const CalculateContext = createContext();

export class CalculateProvider extends Component{
    // création du reducer et des deux proprietes state et dispatch (logique algo)
    constructor(props){
        super(props)
        this.state={
            ...initialState,
            add : (number)=>{
                this.AddDigit(number)
            },
            operator : (operator)=>{
                this.Operator(operator)
            },
            equal : ()=>{
                this.Equal()
            },
            del : ()=>{
                this.Delete()
            },
            clear : ()=>{
                this.Clear()
            }
        }
    }
    AddDigit = (number) => {
        if(this.state.display.charAt(0) == '0')
        {
            this.setState(prevState=>({
                display: prevState.display.slice(1)
            }))
        }
        this.setState(prevState=>({
            display: prevState.display+number
        }))
    }
    Operator = (operator)=>{
        this.setState(prevState=>({
            display: prevState.display.concat('', operator)
        }))
    }
    Equal = ()=> {
        this.setState(prevState=>({
            display: eval(prevState.display).toString()
        }))
    }
    Delete = ()=>{
        if(this.state.display.length>1)
        {
            this.setState(prevState=>({
                display: prevState.display.slice(0, -1)
            }))
        }
        if(this.state.display.length==1)
        {
            this.setState({
                ...initialState
            })
        }
    }
    Clear = ()=>{
        this.setState({
            ...initialState
        })
    }
    // Je passe un tableau plus simple à destructurer par la suite
    render(){
        return (
            <CalculateContext.Provider value={this.state}>
                {this.props.children}
            </CalculateContext.Provider>
        )
    }
}