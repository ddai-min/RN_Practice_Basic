/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'
import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer'
import HomeScreen from './src/home'
import UserScreen from './src/user'
import LogoTitle from './src/logo'
import DrawerHomeScreen from './src/home_drawer'
import DrawerUserScreen from './src/user_drawer'
import TabHomeScreen from './src/home_tab'
import TabUserScreen from './src/user_tab'
import TabMessageScreen from './src/message_tab'
import PictogramHome from './src/assets/pics/home_icon.png'
import SideDrawer from './src/my_drawer'
import Icon from 'react-native-vector-icons/dist/Ionicons'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator()

const TabBarIcon = (focused, name) => {
  let iconImagePath
  let iconName, iconSize

  if (name === 'Home') {
    iconName = 'home-outline'
    // iconImagePath = require('./src/assets/pics/home_icon.png')
  } else if (name === 'User') {
    iconName = 'people-outline'
    // iconImagePath = require('./src/assets/pics/user.png')
  } else if (name === 'Message') {
    iconName = 'mail-outline'
    // iconImagePath = require('./src/assets/pics/message.png')
  }

  iconSize = focused ? 30 : 20
  return <Icon name={iconName} size={iconSize} />
}

// const CustomDrawerContent = props => {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//       <DrawerItem
//         label="Help"
//         onPress={() => Linking.openURL('http://www.google.com')}
//         icon={() => <LogoTitle />}
//       />
//       <DrawerItem label="Info" onPress={() => alert('Info Window')} />
//     </DrawerContentScrollView>
//   )
// }

class App extends Component {
  // logoTitle = () => {
  //   return (
  //     <Image
  //       style={{ width: 40, height: 40 }}
  //       source={require('./src/assets/pics/home_icon.png')}
  //     />
  //   )
  // }

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={
            (({ route }) => ({
              tabBarLabel: route.name,
              tabBarIcon: ({ focused }) => TabBarIcon(focused, route.name)
            }),
            {
              tabBarActiveBackgroundColor: 'skyblue',
              tabBarActiveTintColor: 'blue',
              tabBarInactiveTintColor: '#fff',
              tabBarStyle: { backgroundColor: '#c6cbef' },
              tabBarLabelPosition: 'below-icon'
            })
          }>
          <Tab.Screen name="Home" component={TabHomeScreen} />
          <Tab.Screen name="User" component={TabUserScreen} />
          <Tab.Screen name="Message" component={TabMessageScreen} />
        </Tab.Navigator>
      </NavigationContainer>
      // ---------------------------------------------------------------------------------- Drawer Navigator
      // <NavigationContainer>
      //   <Drawer.Navigator
      //     initialRouteName="Home"
      //     screenOptions={{
      //       drawerType: 'front',
      //       drawerPosition: 'right',
      //       drawerStyle: {
      //         backgroundColor: '#c6cbef'
      //         // width: 200
      //       },
      //       drawerActiveTintColor: 'red',
      //       drawerActiveBackgroundColor: 'skyblue'
      //     }}
      //     drawerContent={props => <SideDrawer {...props} />}>
      //     <Drawer.Screen
      //       name="Home"
      //       component={DrawerHomeScreen}
      //       options={{
      //         drawerIcon: () => (
      //           <Image
      //             source={PictogramHome}
      //             style={{ width: 40, height: 40 }}
      //           />
      //         )
      //       }}
      //     />
      //     <Drawer.Screen name="User" component={DrawerUserScreen} />
      //   </Drawer.Navigator>
      // </NavigationContainer>
      // ---------------------------------------------------------------------------------- Stack Navigator
      // <NavigationContainer>
      //   <Stack.Navigator
      //     initialRouteName="Home"
      //     screenOptions={{
      //       headerStyle: {
      //         backgroundColor: '#a4511e'
      //       },
      //       headerTintColor: '#fff',
      //       headerTitleStyle: {
      //         fontWeight: 'bold',
      //         color: '#f3d612'
      //       }
      //     }}>
      //     <Stack.Screen
      //       name="Home"
      //       component={HomeScreen}
      //       options={{
      //         title: 'Home Screen',
      //         headerTitle: <LogoTitle />,
      //         headerRight: () => (
      //           <Button
      //             title="Info"
      //             onPress={() => alert('I am a button!')}
      //             color="orange"
      //           />
      //         )
      //       }}
      //     />
      //     <Stack.Screen
      //       name="User"
      //       component={UserScreen}
      //       initialParams={{
      //         userIdx: 50,
      //         userName: 'Gildong',
      //         userLastName: 'Go'
      //       }}
      //       options={{
      //         title: 'User Screen',
      //         headerStyle: {
      //           backgroundColor: 'pink'
      //         },
      //         headerTintColor: 'red',
      //         headerTitleStyle: {
      //           fontWeight: 'bold',
      //           color: 'purple'
      //         }
      //       }}
      //     />
      //   </Stack.Navigator>
      // </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({})

export default App
