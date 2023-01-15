import { NavigationContainer} from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './components/HomeScreen';
import AccountScreen from './components/AccountScreen';
import NewBetScreen from './components/NewBetScreen';
import LoginScreen from './components/LoginScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createMaterialBottomTabNavigator();

const App = () => {


  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName='Home' 
        backBehavior='history' 
        swipeEnabled={true}
        sceneAnimationEnabled={true}>
        
        <Tab.Screen 
          name="Account"
          component={LoginScreen}
          options={{headerShown: false, 
            tabBarIcon: () => <Icon name="user" style={styles.icons}></Icon>}}
        />
        <Tab.Screen 
          name="Home"
          component={HomeScreen}
          options={{headerShown: false, 
            tabBarIcon: () => <Icon name="home" style={styles.icons}></Icon>}}
        />
        <Tab.Screen 
          name="NewBet"
          
          component={NewBetScreen}
          options={{headerShown: false, 
            tabBarIcon: () => <Icon name="plus" style={styles.icons}></Icon>}}
        />
      </Tab.Navigator>
      
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  icons: {
    fontSize: 24
  }
})

export default App;