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
                    source={require('../assets/amin.png')} />
            </TouchableOpacity>
        </View>

        <View style={styles.texts}>
            <Text style={styles.creator}>{props.creator}</Text>
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
                    <Icon name="check-circle" style={styles.acceptCheck} />
                </TouchableOpacity>
            </View>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        backgroundColor: '#F7E3BE',
        padding: "4%",
        marginTop: "2%",
        marginBottom: "2%",
        borderRadius: 20,
        flexDirection: 'row',
    },
    itemLeft: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    itemRight: {
        flexDirection: 'row',
        alignItems: 'center'
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
    texts: {
        paddingHorizontal: "6%",
        flexGrow: 1,
        flexShrink: 1
    },
    creator: {
        fontStyle: "italic"
    },
    itemText: {
        flex: 1,
        fontWeight: 'bold',
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