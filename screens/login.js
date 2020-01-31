import React, { useEffect, useState } from 'react';
import { View, Text, AsyncStorage, Button } from 'react-native';

import { globalStyles } from '../assets/styles/global';

export default function Login({ navigation }) {
  useEffect(() => {
    console.log('Render');
    _retrieveUser(navigation);
  }, []);

  const [user, setUser] = useState({});

  _storeUser = async user => {
    try {
      await AsyncStorage.setItem('user', user);
    } catch (error) {
      // Error saving data
      console.log(error);
    }
  };

  _fetchUser = async () => {
    try {
      // https://jsonplaceholder.typicode.com/users/1
      const user = await fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .then(user => user);
      return user;
    } catch (error) {
      console.log(error);
    }
  };

  _retrieveUser = async navigation => {
    try {
      const user = await AsyncStorage.getItem('user');
      if (user !== null) {
        // We have data!!
        console.log(user);
        setUser(user);
        navigation.navigate('Shift', { user });
      } else {
        _fetchUser().then(user => {
          if (user) {
            console.log('Fetched User', user);
            _storeUser(user);
            setUser(user);
            navigation.navigate('Shift', { user });
          }
        });
      }
    } catch (error) {
      // Error retrieving data
      console.log(error);
    }
  };

  return (
    <View style={globalStyles.container}>
      <Text>Login Screen</Text>
      {user && (
        <Button
          title='To Shift page'
          onPress={() => navigation.navigate('Shift', { user })}
        />
      )}
    </View>
  );
}
