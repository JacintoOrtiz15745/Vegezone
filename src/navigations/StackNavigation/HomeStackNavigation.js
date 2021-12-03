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
import OrderConfirmation from '../../scenes/OrderNumber'
import ConfirmationOrder from '../../scenes/OrderNumber';

const Stack = createStackNavigator();

const HomeStackNavigation = ({navigation}) => {
    return (
         <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false}}/>
            <Stack.Screen name="CreateAccount" component={CreateAccount} options={{ headerShown: false}}/>            
            <Stack.Screen name="HomeNavigation" component={Home} options={{ headerShown: false}}/>
            <Stack.Screen name="ProductDetails" component={ProductDetails} 
            options={{
                headerTintColor: '#A5BCD0',
                headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                headerTitleAlign:'Details',
                headerLeft: () => (
                        <Icon.Button name={'menu'} size={35} style={{padding:20}} color={'#A5BCD0'} onPress={()=>{navigation.openDrawer()}}></Icon.Button>    
                        // <Image source={require('../../assets/images/menu.svg')} onPress={()=>{navigation.openDrawer()}}></Image>           
                 ),
                 headerStyle:{
                   elevation:0
                 }
                }}
            />
            <Stack.Screen name="MyOrders" component={MyOrders}/>
            <Stack.Screen name="ConfirmationOrder" component={ConfirmationOrder}/>
         </Stack.Navigator>       
    )
}

export default HomeStackNavigation;
