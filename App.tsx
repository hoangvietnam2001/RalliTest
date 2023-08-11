import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import ScannerStack from './src/navigators/Stack/ScannerStack';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
	return (
		<NavigationContainer>
			<ScannerStack />
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({});
