import React  from "react";
import { StyleSheet, Text, Image, SafeAreaView, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { auth } from "../firebase";
import { onAuthStateChanged } from "@firebase/auth";


const AccountScreen = ({navigation}) => {

  onAuthStateChanged(auth, (user) => {
    if (!user) {
      
    }
  })
  
  return(
    
      <SafeAreaView style={styles.container}>
          <View style={styles.profileInfoWrapper}>
            <TouchableOpacity style={styles.profileInfoWrapperOpacity}>
              <Image 
                style={styles.profileInfoImage}
                source={require('../assets/amin.png')}>
              </Image>
            </TouchableOpacity>
            <Text style={styles.profileInfoText}>test</Text>
            
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