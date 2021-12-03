import React,{useState,useEffect} from 'react';

import {View, Text, ImageBackground, TouchableOpacity,FlatList,Alert} from 'react-native';
import styles from '../styles/MyOrdersStyles/MyOrdersStyles';
import HomeTopButton from '../components/atoms/Home/HomeTopButton';
import buttonMenu from '../assets/images/burguerButton.png';
import buttonCart from '../assets/images/shoppingCart.png';

import OrderItem from '../components/atoms/MyOrders/OrderItem';

import Icon from 'react-native-vector-icons/Feather';

import TextSubTotal from '../components/atoms/MyOrders/TextSubTotal'

import AsyncStorage from '@react-native-async-storage/async-storage';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


const MyOrders = ({navigation})=>{   

    const [DATA,setDATA] = useState(null);             
    
    AsyncStorage.getItem('miOrdersStorage')
        .then((res)=>{    
            var miDataCarrito = JSON.parse(res);                         
            setDATA(miDataCarrito);                    
        })   
        
    
        function saveOrderDataFirebase()
        {
            firestore().collection('vegezoneData').doc(auth().currentUser.uid).get()
            .then(documentSnapshot => {            
                if (documentSnapshot.exists) {  
                    //Añadimos subtotal a la orden//   
                    AsyncStorage.getItem('subTotal')
                    .then((res)=>{    
                        var dataWithSubTotal = DATA.push({res}); 
                        setDATA(dataWithSubTotal);                                               
                        
                        //Jalamos la data de firebase y se la pasamos como string//
                        var userData = documentSnapshot.data();
                        userData.MyOrders.push(JSON.stringify(DATA));
                        firestore().collection('vegezoneData').doc(auth().currentUser.uid)
                        .set(userData);

                        //Reiniciamos el storage de la orden para las nuevas ordenes//
                        AsyncStorage.removeItem('miOrdersStorage')

                        let arrayStorage = [];                    
                        let storageJSON = JSON.stringify(arrayStorage)
                        AsyncStorage.setItem('miOrdersStorage', storageJSON);
                    })                                                            
                }
            });      
        } 
                

    const renderItem = ({ item }) => {                
        return (
          <OrderItem            
            imageProduct={item.image}  
            nameProduct={item.name}
            priceProduct={item.price} 
            quantity={item.quantityToOrder}
            total={item.total}                                
          />          
        );
      }                            

    return(
        <View style={styles.mainContainer}>
            <ImageBackground source={require('../assets/images/backgroundVegezone.jpeg')} style={styles.size}></ImageBackground>                       

            <View style={styles.topSection}>
                <Icon name={'menu'} size={35}  color={'white'} onPress={()=>{navigation.openDrawer()}}></Icon>
                <Text View style={styles.textTop}>My Orders</Text>
                <HomeTopButton imagePath={buttonCart}></HomeTopButton>                
            </View>

             <View style={styles.topSection}>                              
                <TextSubTotal></TextSubTotal>                
                <TouchableOpacity onPress={()=>{
                    saveOrderDataFirebase();
                    navigation.navigate("ConfirmationOrder");
                }} style={styles.buttonCheck}>
                    <Text style={styles.textButton}>Check Out Now</Text>
                </TouchableOpacity>
            </View>        

            <View style={styles.mainContent}>
            <FlatList                                                                                                                          
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}                                                                                    
                />
            </View>
        </View>        
    );
}

export default MyOrders;
