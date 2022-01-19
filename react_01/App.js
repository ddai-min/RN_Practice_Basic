/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropsChild from './propsChild';

class App extends Component {

  state = {
    sampleText: 'Hello World',
    sampleBoolean: true,
    sampleNum: 1
  }

  inputText = () => (
    this.state.sampleBoolean ?
      <Text>sampleBoolean is true</Text>
      :
      <Text>sampleBoolean is false</Text>
  )

  changeState = () => {
    if (!this.state.sampleBoolean) {
      this.setState({
        sampleText: 'Text Changed!!!',
        sampleBoolean: true
      })
    } else {
      this.setState({
        sampleText: 'Hello World!!!',
        sampleBoolean: false
      })
    }
  }

  onAdd = () => {
    this.setState(prevState => {
      return {
        sampleNum: prevState.sampleNum + 1
      }
    })
  }

  render() {
    return (
      <View style={styles.background}>
        <PropsChild sText={this.state.sampleText} cState={this.changeState} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App;
