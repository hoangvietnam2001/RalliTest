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

export default MainStack;