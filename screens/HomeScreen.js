import React, {useState, useCallback} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, RefreshControl} from 'react-native';
import Bet from '../components/Bet';
import {getBets} from "../fetches/FetchBets";

const HomeScreen = ({navigation}) => {
  const [refreshing, setRefreshing] = useState(false);
  let bets = getBets();

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      console.log("refreshing...")
      try {
        bets = async () => {getBets()}
        setRefreshing(false);
      } catch (e) {
        console.error(e);
      }
    }, 2000)
  }, []);

  return (
  <View style={styles.container}>
      <ScrollView
        overScrollMode="always"
        style={styles.sectionWrapper}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
          <Text style={styles.sectionTitle}>Open bets</Text>
          <View style={styles.bets}>
            {console.log("bets: ", bets)}
            {bets.length != 0 ? bets.map((bet, index) => {
                return <Bet 
                          style={styles.bet} 
                          key={index}
                          text={bet.text}
                          creator={bet.creator} 
                          amount={bet.amount} />
              }) : <Text>Currently no bets available</Text>
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