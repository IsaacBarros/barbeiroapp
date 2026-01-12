import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// CORREÇÃO AQUI: Use ".." para voltar uma pasta e achar "screens"
import Login from '../screens/login'; 
import Home from '../screens/home';
import Teste from '../screens/teste';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen 
          name="login" 
          component={Login} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="home" 
          component={Home} 
          options={{ title: 'Barbeiro App' }} 
        />       
        <Stack.Screen 
          name="teste" 
          component={Teste} 
          options={{ title: 'Tela de Teste' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}