import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { StyleSheet } from 'react-native';
import HomeScreen from './HomeScreen';
import AccountScreen from './AccountScreen';
import NewBetScreen from './NewBetScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createMaterialBottomTabNavigator();

const AppTabs = () => {

    return (
      <Tab.Navigator 
          initialRouteName='Home' 
          backBehavior='history' 
          swipeEnabled={true}
          sceneAnimationEnabled={true}>

          <Tab.Screen 
              name="Account"
              component={AccountScreen}
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
    );
}

const styles = StyleSheet.create({
  icons: {
    fontSize: 24
  }
})

export default AppTabs;