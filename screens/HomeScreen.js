import React, {useEffect, useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import Bet from '../components/Bet';
import {getBets} from "../fetches/FetchBets";

const HomeScreen = ({navigation}) => {
  //let bets = [{"amount": 40, "creator": "nina@gmail.com", "text": "testing2testing2testing2testing2testing2testing2testing2testing2testing2testing2testing2testing2testing2testing2testing2testing2"}, {"amount": 40, "creator": "nina@gmail.com", "text": "testing"}, {"amount": 40, "creator": "Amin", "text": "testing"}, {"amount": 50, "creator": "Amin Alian", "text": "Amin går till gymmet och lever life"}]
  const bets = getBets();
  return (
  <View style={styles.container}>
      <ScrollView style={styles.sectionWrapper}>
          <Text style={styles.sectionTitle}>Open bets</Text>

          <View style={styles.bets}>
            {console.log("bets: ", bets)}
            {
              
              bets.map((bet, index) => {
                return <Bet 
                          style={styles.bet} 
                          key={index}
                          text={bet.text}
                          creator={bet.creator} 
                          amount={bet.amount} />
              })
            }
          </View>

      </ScrollView>

      <StatusBar style="auto" />
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sectionWrapper: {
    paddingTop: "20%",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: "6%",
  }, 
  bets: {
    alignItems: 'stretch',
    paddingHorizontal: "4%",
    justifyContent: 'center'    
  },
  bet: {
  }
});

export default HomeScreen;