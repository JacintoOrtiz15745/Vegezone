import React from 'react';
import {TouchableOpacity,Text,Image} from 'react-native'
import styles from '../../../styles/SignCreateStyles/ButtonSignCreateStyles'

const ButtonSignCreate = ({ButtonText,navigation,triggerLogin,triggerCreate})=>
{
    return(                
        <TouchableOpacity onPress={()=>{
            if(ButtonText === 'Sign In'){
                triggerLogin();                
            }else if(ButtonText === 'Create Account'){
                triggerCreate();
                navigation.navigate('HomeNavigation')                                
            }                                                     
        }} style={styles.buttonStyles}>
            <Image style={styles.buttonImage} source={require('../../../assets/images/arrowButton.png')}></Image>
            <Text style={styles.buttonText}>{ButtonText}</Text>
        </TouchableOpacity>        
    );
}

export default ButtonSignCreate;
