import React from "react";
import { useDispatch } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';

const ContactScreen = () => {
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <View style={styles.currentView}>
                <View style={styles.location}>
                    <Text style={styles.city}>
                        HALO
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    currentView: {
        width: '80%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DDD'
    },
    location: {
        padding: 20,
        backgroundColor: '#AAA'
    },
    city: {
        fontSize: 20,
        color: '#000'
    }
});

export default ContactScreen;
