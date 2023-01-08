import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Bet from './Bet';
import BottomNavBar from './BottomNavBar';


const HomeScreen = ({navigation}) => {
    return (
    <View style={styles.container}>

        <View style={styles.sectionWrapper}>
            <Text style={styles.sectionTitle}>Open bets</Text>

            <View style={styles.bets}>
            <Bet text={"A o V gör dumplings till middag o V gör dumplings till middag"} amount={20}/>
            <Bet text={"Amin går till gymmet idag"} amount={50}/>
            </View>

        </View>

        <BottomNavBar navigation={navigation}/>

        <StatusBar style="auto" />
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  sectionWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});

export default HomeScreen;