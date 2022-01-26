/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react'
import { StyleSheet, ScrollView, Image, View, Text, Button } from 'react-native'
import Logo from './assets/pics/home_icon.png'
import { CommonActions } from '@react-navigation/native'

class SideDrawer extends Component {
  navigateToScreen = route => () => {
    this.props.navigation.dispatch(
      CommonActions.navigate({
        name: route,
        params: {}
      })
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <View style={styles.imageContainer}>
              <Image source={Logo} style={{ width: 40, height: 40 }} />
            </View>
            <Text style={styles.sectionHeading}>Section 1</Text>
            <View style={styles.navSectionStyle}>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen('Home')}>
                Home
              </Text>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen('User')}>
                User
              </Text>
              <Text
                style={styles.navItemStyle}
                onPress={() => alert('Help Window')}>
                Help
              </Text>
              <Text
                style={styles.navItemStyle}
                onPress={() => alert('Info Window')}>
                Info
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={{ paddingLeft: 10, paddingBottom: 30 }}>
          <Text>Copyright @ Wintho, 2020.</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 80
  },
  imageContainer: {
    alignItems: 'center',
    padding: 50
  },
  sectionHeading: {
    color: '#fff',
    backgroundColor: '#ef9de4',
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontWeight: 'bold'
  },
  navSectionStyle: {
    backgroundColor: '#04b6ff'
  },
  navItemStyle: {
    padding: 10,
    color: '#fff'
  }
})

export default SideDrawer
