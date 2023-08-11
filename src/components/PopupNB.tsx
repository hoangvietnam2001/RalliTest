import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

export default function PopupNB({item}: {item: any}) {
	return (
		<TouchableOpacity style={styles.popup}>
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
		shadowRadius: 20,
		borderWidth: 1,
		borderColor: 'gray',
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
	},
});
