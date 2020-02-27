import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native'

export default props => {

    const stylesButton = [styles.btn]
    if (props.double) stylesButton.push(styles.buttonDouble)
    if (props.triple) stylesButton.push(styles.buttonTriple)
    if (props.operation) stylesButton.push(styles.operationButton)

    return (
        <TouchableOpacity onPress={() => props.onClick(props.value)}  >
            <Text style={stylesButton} >{props.value}</Text>
        </TouchableOpacity>
    )
}

const WIDTH = Dimensions.get('window').width

const styles = StyleSheet.create({
    btn: {
        width: WIDTH/4,
        height: WIDTH/4,
        padding: 20,
        borderRadius: (WIDTH/4)/2,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 8,
        borderColor: '#121212',
        fontSize: 50
    },

    operationButton: {
        backgroundColor: '#fa8231',
        color: '#fff'
    },

    buttonDouble: {
        width: (WIDTH/4) * 2,
        textAlign: 'left',
        paddingHorizontal: 35
    },

    buttonTriple: {
        width: (WIDTH/4) * 3,
        backgroundColor: '#aaa7',
        color: '#fff',
    },

    btnText: {
        color: '#333',
        fontSize: 50,
        fontWeight: 'bold'
    }
})
