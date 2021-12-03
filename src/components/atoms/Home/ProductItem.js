import React from 'react';
import {TouchableOpacity,Text,Image} from 'react-native';

import styles from '../../../styles/HomeStyles/productItemStyles'
const ProductItem = ({imageProduct,nameProduct,priceProduct,navigation})=>{
    return(
        <TouchableOpacity onPress={()=>{navigation.navigate('ProductDetails',
        {
            image:imageProduct,
            name:nameProduct,
            price:priceProduct
        }        
        )}} style={styles.itemStyles}>
            <Image style={styles.imageStyles} source = {{uri:imageProduct}}></Image>
            <Text style={styles.textName}>{nameProduct}</Text>
            <Text style={styles.textPrice}>{"$" + priceProduct}</Text> 
            <TouchableOpacity style={styles.addCartStyles}>
                <Text style={styles.addCartText}>Add To Cart</Text>
            </TouchableOpacity>           
        </TouchableOpacity>
    );
}
export default ProductItem;