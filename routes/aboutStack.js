import React, { useState } from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import About from '../screens/about';
import CustomHeader from '../shared/header';

const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <CustomHeader title='About GameZone' navigation={navigation} />
        )
      };
    }
  }
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: {
      backgroundColor: '#ddd',
      height: 80
    }
  }
});

export default AboutStack;
