import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from '../../../styles/YourOrders/YourOrders';

const YourOrderstable = () => {
  return (
    <View>
      <View style={styles.tableProducts}>
        <Text style={styles.productColumn}>Broccoli</Text>
        <Text style={styles.quantityColumn}>2 heads</Text>
        <Text style={styles.priceColumn}>$3.85</Text>
      </View>

      <View style={styles.tableDelivery}>
        <View style={styles.deliveryContainer}>
          <Text style={styles.delivery}>Delivery</Text>
        </View>
        <Text style={styles.priceDelivery}>$4.99</Text>
      </View>

      <View style={styles.tableProducts}>
        <View style={styles.shippedContainer}>
          <Image
            style={styles.shippedIcon}
            source={require('../../../assets/images/check.png')}></Image>
          <Text style={styles.shipped}>Shipped</Text>
        </View> 
        <Text style={styles.total}>Total</Text>
        <Text style={styles.totalPrice}>$14.29</Text>
      </View>
    </View>
  );
};

export default YourOrderstable;
