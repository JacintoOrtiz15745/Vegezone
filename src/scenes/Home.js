import React from 'react';
import {View,Text,FlatList, TouchableOpacity} from 'react-native';

import HomeTopButton from '../components/atoms/Home/HomeTopButton';
import ProductItem from '../components/atoms/Home/ProductItem';

import styles from '../styles/HomeStyles/HomeStyles';

import buttonMenu from '../assets/images/burguerButton.png';
import buttonCart from '../assets/images/shoppingCart.png';

import productsData from '../utils/Constants/productData';

import AsyncStorage from '@react-native-async-storage/async-storage';


const Home = ({navigation}) =>
{    
    let arrayStorage = [];
    console.log("primer storage definido" + arrayStorage);
    let storageJSON = JSON.stringify(arrayStorage)
    AsyncStorage.setItem('miOrdersStorage', storageJSON);

    let subTotal = 0;
    let subTotalJson = JSON.stringify(subTotal);
    AsyncStorage.setItem('subTotal', subTotalJson);

    
    const renderItem = ({ item }) => {                
        return (
          <ProductItem
            navigation={navigation}
            imageProduct={item.image}  
            nameProduct={item.name}
            priceProduct={item.price}                                 
          />          
        );
      }
    
    return(
        <View style={styles.mainContainer}>            
            <View style={styles.topOptionsContainer}>
                <HomeTopButton navigation={navigation} imagePath={buttonMenu}></HomeTopButton>                
                <Text style={styles.homeText}>Home</Text>
                <HomeTopButton navigation={navigation} imagePath={buttonCart}></HomeTopButton> 
            </View>

            <View style={styles.productListContainer}>
                <FlatList                
                    key={'#'}                                                    
                    horizontal={false}                    
                    data={productsData}
                    renderItem={renderItem}
                    keyExtractor={(item) => "#" + item.id}  
                    numColumns={3}                                                                       
                />
            </View>            

        </View>
    );
}

export default Home;
