import * as React from 'react';
import { View, Text,Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem} from '@react-navigation/drawer';

import auth from '@react-native-firebase/auth';

import styles from '../../styles/DrawerMenuStyles/DrawerMenuStyles'
import Home from '../../scenes/Home'
import MyOrders from '../../scenes/MyOrders'
import MainTabScreen from '../HomeTab/TabNavigation';
import ConfirmationOrder from '../../scenes/OrderNumber'

import homeIcon from '../../assets/images/homeIcon.png'
import cartIcon from '../../assets/images/shoppingCart.png'
import priceIcon from '../../assets/images/priceTag.png'
import bellIcon from '../../assets/images/bellIcon.png'
import phoneIcon from '../../assets/images/phoneIcon.png'
import feedIcon from '../../assets/images/feedIcon.png'
import logoutIcon from '../../assets/images/logoutIcon.png'
import SignIn from '../../scenes/SignIn';
import Welcome from '../../scenes/Welcome';
import CreateAccount from '../../scenes/CreateAccount';

function ItemMenu(props)
{
    return(
        <TouchableOpacity onPress={props.navigation} style={styles.itemMenuContainer}>
            <Image style={styles.itemImage} source={props.imageIcon}></Image>
            <Text style={styles.itemText}>{props.itemText}</Text>
        </TouchableOpacity>
    )
}

function CustomDrawerContent(props) {
  return (
      <View>
        <View style={styles.topMenu}>
            <Text style={styles.titleMenu}>Vegetablely</Text>
            <Image style={styles.imageMenu} source={require('../../assets/images/shopIcon.png')} />
        </View>  

        <ItemMenu imageIcon={homeIcon} itemText="Home" navigation={()=> props.navigation.navigate('HomeNavigation')}/> 
        <ItemMenu imageIcon={cartIcon} itemText="My Orders"  navigation={()=> props.navigation.navigate('MyOrders')}/> 
        <ItemMenu imageIcon={priceIcon} itemText="My Orders"/> 
        <ItemMenu imageIcon={bellIcon} itemText="Notifications"/> 
        <ItemMenu imageIcon={bellIcon} itemText="Our Branches"/>
        <ItemMenu imageIcon={phoneIcon} itemText="Contact Us"/>
        <ItemMenu imageIcon={feedIcon} itemText="Feedback"/>
        <ItemMenu imageIcon={logoutIcon} itemText="Logout" navigation={()=> {
          auth().signOut()
          .then(() => {
            props.navigation.navigate('Welcome');
            console.log("sesion cerrada");
          });          
        }}/>
        
      </View>        
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
    drawerStyle={{
        backgroundColor: '#3cb3ab',
        width: 240,
      }}
    drawerContent={props => <CustomDrawerContent {...props}/>}>
      <Drawer.Screen name="Welcome" component={Welcome} />
      <Drawer.Screen name="SignIn" component={SignIn} options={{ headerShown: false}}/>
      <Drawer.Screen name="CreateAccount" component={CreateAccount} options={{ headerShown: false}}/> 
      <Drawer.Screen name='Home' component={MainTabScreen}></Drawer.Screen>
      <Drawer.Screen name="Details" component={MainTabScreen} />      
      <Drawer.Screen name="MyOrders" component={MainTabScreen}/> 
      <Drawer.Screen name="ConfirmationOrder" component={MainTabScreen}/>      
    </Drawer.Navigator>
  );
}

export default MyDrawer;
