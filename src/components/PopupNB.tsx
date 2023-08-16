import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

export default function PopupNB({item, onPress}: {item: any, onPress:()=>void}) {
	
	return (
		<TouchableOpacity style={styles.popup} onPress={onPress}>
			<Text style={[styles.text, {marginTop: 15}]}>Dự án: {item.project}</Text>
			<Text style={styles.text}>Địa chỉ server: {item.SERVER_ADDRESS}</Text>
			<Text style={styles.text}>MAC: {item.MAC}</Text>
		</TouchableOpacity>
	);
} 

const styles = StyleSheet.create({
	popup: {
		width: 338,
		borderRadius: 2,
		
		marginBottom:2,
		shadowColor:'#000',
		shadowOffset:{
			width:0,
			height:1
		},
		shadowOpacity:0.5,
		shadowRadius:1,
		 elevation: 5
	},
	text: {
		marginVertical: 10,
		fontSize: 18,
		fontWeight: '400',
		fontFamily: 'ABeeZee-Regular',
		fontStyle: 'italic',
		lineHeight: 21.28,
		color: '#005A6F',
		marginLeft: 32,
		paddingTop:3
	},
});
