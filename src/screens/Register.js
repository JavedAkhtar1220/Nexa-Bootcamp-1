import React, { useState } from 'react';

import { TextInput, Button } from 'react-native-paper';

import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    // TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator
} from 'react-native';

// Firebase
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { auth, db } from './firebase';

const Register = ({ navigation }) => {


    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disBtn, setDisBtn] = useState(false);

    const onSignup = () => {

        if (username === "") {
            Alert.alert("Username is required");
            return false;
        }
        else if (email === "") {
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

            setDisBtn(true);

            createUserWithEmailAndPassword(auth, email, password)
                .then(async user => {

                    await setDoc(doc(db, "users", user.user.uid), {
                        username,
                        email,
                        uid: user.user.uid
                    })
                        .then(() => {
                            Alert.alert("User created successfully")
                            navigation.navigate("Home");
                        })

                })
                .catch(err => {
                    setDisBtn(false);
                    Alert.alert(err.message);
                })
        }
    }

    return (
        <SafeAreaView>
            <View style={styles.mainContainer}>
                <Text style={styles.head}>REGISTER</Text>
                <View style={{ marginTop: 40, paddingHorizontal: 30 }}>
                    <View style={{ marginBottom: 10 }}>
                        <TextInput
                            label="Full Name"
                            mode="outlined"
                            value={username}
                            onChangeText={(e) => setUsername(e)}
                            placeholder="Javed Akhtar"
                            autoCorrect="false"
                        />
                    </View>

                    <View style={{ marginBottom: 10 }}>
                        <TextInput
                            label="Email"
                            mode="outlined"
                            value={email}
                            onChangeText={(e) => setEmail(e)}
                            placeholder="example@abc.com"
                            autoCorrect="false"
                            autoCapitalize="none"
                        />
                    </View>
                    <View style={{ marginBottom: 10 }}>
                        <TextInput
                            label="Password"
                            mode="outlined"
                            value={password}
                            onChangeText={(e) => setPassword(e)}
                            placeholder="************"
                            secureTextEntry="true"
                        />
                    </View>
                    {disBtn ? <Button mode="contained" style={{ paddingVertical: 6 }} disabled>
                        <ActivityIndicator />
                    </Button> : <Button mode="contained" style={{ paddingVertical: 6 }} onPress={onSignup}>
                        Signup
                    </Button>}

                    <View style={{ marginTop: 15, display: 'flex', flexDirection: 'row', justifyContent: "flex-end", alignItems: "center" }}>
                        <Text style={{ fontSize: 16 }}>
                            Already an account?
                        </Text>
                        <TouchableOpacity style={{ marginLeft: 6 }} onPress={() => navigation.navigate('Login')}>
                            <Text style={{ fontSize: 16, color: 'blue' }}>Login</Text>
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

    BtnLoginDis: {
        padding: 10,
        backgroundColor: "#ccc"
    }
})

export default Register