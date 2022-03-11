import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

import FaIcon from 'react-native-vector-icons/FontAwesome';
import FIcon from 'react-native-vector-icons/Feather';
import MIcon from 'react-native-vector-icons/MaterialIcons';

// UI
import { Appbar } from 'react-native-paper';

import { useDispatch, useSelector } from 'react-redux';
import { themeMode } from '../redux/actions';

const Navigation = () => {

  const mode = useSelector(state => state.theme);
  const dispatch = useDispatch();


  const styles = StyleSheet.create({
    fixTop: {
      position: 'absolute',
      backgroundColor: mode === "light" ? "#ccc" : "#808080",
      left: 0,
      right: 0,
      top: 700,
    },
    btnBottom: {
      height: "100%",
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textLabel: {
      color: mode === "light" ? "black" : "white",
      fontSize: 14,
      marginTop: 4,
      fontWeight: 'bold'
    },
    iconColor: {
      color: mode === "light" ? "black" : "white",

    }
  });

  const modeChange = () => {

    if (mode === "light") {
      dispatch(themeMode("dark"));
    }
    else {
      dispatch(themeMode("light"));
    }
  }

  return (
    <Appbar style={styles.fixTop}>
      <TouchableOpacity style={styles.btnBottom}>
        <FaIcon name="home" size={22} style={styles.iconColor} />
        <Text style={styles.textLabel}>HOME</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnBottom}>
        <FaIcon name="user" size={22} style={styles.iconColor} />
        <Text style={styles.textLabel}>PROFILE</Text>
      </TouchableOpacity>
      {mode === "light" ? <TouchableOpacity style={styles.btnBottom} onPress={modeChange}>
        <FaIcon name="moon-o" size={22} style={styles.iconColor} />
        <Text style={styles.textLabel}>DARK</Text>
      </TouchableOpacity> : <TouchableOpacity style={styles.btnBottom} onPress={modeChange}>
        <FIcon name="sun" size={22} style={styles.iconColor} />
        <Text style={styles.textLabel}>LIGHT</Text>
      </TouchableOpacity>}

      <TouchableOpacity style={styles.btnBottom}>
        <MIcon name="logout" size={22} style={styles.iconColor} />
        <Text style={styles.textLabel}>LOGOUT</Text>
      </TouchableOpacity>
    </Appbar>
  );
};



export default Navigation;
