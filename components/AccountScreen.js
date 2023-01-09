import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, SafeAreaView, View, TouchableOpacity } from 'react-native';
import BottomNavBar from "./BottomNavBar";

const AccountScreen = ({navigation, props}) => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.profileInfoWrapper}>
              <TouchableOpacity style={styles.profileInfoWrapperOpacity}>
                <Image 
                  style={styles.profileInfoImage}
                  source={require('../assets/amin.png')}>
                </Image>
              </TouchableOpacity>
              <Text style={styles.profileInfoText}>{props.name}</Text>
              
            </View>
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  profileInfoWrapper: {
    paddingTop: "10%",
    alignItems: 'center',
  },
  profileInfoWrapperOpacity: {
    borderRadius: 50,

  },
  profileInfoImage: {
    borderRadius: 50,
    height: 150,
    width: 150,
  },
});

export default AccountScreen;