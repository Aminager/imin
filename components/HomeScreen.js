import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import Bet from './Bet';
import BottomNavBar from './BottomNavBar';

const bets = require("../testBets.json").bets;

const HomeScreen = ({navigation}) => {
  
  
  return (
  <SafeAreaView style={styles.container}>
      
      <ScrollView style={styles.sectionWrapper}>
          <Text style={styles.sectionTitle}>Open bets</Text>

          <View style={styles.bets}>
            {
              bets.map((bet, index) => {
                return <Bet key={index} text={bet.text} amount={bet.amount} />   
              })
            }
          </View>

      </ScrollView>

      <BottomNavBar navigation={navigation}/>

      <StatusBar style="auto" />
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  sectionWrapper: {
    paddingTop: "20%",
    paddingHorizontal: "6%",
    maxHeight: "91%"
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});

export default HomeScreen;