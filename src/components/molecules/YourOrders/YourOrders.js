import React from 'react';
import {View, Text} from 'react-native';
import YourOrdersNavbar from '../../atoms/YourOrders/YourOrdersNavbar';
import YourOrdersMain from '../../atoms/YourOrders/YourOrdersMain';
import { styles } from '../../../styles/YourOrders/YourOrders'; 

const YourOrders = () => {
  return (
    <View style={styles.main}>
      <YourOrdersNavbar></YourOrdersNavbar>
      <YourOrdersMain></YourOrdersMain>
    </View>
  );
};

export default YourOrders;
