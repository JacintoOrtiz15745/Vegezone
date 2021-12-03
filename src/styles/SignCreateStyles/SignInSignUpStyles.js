import React from 'react';
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,    
        backgroundColor:'#67bdb9'            
    },
    mainContent:{
        flex:6,
        backgroundColor:'#ffffff',
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50,
        paddingTop:50,        
        paddingLeft:20,
        paddingRight:20        
    }, 
    signinText:{
        textAlign:'center',
        fontSize:25,
        marginBottom:40,
        color:'#9eacb8'
    },  
    forgotText:{
        fontSize:17,
        color:'#9eacb8',
        textAlign:'center',
        marginTop:25
    },     
    textOption:{                    
        textAlign:'center',
        fontSize:17,
        marginBottom:40,
        marginTop:40,
        color:'white',
        fontWeight:'100'                     
    }
})

export default styles;