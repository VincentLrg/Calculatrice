import React, {Component} from 'react';

import Container from './component/Container'

import {CalculateProvider} from './context/Context'

export default class App extends Component {
  render(){
    return (
      <CalculateProvider>
        <Container/>
      </CalculateProvider>
    )
  }
}
