import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

// Firebase 
import { signOut } from 'firebase/auth';
import { auth } from './firebase';

import { checkAuth, clearUserData } from '../redux/actions';

const Home = ({ navigation }) => {

    const userInfo = useSelector(state => state.userData);
    const dispatch = useDispatch();

    const onLogout = () => {

        signOut(auth)
            .then(() => {

                dispatch(checkAuth(false));
                dispatch(clearUserData());
            })

    }

    return (
        <View style={styles.mainContainer}>

            <Text style={styles.head}>Hello My Name is {userInfo.username}</Text>
            <Text style={styles.head}>My Email is {userInfo.email}</Text>
            <TouchableOpacity style={styles.btnLogout} onPress={onLogout}>
                <Text style={{ color: 'white' }}>
                    Logout
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