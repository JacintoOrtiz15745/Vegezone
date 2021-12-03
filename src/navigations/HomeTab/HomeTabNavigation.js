import React from 'react'
import { View, Text, TouchableOpacity, Image, Button } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../../scenes/Welcome';
import SignIn from '../../scenes/SignIn';
import CreateAccount from '../../scenes/CreateAccount';
import Home from '../../scenes/Home';
import ProductDetails from '../../scenes/ProductDetails';
import Icon from 'react-native-vector-icons/Feather';
import IconMat from 'react-native-vector-icons/MaterialIcons'
import MyOrders from '../../scenes/MyOrders';
import ConfirmationOrder from '../../scenes/OrderNumber';

const Stack = createStackNavigator();

const HomeStackTab = ({navigation}) => {
    return (
         <Stack.Navigator>          
            <Stack.Screen name="HomeNavigation" component={Home} options={{ headerShown: false}}/>
            <Stack.Screen name="ProductDetails" component={ProductDetails} 
            options={{
                headerTintColor: '#A5BCD0',
                headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                headerTitleAlign:'Details',
                headerLeft: () => (
                        <Icon name={'menu'} size={32} style={{padding:20}} color={'#A5BCD0'} onPress={()=>{navigation.openDrawer()}}></Icon>    
                        // <Image source={require('../../assets/images/menu.svg')} onPress={()=>{navigation.openDrawer()}}></Image>           
                 ),
                 headerStyle:{
                   elevation:0
                 }
                }}
            />
             <Stack.Screen name="MyOrders" component={MyOrders} 
             options={{ 
                headerTintColor: '#A5BCD0',
                headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                headerTitleAlign:'My orders',
                headerLeft: () => (
                        <Icon name={'menu'} size={32} style={{padding:20}} color={'#A5BCD0'} onPress={()=>{navigation.openDrawer()}}></Icon>    
                        // <Image source={require('../../assets/images/menu.svg')} onPress={()=>{navigation.openDrawer()}}></Image>           
                 ),
                 headerRight:() =>(
                    <IconMat name={'shopping-cart'} size={32} style={{padding:20}} color={'#A5BCD0'}></IconMat>    
                 ),
                 headerStyle:{
                   elevation:0
                 }
                }}/>
            <Stack.Screen name="ConfirmationOrder" component={ConfirmationOrder}/>
         </Stack.Navigator>       
    )
}

export default HomeStackTab;
