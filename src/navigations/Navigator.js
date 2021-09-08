import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Detail from '../screens/Detail';
import Home from '../screens/Home';
const Stack = createNativeStackNavigator();
const screenOptionStyle={
    headerShown:false
}

const HomeStackNavigator = () =>{
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
    )
}

export default HomeStackNavigator