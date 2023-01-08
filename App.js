import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import AccountScreen from './components/AccountScreen';
import NewBetScreen from './components/NewBetScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Account"
          component={AccountScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="NewBet"
          component={NewBetScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      
    </NavigationContainer>
    
  );
}

export default App;