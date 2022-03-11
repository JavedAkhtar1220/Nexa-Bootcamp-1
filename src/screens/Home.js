import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

// Firebase 
import { signOut } from 'firebase/auth';
import { auth } from './firebase';

// UI 
import { Appbar, TextInput } from 'react-native-paper';

import { checkAuth, clearUserData } from '../redux/actions';
import Header from '../../src/components/Header';
import Input from '../components/Input';
import CustomButton from '../components/CustomButton';

const Home = ({ navigation }) => {

    const userInfo = useSelector(state => state.userData);
    const mode = useSelector(state => state.theme);

    const [todo, setTodo] = useState("");

    const dispatch = useDispatch();

    const styles = StyleSheet.create({
        mainContainer: {
            backgroundColor: mode === "light" ? 'white' : "#262626",
            marginTop: 60,
            height: '100%'
        },
        head: {
            fontSize: 30,
            color: mode === "light" ? "black" : "white",
            textAlign: 'center',
            fontWeight: 'bold',
            letterSpacing: 2
        },
        btnLogout: {
            padding: 10,
            backgroundColor: 'red',
            marginTop: 10
        }
    })

    const onLogout = () => {

        signOut(auth)
            .then(() => {

                dispatch(checkAuth(false));
                dispatch(clearUserData());
            })

    }

    const onPress = () => {
        alert(todo);
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <Header />

            <View style={{ marginHorizontal: 10, marginTop: 50 }}>
                <Text style={styles.head}>Todo</Text>

                <View style={{ marginTop: 30 }}>

                    <Input name="Todo" value={todo} onChange={setTodo} />

                    <View style={{ flexDirection: 'row' }} >
                        <CustomButton name="Add Todo" style={{ flex: 1, paddingVertical: 4, marginHorizontal: 2 }} onPress={onPress} />

                        <CustomButton name="Delete All" type="delete" style={{ flex: 1, paddingVertical: 4, marginHorizontal: 2 }} />
                    </View>

                </View>


            </View>

        </SafeAreaView>
    )
}

export default Home;