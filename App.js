import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from './Components/Login';
import Register from './Components/Register';
import Welcome from './Components/Welcome';
import Home from './Components/Home';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Login" component={Login} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Register" component={Register} options={{
          headerShown: false
        }}/>
        <Stack.Screen name="Home" component={Home} options={{
          headerShown: false
        }} />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;