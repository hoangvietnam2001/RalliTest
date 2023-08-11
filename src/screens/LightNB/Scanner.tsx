import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Scanner = () => {
  return (
    <View style = {styles.constainer}>
        <Text style = {styles.title}>Lọc đèn NB theo mã QR</Text>
      <View style = {styles.scanner}></View>
    </View>
  )
}
const WIDTH = Dimensions.get('screen').width;
const HEGHT = Dimensions.get('screen').height;
const styles = StyleSheet.create({
    constainer: {
        width: WIDTH,
        height: HEGHT,
        flex: 1,
        alignItems: 'center'
    },
    title: {
        marginTop:HEGHT/12.5,
        fontSize: 18, 
        fontWeight: '600',
        color: '#005A6F'
    },
    scanner:{
        marginTop: HEGHT/5,
        width: WIDTH/1.33,
        height: WIDTH/1.33,
        backgroundColor:'#534444',
        borderRadius: 20,
    }
})


export default Scanner;