import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import { styles } from '../../../styles/YourOrders/YourOrders';

const YourOrdersNavbar = () => {
  return (
    <View style={styles.navbarContainer}>
      <TouchableOpacity><Image style={styles.iconBack } source={require('../../../assets/images/back-arrow.png')}></Image></TouchableOpacity>
      <View style={styles.navbarTitleContainer}>
        <Text style={styles.navbarTitle}>Your Orders</Text>
      </View>
    </View>
  );
};

export default YourOrdersNavbar;
