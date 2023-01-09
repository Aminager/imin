import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Bet = (props) => {

    return (
    <View style={styles.item}>

        <View style={styles.itemLeft}>
            <TouchableOpacity 
                style={styles.imageOpacity}
                onPress={() => alert("pic pressed")}>
                <Image 
                    style={styles.betImage}
                    source={require('../assets/amin.png')}>
                </Image>
                
            </TouchableOpacity>

            <Text style={styles.itemText}>{props.text}</Text>
            
        </View>

        <View style={styles.itemRight}>
            <View style={styles.amount}>
                <Text style={styles.amountText}>{props.amount} kr</Text>
            </View>
            <View style={styles.acceptBet}>
                <TouchableOpacity
                    style={styles.acceptOpacity}
                    onPress={() => alert("bet accepted")}>
                    <Icon name="check-circle" style={styles.acceptCheck}></Icon>
                    
                </TouchableOpacity>
            </View>
        </View>
        
    </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#F7E3BE',
        padding: "4.5%",
        justifyContent: 'space-between',
        marginTop: "2%",
        marginBottom: "2%",
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',

    },
    itemLeft: {
        flexDirection: 'row',
    },
    itemRight: {
        flexDirection: 'row',
    },
    imageOpacity : {
        borderRadius: 50,
        height: "10%",
        width: "10%",
    },
    betImage: {
        height: 48,
        width: 48,
        borderRadius: 50,
    },
    itemText: {
        marginLeft: '13%',
        fontWeight: 'bold',
        maxWidth: '60%'
    },
    acceptOpacity: {
    
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