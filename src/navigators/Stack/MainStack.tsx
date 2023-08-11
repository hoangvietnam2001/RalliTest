import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { LightNB } from '../../screens';
import InformationDetail from '../../screens/LightNB/InformationDetail';
import Scanner from '../../screens/LightNB/Scanner';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Stack = createStackNavigator();
const MainStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Danh sách'
                component={LightNB}
                options={{
                    headerShown: false
                }}
            />
            
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})

export default MainStack;