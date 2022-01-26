/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

class DrawerUserScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <Text>User Screen</Text>
        <Button
          title="To Home Screen"
          onPress={() => {
            this.props.navigation.navigate('Home')
          }}
        />
      </View>
    )
  }
}

export default DrawerUserScreen
