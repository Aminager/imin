import React  from "react";
import { StyleSheet, Text, Image, SafeAreaView, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { auth, db } from "../firebase";
import { signOut } from "firebase/auth";


const AccountScreen = ({navigation}) => {

  const handleSignOut = () => {
    signOut(auth)
    .then(() => {
      navigation.replace("Login")
    })
    .catch(error => alert(error.message))
  }
  
  return(
    
      <View style={styles.container}>
          <View style={styles.profileInfoWrapper}>
            <TouchableOpacity style={styles.profileInfoWrapperOpacity}>
              <Image 
                style={styles.profileInfoImage}
                source={require('../assets/amin.png')}>
              </Image>
            </TouchableOpacity>
            <Text style={styles.profileInfoText}>test</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={handleSignOut}
              style={styles.signOutButton}>
              <Text>
                Sign out
              </Text>
            </TouchableOpacity>
          </View>
      </View>
      
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
  signOutButton: {
    backgroundColor: "#F7E3BE",
    padding: 15,
    marginTop: 5,
    borderRadius: 20,
    alignItems: 'center',
  }
});

export default AccountScreen;