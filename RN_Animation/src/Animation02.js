/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react'
import { Easing, Animated, StyleSheet, View, Text, Button } from 'react-native'

class AnimTwo extends Component {
  constructor() {
    super()
    this.state = {
      redSquare: new Animated.Value(1),
      greenSquare: new Animated.ValueXY(0, 0),
      blueSquare: new Animated.ValueXY(0, 0)
    }
  }

  runAnimation = () => {
    Animated.sequence([
      Animated.timing(this.state.redSquare, {
        toValue: 0
      }),

      Animated.parallel([
        Animated.spring(this.state.greenSquare, {
          toValue: { x: 200, y: 0 }
        }),
        Animated.spring(this.state.blueSquare, {
          toValue: { x: 200, y: 400 }
        })
      ])
    ]).start()
  }
  render() {
    return (
      <View>
        <Animated.View style={{ opacity: this.state.redSquare }}>
          <View style={styles.redSquare}></View>
        </Animated.View>

        <Animated.View style={this.state.greenSquare.getLayout()}>
          <View style={styles.greenSquare}></View>
        </Animated.View>

        <Animated.View style={this.state.blueSquare.getLayout()}>
          <View style={styles.blueSquare}></View>
        </Animated.View>

        <Button title="Animation Start" onPress={this.runAnimation} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  redSquare: {
    width: 100,
    height: 100,
    backgroundColor: 'red'
  },
  greenSquare: {
    width: 100,
    height: 100,
    backgroundColor: 'green'
  },
  blueSquare: {
    width: 100,
    height: 100,
    backgroundColor: 'blue'
  }
})

export default AnimTwo
