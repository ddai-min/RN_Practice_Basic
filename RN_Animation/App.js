/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react'
import { Dimensions, Platform, StyleSheet, View, Text } from 'react-native'
// import AnimOne from './src/Animation01'
// import AnimTwo from './src/Animation02'
import Supertext from './src/utils/supertext'
import DeviceInfo from 'react-native-device-info'

class App extends Component {
  functionA = () => {
    if (Dimensions.get('window').fontScale === 1) {
      console.warn('Good')
    } else {
      console.warn('Error!! The font scale must be 1')
    }
  }

  checkSupport = () => {
    if (Platform.OS === 'ios') {
      if (Platform.Version < 13.4) {
        return false
      }
    } else {
      if (Platform.Version < 27) {
        return false
      }
    }
    return true
  }

  render() {
    // console.warn(Platform.Version)
    // console.warn(Dimensions.get('screen'))
    // console.warn(Dimensions.get('window'))
    console.warn(DeviceInfo.getBrand())
    console.warn(DeviceInfo.isTablet())
    return <View style={styles.container}>{this.functionA()}</View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bbb',
    alignItems: 'center',
    justifyContent: 'center'
  },
  div: {
    ...Platform.select({
      ios: {
        backgroundColor: 'red'
      },
      android: {
        backgroundColor: 'yellow'
      }
    })
  }
})

export default App
