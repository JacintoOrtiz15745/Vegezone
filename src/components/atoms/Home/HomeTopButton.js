import React from 'react';
import {TouchableOpacity,Image} from 'react-native';

import styles from '../../../styles/HomeStyles/TopButtonStyles'

const HomeTopButton = ({imagePath,navigation})=>{        
    return(
        <TouchableOpacity onPress={()=>{
            if(imagePath == 7)
            {
                navigation.navigate('MyOrders');
            }
            else{
                navigation.openDrawer();                
            }
        }}>
            <Image style={styles.buttonStyles} source={imagePath}></Image>            
        </TouchableOpacity>
    );
}

export default HomeTopButton;

