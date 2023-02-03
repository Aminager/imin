import React, {useEffect, useState} from "react";
import { StyleSheet, TextInput, Text, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = ({navigation}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignUp = () => {
      createUserWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
          const user = userCredentials.user;
          console.log("User: ", user.email, ", pw: ", password);
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
    }, []);

    return (
      <View behavior="padding" style={styles.container}>
        <View style={styles.loginHeaderWrapper}>
          <Text style={styles.loginHeaderText}>I'm in!</Text>
        </View>
          <View style={styles.inputWrapper}>
              <TextInput
                  style={styles.loginInput}
                  placeholder="Email"
                  value = {email}
                  onChangeText={text => (setEmail(text))}
                  />
              <TextInput 
                  style={styles.loginInput} 
                  secureTextEntry={true} 
                  placeholder="Password"
                  value = {password}
                  onChangeText={text => (setPassword(text))}
                  />
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
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginHeaderWrapper: {
    paddingBottom: "20%"
  },
  loginHeaderText: {
    fontSize: 24,
    fontWeight: "bold"
  },
  inputWrapper: {
    width: "80%"
  },
  loginInput: {
    padding: 15,
    borderWidth: 1,
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