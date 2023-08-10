import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Personal() {
	return (
		<View
			style={{
				backgroundColor: '#fff',
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<Text style={{fontWeight: '700', fontSize: 24}}>
				This is Personal page
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({});
