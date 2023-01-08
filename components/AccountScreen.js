import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BottomNavBar from "./BottomNavBar";

const AccountScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>AccountPage</Text>
            <BottomNavBar navigation={navigation} />
        </View>
        
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

export default AccountScreen;