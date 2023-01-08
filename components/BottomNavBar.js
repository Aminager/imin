import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


const BottomNavBar = ({navigation}) => {

    return (
    <View style={styles.navbar}>
        <TouchableOpacity style={styles.barItem} 
        onPress={() => navigation.navigate('Account')}>
            <Icon name="user" style={styles.barItemIcon}></Icon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.barItem}
        onPress={() => navigation.navigate('Home')}>
            <Icon name="home" style={styles.barItemIcon}></Icon>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.barItem}
        onPress={() => navigation.navigate('NewBet')}>
            <Icon name="plus" style={styles.barItemIcon}></Icon>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    navbar : {
        position: 'absolute',
        width: '90%',
        bottom: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: '#F7E3BE',
        borderWidth: 4,
        borderRadius: 40,
        paddingHorizontal: '10%'
    },
    barItem: {
        padding: 5,
    },
    barItemIcon: {
        fontSize: 50
    },
});

export default BottomNavBar;