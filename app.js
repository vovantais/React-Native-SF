import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Products from './Components/Products.js';


const Stack = createStackNavigator();

export const App = function() {
   return (
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen name="Choose your Car!" component={Products} />
         </Stack.Navigator>
      </NavigationContainer>
   );
}
