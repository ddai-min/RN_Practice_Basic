/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react'
import {
  Platform,
  PermissionsAndroid,
  StyleSheet,
  View,
  Text,
  Image,
  Button
} from 'react-native'
import ImagePicker from 'react-native-image-picker'
import Contacts from 'react-native-contacts'

class App extends Component {
  async requestContactPermission() {
    if (Platform.OS === 'ios') {
      console.warn('iOS')
      return true
    } else {
      console.warn('Android')

      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS
      ])

      if (
        granted['android.permission.READ_CONTACTS'] ===
          PermissionsAndroid.RESULTS.GRANTED &&
        granted['android.permission.WRITE_CONTACTS'] ===
          PermissionsAndroid.RESULTS.GRANTED
      ) {
        return true
      } else {
        return false
      }
    }
  }

  getContacts = () => {
    this.requestContactPermission().then(didGetPermission => {
      if (didGetPermission) {
        Contacts.getAll()
          .then(contacts => {
            console.warn(contacts)
          })
          .catch(err => {
            console.error(err)
            throw err
          })
      } else {
        alert('no permission')
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Load Contacts" onPress={() => this.getContacts()} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e4ab26'
  },
  avatar: {
    width: '100%',
    height: 400
  }
})

export default App
