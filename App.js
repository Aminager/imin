import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import AppTabs from './screens/AppTabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="AppTabs"
          component={AppTabs}
          options={{headerShown: false}}

        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;