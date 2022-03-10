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
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

const Login = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disBtn, setDisBtn] = useState(false);

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

            setDisBtn(true);
            signInWithEmailAndPassword(auth, email, password)
                .then(user => {
                    navigation.navigate("Home");
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
                <Text style={styles.head}>LOGIN</Text>
                <View style={{ marginTop: 40, paddingHorizontal: 30 }}>
                    <View style={{ marginBottom: 10 }}>
                        <TextInput
                            value={email}
                            label="Email Address"
                            mode="outlined"
                            onChangeText={(e) => setEmail(e)}
                            placeholder="example@abc.com"
                            autoCorrect="none"
                            autoCapitalize="none"
                        />
                    </View>
                    <View style={{ marginBottom: 10 }}>
                        <TextInput
                            label="Password"
                            onChangeText={(e) => setPassword(e)}
                            mode="outlined"
                            value={password}
                            placeholder="************"
                            secureTextEntry="true"
                        />
                    </View>
                    {disBtn ? <Button mode="contained" style={{ paddingVertical: 6 }} disabled>
                        <ActivityIndicator />
                    </Button> :
                        <Button mode="contained" style={{ paddingVertical: 6 }} onPress={onLogin}>
                            login
                        </Button>}

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
    BtnLoginDis: {
        padding: 10,
        backgroundColor: "#ccc"
    },
    error: {
        color: 'red',
        marginTop: 4,
        fontSize: 15,
        paddingStart: 8,
    }
})

export default Login