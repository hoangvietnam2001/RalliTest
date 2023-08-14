import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

export default function PopupNB({item, onPress}: {item: any, onPress:()=>void}) {
	
	return (
		<TouchableOpacity style={styles.popup} onPress={onPress}>
			<Text style={styles.text}>Dự án: {item.project}</Text>
			<Text style={styles.text}>Địa chỉ server: {item.SERVER_ADDRESS}</Text>
			<Text style={styles.text}>MAC: {item.MAC}</Text>
		</TouchableOpacity>
	);
} 

const styles = StyleSheet.create({
	popup: {
		width: 338,
		height: 160,
		borderRadius: 10,
		
		marginBottom:2,
		shadowColor:'#000',
		shadowOffset:{
			width:0,
			height:4
		},
		shadowOpacity:0.32,
		shadowRadius:10,
		 elevation:4
	},
	text: {
		marginVertical: 8,
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
