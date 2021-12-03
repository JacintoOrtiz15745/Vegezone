import React from 'react';
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    buttonStyles:{
        backgroundColor:'#3cb3ab',
        marginTop:100,        
        height:50,
        justifyContent:'center',
        borderRadius:15,
        flexDirection:'row',
        paddingTop:15,
        paddingLeft:100,
        paddingRight:100,
        justifyContent:'space-around'
    },
    buttonText:{
        textAlign:'center',
        fontSize:17,
        color:'#ffffff'
    },
    buttonImage:{
        width:20,
        height:20, 
        marginTop:3       
    }
})

export default styles;