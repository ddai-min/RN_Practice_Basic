/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
// import AnimOne from './src/Animation01'
// import AnimTwo from './src/Animation02'
import Supertext from './src/utils/supertext'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Supertext style={{ backgroundColor: 'red' }}>
          This is my template!!!
        </Supertext>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bbb',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App
