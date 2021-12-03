import React,{useState} from 'react';
import {View,Text,TouchableOpacity,Alert} from 'react-native';
import styles from '../styles/SignCreateStyles/SignInSignUpStyles';
import InputText from '../components/atoms/SignInCreate/InputText';
import ButtonSignCreate from '../components/atoms/SignInCreate/ButtonSignCreate';

import {signInCreateConstants} from '../utils/Constants/SignCreateConstants';

import auth from '@react-native-firebase/auth';



import emailIcon from '../assets/images/email.png'
import passwordIcon from '../assets/images/password.png'

const SignIn = ({navigation})=>
{
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    function loginFirebase(){
        auth().signInWithEmailAndPassword(userEmail,userPassword)
        .then(() => {
            console.log('Usuario Logueado');            
            navigation.navigate('Home')
        })
        .catch(error => {            
            if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
            }

            console.error(error);
        });                    
    }


    return(
        <View style={styles.mainContainer}>

            <View style={styles.mainContent}>
                <Text style={styles.signinText}>{signInCreateConstants.signinText}</Text>   
                <InputText emailUser={setUserEmail} placeholder={signInCreateConstants.emailText} imagePath={emailIcon}></InputText>  
                <InputText passwordUser ={setUserPassword} secureEntryValue={true} placeholder={signInCreateConstants.passwordText} imagePath={passwordIcon}></InputText> 
                <Text style={styles.forgotText}>{signInCreateConstants.forgotPassword}</Text>  
                <ButtonSignCreate triggerLogin={loginFirebase} navigation={navigation} ButtonText={signInCreateConstants.signinText}></ButtonSignCreate> 
            </View>
            
            <TouchableOpacity onPress={()=>{navigation.navigate('CreateAccount')}}>
                <Text style={styles.textOption}>{signInCreateConstants.createAccountText}</Text>                                               
            </TouchableOpacity>            
        </View>        
    );
}

export default SignIn;
