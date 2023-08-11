import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { LightNB } from '../../screens';
import InformationDetail from '../../screens/LightNB/InformationDetail';
import Scanner from '../../screens/LightNB/Scanner';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MainTab from '../Tab/MainTab';
const Stack = createStackNavigator();
const ScannerStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Tab'
                component={MainTab}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='Scanner'
                component={Scanner}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='Update'
                component={InformationDetail}
                options={{
                    headerRight: () => (
                        <TouchableOpacity style = {{marginRight: 20}}>
                            <Icon name='delete' type='material-community' size={24} />
                        </TouchableOpacity>
                    ),
                    headerTitleAlign:'center'
                    
                }}
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})

export default ScannerStack;