import { Image, StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import MainStack from '../Stack/MainStack';
import { Gateway, Personal } from '../../screens';
const BottomTab = createBottomTabNavigator();
const MainTab = () => {
    return (
			<BottomTab.Navigator
				initialRouteName="LightNB"
				screenOptions={{
					tabBarActiveTintColor: '#005A6F',
					tabBarStyle: {height: 82},
					tabBarLabelStyle: {
						fontWeight: '400',
						fontSize: 12,
						textAlign: 'center',
						fontFamily: 'ABeeZee-Regular',
						marginBottom: 8,
					},
				tabBarHideOnKeyboard: true
				}}>
				<BottomTab.Screen
					name={'LightNB'}
					component={MainStack}
					options={{
						headerShown: false,
						tabBarIcon: () => {
							return (
								<Image
									source={require('../../assets/icons/bulb.png')}
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
									source={require('../../assets/icons/router.png')}
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
									source={require('../../assets/icons/frame.png')}
									style={{width: 24, height: 24, resizeMode: 'stretch'}}
								/>
							);
						},
					}}
				/>
			</BottomTab.Navigator>
    );
};

const styles = StyleSheet.create({})

export default MainTab;