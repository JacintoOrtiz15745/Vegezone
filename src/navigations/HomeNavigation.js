import React from 'react';
// import DrawerNavigation from '../navigations/DrawerNavigation';
import {NavigationContainer} from '@react-navigation/native';
import { View } from 'react-native';
import MainTabScreen from './HomeTab/TabNavigation'


const HomeNavigation = () => {
  return (        
      <MainTabScreen></MainTabScreen>
  );
};

export default HomeNavigation;
