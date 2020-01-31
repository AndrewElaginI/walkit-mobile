import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import React from 'react';

import CustomHeader from '../shared/header';
import Login from '../screens/login';
import Shift from '../screens/shift';

const screens = {
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login'
    }
    // navigationOptions: ({ navigation }) => {
    //   return {
    //     headerTitle: () => (
    //       <CustomHeader title='Login' navigation={navigation} />
    //     )
    //   };
    // }
  },
  Shift: {
    screen: Shift,
    navigationOptions: {
      title: 'Shift'
    }
  }
};

// home stack navigator screens
const LoginStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 80 }
  }
});

export default createAppContainer(LoginStack);
