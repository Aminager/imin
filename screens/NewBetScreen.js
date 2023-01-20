import React, { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, KeyboardAvoidingView, StyleSheet, TextInput, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import BottomNavBar from "../components/BottomNavBar";
import {auth, db} from "../firebase";
import {collection, addDoc} from "firebase/firestore";



const NewBetScreen = ({navigation}) => {

  const [text, onChangeText] = useState("");
  const [amount, onChangeAmount] = useState("");
  const [submit, setSubmit] = useState(false);

  function formFilled() {
    let amountInt = parseInt(amount);
    if (amount == "" || amountInt <= 0) return false;
    if (text == "") return false;
    return true;
  }

  function resetForm() {
    onChangeText("");
    onChangeAmount("");
  }

  
  async function submitBet() {
    
    if (formFilled()) {
      try {
        const docRef = await addDoc(collection(db, "bets"), {
          amount: parseInt(amount),
          creator: auth.currentUser.email,
          description: text
        });
        console.log("Document written with ID: ", docRef.id);
        resetForm();
        
      } catch (e) {
        console.error("Error adding doc: ", e);
      }
    } else {
      alert("Please enter form correctly");
    }
  }

  return(
    <View style={styles.newBetWrapper}>
      <View style={styles.inputWrapper}>
        <Text style={styles.titleText}>Create new bet</Text>
        
        <Text style={styles.inputTitle}>Bet description</Text>
        <TextInput 
          style={styles.textInput} 
          value={text}
          onChangeText={text => onChangeText(text)}
          placeholder=" Enter bet description"></TextInput>
        
        <Text style={styles.inputTitle}>Amount</Text>
        <TextInput 
          style={styles.amountInput}
          value={amount}
          onChangeText={amount => onChangeAmount(amount)}
          keyboardType="numeric"
          placeholder=" Enter your max bet amount"></TextInput>
        
        <TouchableOpacity 
          style={styles.submitButtonWrapper}
          onPress={() => submitBet()}>
          <Icon name="plus" style={styles.submitButton}></Icon>
        </TouchableOpacity>
      </View>

      <BottomNavBar navigation={navigation}/>
    </View>
  )
}

const styles = StyleSheet.create({
  newBetWrapper: {
    backgroundColor: '#F7E3BE',
    height: "100%",
    alignItems: 'center',
    paddingTop: 150,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputWrapper: {
    backgroundColor: '#fff',
    height: 300,
    width: "80%",
    borderRadius: 20,
    alignItems: "center",
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  textInput: {
    backgroundColor: '#F7E3BE',
    borderWidth: 1,
    borderRadius: 20,
    width: "80%",
    height: "15%",
    paddingLeft: 10,
  },
  amountInput: {
    backgroundColor: '#F7E3BE',
    borderWidth: 1,
    borderRadius: 20,
    width: "80%",
    height: "15%",
    paddingLeft: 10,
  },
  submitButton: {
    fontSize: 36
  },
  submitButtonWrapper: {
  },
});

export default NewBetScreen;