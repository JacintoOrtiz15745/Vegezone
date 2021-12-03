import React from 'react'
import {View, ImageBackground, Text, Image} from 'react-native';
import stylesOrder from '../styles/OrderNumber/OrderConfirmationStyles';
import Icon from 'react-native-vector-icons/Feather';
import HomeTopButton from '../components/atoms/Home/HomeTopButton';
import buttonCart from '../assets/images/shoppingCart.png';

const ConfirmationOrder = ({navigation}) => (
    <>
      <View style={stylesOrder.container}>
        <View style={stylesOrder.image}>
          <ImageBackground
            source={require('../assets/images/cover.png')}
            style={stylesOrder.size}></ImageBackground>
            <View style={stylesOrder.topSection}>
                <Icon name={'menu'} size={35}  color={'white'} onPress={()=>{navigation.openDrawer()}}></Icon>
                <Text View style={stylesOrder.textTop}>My Orders</Text>
                <HomeTopButton imagePath={buttonCart}></HomeTopButton>                
            </View>
        </View>
        <View style={stylesOrder.order}>
          <View style={stylesOrder.circule}>
            <Image
              source={require('../assets/images/shopIcon.png')}
              style={stylesOrder.shop}></Image>
          </View>
          <View style={stylesOrder.orderText}>
            <Text style={stylesOrder.text}>Order placed.</Text>
            <Text style={stylesOrder.text}>Your order number is</Text>
            <Text style={stylesOrder.textOrder}>#5412</Text>
          </View>
        </View>
      </View>
    </>
  );

  export default ConfirmationOrder;
