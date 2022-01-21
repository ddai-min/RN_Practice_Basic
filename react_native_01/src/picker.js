/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

class PickerComponent extends Component {

    state = {
        country: 'korea',
        value: 50
    }

    sliderValueChange = (value) => {
        this.setState({
            value: value
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Slider
                    style={{ height: 40, width: 300 }}
                    value={this.state.value}
                    minimumValue={0}
                    maximumValue={100}
                    onValueChange={this.sliderValueChange}
                    maximumTrackTintColor='red'
                    minimumTrackTintColor='blue'
                    step={1}
                />
                <Text
                    style={styles.input}
                >{this.state.value}</Text>
                <ActivityIndicator
                    style={{ paddingTop: 200 }}
                    size="large"
                    color="green"
                    animating={false}
                />
                <Picker
                    style={{ height: 50, width: 250 }}
                    selectedValue={this.state.country}
                    onValueChange={(val, idx) =>
                        this.setState({ country: val })
                    }
                >
                    <Picker.Item label="Korea" value="korea" />
                    <Picker.Item label="Canada" value="canada" />
                    <Picker.Item label="Japan" value="japan" />
                </Picker>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        marginBottom: 200,
        alignItems: 'center'
    },
    input: {
        width: '100%',
        marginTop: 20,
        fontSize: 25
    }
})

export default PickerComponent;
