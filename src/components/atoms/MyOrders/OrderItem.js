import React from 'react';
import {Text,Image,View} from 'react-native';

import styles from '../../../styles/MyOrdersStyles/OrderItemStyles';

const OrderItem = ({imageProduct,nameProduct,priceProduct,quantity,total})=>{
    return(
        <View style={styles.itemContainer}>

            <View style={styles.imageContainer}>
                <Image source={{uri:imageProduct}} style={styles.imageStyles}></Image>
            </View>   

            <View style={styles.detailsContainer}>
                <Text style={styles.itemName}>{nameProduct}</Text>
                <Text style={styles.itemPrice}>{"Individual Price" + " " + "$" + priceProduct}</Text>
                <Text style={styles.itemPrice}>{"Quantity:" + " " + quantity}</Text>
                <Text style={styles.itemPrice}>{"Total:" + " " + "$" + total}</Text>
            </View>            
        </View>
    );
}

export default OrderItem;