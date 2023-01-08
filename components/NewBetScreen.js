import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BottomNavBar from "./BottomNavBar";


const NewBetScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            
            <Text>NewBetPage</Text>
            <BottomNavBar navigation={navigation}/>
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

export default NewBetScreen;