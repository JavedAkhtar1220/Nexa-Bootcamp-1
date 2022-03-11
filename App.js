import React, { useEffect } from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native';

// Pages 
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import { useSelector, useDispatch } from 'react-redux';

// Firebase 
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from './src/screens/firebase';
import { doc, getDoc } from "firebase/firestore";

import { checkAuth, userData } from './src/redux/actions';

const Stack = createNativeStackNavigator();

const App = () => {

  const selector = useSelector(state => state.isLogin);
  const dispatch = useDispatch();

  const getData = async userId => {

    const docRef = await getDoc(doc(db, "users", userId));

    if (docRef.exists()) {

      dispatch(userData(docRef.data()));

    }

  }

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        dispatch(checkAuth(true));
        getData(user.uid);
      }
      else {
        dispatch(checkAuth(false));
      }
    })
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {selector ? (
          <Stack.Screen component={Home} name="Home" options={{ headerShown: false }} />
        )
          : (
            <>
              <Stack.Screen component={Login} name="Login" />
              <Stack.Screen component={Register} name="Register" />
            </>
          )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;