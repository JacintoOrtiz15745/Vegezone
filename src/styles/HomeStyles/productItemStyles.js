import React from 'react'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    itemStyles:{    
        width:80,  
        margin:20,  
        borderRadius:10  
    },
    imageStyles:{
        width:'100%',
        height:80,
        borderRadius:10,        
    },
    textName:{
        textAlign:'center',
        color:'#9eacb8'
    },
    textPrice:{
        textAlign:'center',
        color:'#9eacb8'
    },
    addCartStyles:{    
        height:20,    
        borderWidth:1, 
        borderColor:'green',       
        borderRadius:5
    },
    addCartText:{
        textAlign:'center',
        fontSize:10,
        marginTop:2,
        color:'#9eacb8'
    }
})

export default styles;
