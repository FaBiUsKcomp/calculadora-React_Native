import React, { Component } from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'

export default class Display extends Component {

    constructor(props) {
        super(props)
    }

    render(){
        return(
            <View style={styles.display} >
                <Text numberOfLines={1} style={styles.displayValue}>{this.props.value}</Text>
            </View>
        )
    }
}

const WIDTH = Dimensions.get('window').width

const styles = StyleSheet.create({
    display: {
        flex: 1,
        width: WIDTH,
        padding: 20,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },

    displayValue: {
        fontSize: 100,
        fontWeight: 'bold',
        color: '#fff'
    }
})