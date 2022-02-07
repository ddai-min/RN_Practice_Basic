/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import AnimOne from './src/Animation01'
import AnimTwo from './src/Animation02'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AnimTwo />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50
  }
})

export default App
