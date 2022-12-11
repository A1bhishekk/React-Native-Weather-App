import {  StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Details from './screens/Details';


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="Details" component={Details} options={{headerShown:false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App