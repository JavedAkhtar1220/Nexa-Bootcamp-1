import React from 'react'
import { View } from 'react-native'

// UI 
import { TextInput } from 'react-native-paper'

// Redux 
import { useSelector } from 'react-redux'

const Input = ({ name, secured, value, onChange }) => {

    const mode = useSelector(state => state.theme);

    return (
        <View style={{ marginBottom: 10 }}>
            <TextInput
                label={name}
                mode="outlined"
                onChangeText={(e) => onChange(e)}
                value={value}
                theme={{
                    colors: {
                        placeholder: mode === "light" ? 'black' : 'white',
                        text: mode === "light" ? 'black' : 'white',
                        primary: mode === "light" ? 'blue' : 'white',
                        background: mode === "light" ? "white" : '#262626'
                    }
                }}
                secureTextEntry={secured ? true : false}
            />
        </View>
    )
}

export default Input;