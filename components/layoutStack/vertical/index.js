import React, {Component} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';

let {height} = Dimensions.get('window');
let boxCount = 3;
let boxHeight = height / boxCount;

export default class VerticalStackLayout extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.box, styles.box1]}></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:  {
        flex: 1,
        flexDirection: 'column'
    },
    box: {
        height: boxHeight
    },
    box1: {
        backgroundColor: '#2196F3'
    }
    
});