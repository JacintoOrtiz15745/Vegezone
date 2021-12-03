import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../scenes/Welcome';
import SignIn from '../scenes/SignIn';
import CreateAccount from '../scenes/CreateAccount';
import HomeNavigation from '../navigations/HomeNavigation';
import ProductDetails from '../scenes/ProductDetails';
import MyOrders from '../scenes/MyOrders';


const Stack = createStackNavigator();

const MainNavigation = () => {
    return (
         <Stack.Navigator >
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="CreateAccount" component={CreateAccount} />            
            <Stack.Screen name="HomeNavigation" component={HomeNavigation} />
            <Stack.Screen name="ProductDetails" component={ProductDetails} />
            <Stack.Screen name="MyOrders" component={MyOrders} />
         </Stack.Navigator>       
    )
}

export default MainNavigation;
