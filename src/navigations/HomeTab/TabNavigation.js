import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {View,Text,TouchableOpacity,Image} from 'react-native';
import Home from '../../scenes/Home';
import HomeStackNavigation from '../StackNavigation/HomeStackNavigation';
// import DetailsStackNavigation from './StackNavigation/DetailsStackNavigation';
import Icon from 'react-native-vector-icons/Feather';

import HomeStackTab from './HomeTabNavigation'
import MyOrders from '../../scenes/MyOrders'
import ConfirmationOrder from '../../scenes/OrderNumber';



function ItemMenu(props)
{
    return(
        <TouchableOpacity style={styles.itemMenuContainer}>
            <Text style={styles.itemText}>{props.itemText}</Text>
        </TouchableOpacity>
    )
}

function CustomDrawerContent(props) {
  return (
      <View>
        <ItemMenu imageIcon={homeIcon} itemText="Home" onPress={()=> props.navigation.navigate('Home')}/> 
      </View>        
  );
}

const Tab = createMaterialBottomTabNavigator();
function MainTabScreen() {
  return (
    <Tab.Navigator
    activeColor="#f0edf6"
    inactiveColor="#3e2465"
    barStyle={{ backgroundColor: 'white' }}
    drawerContent={props => <CustomDrawerContent {...props}/>}>
      <Tab.Screen name="Home" component={HomeStackTab}
      options={{
        tabBarLabel:'',
        tabBarIcon:() =>{
          const image = require('../../assets/images/home.jpeg')
          return(
            <Image source={image} style={{height:30, width: 30}}></Image>  
          )   
      }
      }}
      />      
      <Tab.Screen name="Details" component={HomeStackTab} 
            options={{
              tabBarLabel:'',
              tabBarIcon:() =>{
                  const image = require('../../assets/images/offers.jpeg')
                  return(
                    <Image source={image} style={{height:30, width: 30}}></Image>  
                  )   
              }
            }}/>        
      <Tab.Screen name="Button" component={HomeStackTab} 
            options={{
              tabBarLabel:'',
              tabBarIcon:() =>{
                const image = require('../../assets/images/button.jpeg')
                return(
                  <Image source={image} style={{height:50, width: 50, marginTop:-15}}></Image>  
                )   
            }
            }}/>  
            <Tab.Screen name="MyOrders" component={MyOrders} 
            options={{
              tabBarLabel:'',
              tabBarIcon:() =>{
                const image = require('../../assets/images/cart.jpeg')
                return(
                  <Image source={image} style={{height:30, width: 30}}></Image>  
                )   
            }
            }}/>  
            <Tab.Screen name="ConfirmationOrder" component={ConfirmationOrder} 
            options={{
              tabBarLabel:'',
              tabBarIcon:() =>(
                  <Icon name={'bell'} size={26}  color={'#748A9C'}></Icon>           
              )
            }}/>  
    </Tab.Navigator>
  );
}



export default MainTabScreen;
