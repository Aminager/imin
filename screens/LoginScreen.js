import React, {useEffect, useState} from "react";
import { StyleSheet, Text, Image, SafeAreaView, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { TextInput } from "react-native-paper";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "@firebase/auth";


const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log(password);
            console.log(user.email);
        })
        .catch(error => alert(error.message))
    }

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log("Logged in: " + user.email);
        })
        .catch(error => alert(error.message));
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
              navigation.replace("AppTabs");
          }
        })
        
        return unsubscribe
    }, [])


    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <View style={styles.inputWrapper}>
              <TextInput 
                  style={styles.loginInput} 
                  placeholder="Email"
                  value = {email}
                  onChangeText={text => (setEmail(text))}
                  >

              </TextInput>
              <TextInput 
                  style={styles.loginInput} 
                  secureTextEntry={true} 
                  placeholder="Password"
                  value = {password}
                  onChangeText={text => (setPassword(text))}
                  >

              </TextInput>
          </View>
          <View style={styles.buttonWrapper}>
              <TouchableOpacity
                  onPress={handleLogin}
                  style={styles.button}>
                  <Text style={styles.buttonText}>Sign in</Text>
              </TouchableOpacity>
              <TouchableOpacity
                  onPress={handleSignUp}
                  style={styles.buttonOutline}>
                  <Text style={styles.buttonOutlineText}>Create account</Text>
              </TouchableOpacity>
          </View>

      </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputWrapper: {
    width: "80%"
  },
  loginInput: {
    margin: 5,
    borderRadius: 20,
  },
  buttonWrapper: {
    width: "40%",
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    width: "100%",
    padding: 15,
    backgroundColor: "#F7E3BE",
    marginTop: 5,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonOutline: {
    width: "100%",
    borderColor: "#F7E3BE",
    padding: 15,
    marginTop: 5,
    borderWidth: 3,
    borderRadius: 20,
    alignItems: 'center',

  },
  buttonText: {
  },
  buttonOutlineText: {
    
  },
});

export default LoginScreen;