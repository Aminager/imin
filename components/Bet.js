import React from 'react';
import {View, Image, Text, StyleSheet, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Bet = (props) => {

    return (
    <View style={styles.item}>

        <View style={styles.itemLeft}>
            <TouchableHighlight 
                style={styles.imageHighlight}
                onPress={() => alert("pic pressed")}>
                <Image 
                    style={styles.betImage}
                    source={require('../assets/amin.png')}>
                </Image>
                
            </TouchableHighlight>

            <Text style={styles.itemText}>{props.text}</Text>
            
        </View>

        <View style={styles.itemRight}>
            <View style={styles.amount}>
                <Text style={styles.amountText}>{props.amount} kr</Text>
            </View>
            <View style={styles.acceptBet}>
                <TouchableHighlight
                    style={styles.acceptHighlight}
                    onPress={() => alert("bet accepted")}>
                    <Icon name="check-circle" style={styles.acceptCheck}></Icon>
                    
                </TouchableHighlight>
            </View>
        </View>
        
    </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#F7E3BE',
        padding: 15,
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',

    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    itemRight: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    imageHighlight: {
        borderRadius: 50,
        height: 48,
        width: 48,
    },
    betImage: {
        height: 48,
        width: 48,
        borderRadius: 50,
    },
    itemText: {
        marginLeft: 8,
        maxWidth: '60%'
    },
    acceptHighlight: {
    
    },
    acceptCheck: {
        fontSize: 30,
        color: 'green',
    },
    amount: {
        paddingRight: 5,
    },
    amountText: {
        fontSize: 18,
        fontWeight: 'bold',
    }
    
});

export default Bet;