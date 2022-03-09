import React, { useState } from 'react'

import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native';

// Firebase 
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

const Login = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onLogin = () => {

        if (email === "") {
            Alert.alert("Email Address is required");
            return false;
        }
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email)) {
            Alert.alert("Email Address is Invalid");
            return false;
        }
        else if (password === "") {
            Alert.alert("Password is required");
            return false;
        }
        else {
            signInWithEmailAndPassword(auth, email, password)
                .then(user => {
                    navigation.navigate("Home")
                })
                .catch(err => {
                    Alert.alert(err.message);
                })
        }
    }

    return (
        <SafeAreaView>
            <View style={styles.mainContainer}>
                <Text style={styles.head}>LOGIN</Text>
                <View style={{ marginTop: 40, paddingHorizontal: 30 }}>
                    <View style={{ marginBottom: 10 }}>
                        <Text style={styles.label}>Email Address</Text>
                        <TextInput
                            style={styles.input}
                            value={email}
                            onChangeText={(e) => setEmail(e)}
                            placeholder="example@abc.com"
                            autoCorrect="false"
                            autoCapitalize="none"
                        />
                    </View>
                    <View style={{ marginBottom: 10 }}>
                        <Text style={styles.label}>Password</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(e) => setPassword(e)}
                            value={password}
                            placeholder="************"
                            secureTextEntry="true"
                        />
                    </View>
                    <TouchableOpacity style={styles.BtnLogin} onPress={onLogin}>
                        <Text style={{ color: 'white', fontSize: 18, fontWeight: "500" }}>Login</Text>
                    </TouchableOpacity>
                    <View style={{ marginTop: 15, display: 'flex', flexDirection: 'row', justifyContent: "flex-end", alignItems: "center" }}>
                        <Text style={{ fontSize: 16 }}>
                            New User?
                        </Text>
                        <TouchableOpacity style={{ marginLeft: 6 }} onPress={() => navigation.navigate('Register')}>
                            <Text style={{ fontSize: 16, color: 'blue' }}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 10,
        fontWeight: 500,
        marginTop: 100,

    },
    head: {
        fontSize: 40,
        textAlign: "center",
    },
    label: {
        fontSize: 20,
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
    },
    BtnLogin: {
        alignItems: "center",
        backgroundColor: "blue",
        padding: 10,
    },
    error: {
        color: 'red',
        marginTop: 4,
        fontSize: 15,
        paddingStart: 8,
    }
})

export default Login