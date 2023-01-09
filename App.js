import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './components/HomeScreen';
import AccountScreen from './components/AccountScreen';
import NewBetScreen from './components/NewBetScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home' backBehavior='history'>
        <Tab.Screen 
          name="Account"
          component={AccountScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen 
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen 
          name="NewBet"
          
          component={NewBetScreen}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
      
    </NavigationContainer>
    
  );
}

export default App;