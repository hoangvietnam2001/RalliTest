import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import ScannerStack from './src/navigators/Stack/ScannerStack';
import {NavigationContainer} from '@react-navigation/native';

import {Provider} from 'react-redux';
import store from './src/redux/store';

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<ScannerStack />
			</NavigationContainer>
		</Provider>
	);
}

const styles = StyleSheet.create({});
