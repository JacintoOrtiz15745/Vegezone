import React from 'react';
import {TextInput,View,Image} from 'react-native'
import styles from '../../../styles/SignCreateStyles/inputTextStyles'

const InputText = ({placeholder,imagePath,secureEntryValue,emailUser,passwordUser,newEmail,newPassword})=>
{
    return(   
        <View style={styles.mainContainer}>
            <Image style={styles.imageStyles} source={imagePath}></Image>
            <TextInput onChangeText={(text)=>{
                if(placeholder ==='Email'){
                    emailUser(text);                
                }
                else if(placeholder === 'Password'){
                    passwordUser(text);
                }
                else if(placeholder === 'New Email')
                {
                    newEmail(text);
                }            
                else if(placeholder === 'New Password')
                {
                    newPassword(text);
                }
            }}
            secureTextEntry={secureEntryValue} style={styles.inputStyles} placeholder={placeholder}></TextInput>                                                             
        </View>                     
    );
}

export default InputText;

