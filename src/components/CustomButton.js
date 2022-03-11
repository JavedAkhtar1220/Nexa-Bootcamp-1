import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'


const CustomButton = ({ name, type, style, onPress }) => {
    return (
        <Button
            mode="contained"
            color={type === "delete" ? "red" : "blue"}
            style={style}

            onPress={onPress}
        >
            {name}
        </Button >
    )
}

export default CustomButton