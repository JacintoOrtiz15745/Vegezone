import React,{useState} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import styles from '../styles/SignCreateStyles/SignInSignUpStyles';
import InputText from '../components/atoms/SignInCreate/InputText';
import ButtonSignCreate from '../components/atoms/SignInCreate/ButtonSignCreate';

import {signInCreateConstants} from '../utils/Constants/SignCreateConstants'

import userIcon from '../assets/images/user.png'
import emailIcon from '../assets/images/email.png'
import passwordIcon from '../assets/images/password.png'

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';



const CreateAccount = ({navigation})=>{
    
    
    const [newUserEmail, setNewUserEmail] = useState('');
    const [newUserPassword, setNewUserPassword] = useState('');

    function CreateUser()
    {
        auth().createUserWithEmailAndPassword(newUserEmail, newUserPassword)
        .then(()=>{

            console.log('usuario creado')

            firestore().collection('vegezoneData').doc(auth().currentUser.uid)
            .set({
                MyOrders:[]
            })

            navigation.navigate('Home')
        })
    }

    return(
        <View style={styles.mainContainer}>

        <View style={styles.mainContent}>
            <Text style={styles.signinText}>{signInCreateConstants.createAccountText}</Text>   

            <InputText placeholder={signInCreateConstants.nameText} imagePath={userIcon}></InputText> 

            <InputText newEmail={setNewUserEmail} placeholder={"New Email"} imagePath={emailIcon}></InputText>  

            <InputText newPassword={setNewUserPassword} secureEntryValue={true} placeholder={"New Password"} imagePath={passwordIcon}></InputText> 

            <Text style={styles.forgotText}>{signInCreateConstants.forgotPassword}</Text>  
            <ButtonSignCreate triggerCreate={CreateUser} navigation={navigation} ButtonText={signInCreateConstants.createAccountText}></ButtonSignCreate> 
        </View>
        
        <TouchableOpacity onPress={()=>{navigation.navigate('SignIn')}}>
            <Text style={styles.textOption}>{signInCreateConstants.signinText}</Text>                                               
        </TouchableOpacity>            
    </View>
    );
}

export default CreateAccount;
