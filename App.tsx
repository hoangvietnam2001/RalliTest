import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {LightNB, Gateway, Personal} from './src/screens';

const BottomTab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<BottomTab.Navigator
				initialRouteName="LightNB"
				screenOptions={{
					tabBarActiveTintColor: '#005A6F',
					tabBarStyle: {height: 72},
					tabBarLabelStyle: {
						fontWeight: '400',
						fontSize: 12,
						textAlign: 'center',
						fontFamily: 'ABeeZee-Regular',
						marginBottom: 8,
					},
				}}>
				<BottomTab.Screen
					name={'LightNB'}
					component={LightNB}
					options={{
						headerShown: false,
						tabBarIcon: () => {
							return (
								<Image
									source={require('./src/assets/icons/bulb.png')}
									style={{width: 24, height: 24, resizeMode: 'stretch'}}
								/>
							);
						},
					}}
				/>
				<BottomTab.Screen
					name={'Gateway'}
					component={Gateway}
					options={{
						headerShown: false,
						tabBarIcon: () => {
							return (
								<Image
									source={require('./src/assets/icons/router.png')}
									style={{width: 24, height: 24, resizeMode: 'stretch'}}
								/>
							);
						},
					}}
				/>
				<BottomTab.Screen
					name={'Personal'}
					component={Personal}
					options={{
						headerShown: false,
						tabBarIcon: () => {
							return (
								<Image
									source={require('./src/assets/icons/frame.png')}
									style={{width: 24, height: 24, resizeMode: 'stretch'}}
								/>
							);
						},
					}}
				/>
			</BottomTab.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({});
