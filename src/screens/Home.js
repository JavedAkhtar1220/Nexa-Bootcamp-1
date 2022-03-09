import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const Home = ({ navigation }) => {


    return (
        <View style={styles.mainContainer}>

            <Text style={styles.head}>Hello My Name is Javed Akhtar</Text>
            <TouchableOpacity style={styles.btnLogout} onPress={() => navigation.navigate('Login')}>
                <Text style={{ color: 'white' }}>
                    GOTO LOGIN
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    head: {
        fontSize: 30,
        textAlign: 'center'
    },
    btnLogout: {
        padding: 10,
        backgroundColor: 'red',
        marginTop: 10
    }
})

export default Home;