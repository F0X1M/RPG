import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useState, useEffect } from 'react';
import { Icon } from 'native-base';
import { MaterialCommunityIcons } from "@expo/vector-icons";


// funkcja task przyjmuje parametr props, argumenty przekazane do komponentu w react
// w returnie wywolujesz jak wyglada 
//
const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <Icon as={MaterialCommunityIcons} name="notebook-outline"></Icon>
                <Text style={styles.itemText}>{props.text.title}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

//style

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    icobg: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
        padding: 10,
        fontSize: 15
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    },
});

export default Task;