import React from 'react';
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    itemContainer:{        
        width:'100%',
        height:150,    
        flexDirection:'row',
        marginTop:25     
    },
    imageContainer:{        
        width:'40%',                
    },
    imageStyles:{
        width:'100%',
        height:'100%',
        borderRadius:25        
    },
    detailsContainer:{        
        width:'60%',
        paddingLeft:30
    },
    itemName:{
        color:'#b4b4b4',
        fontSize:18,
        fontWeight:'bold'
    },
    itemPrice:{
        color:'#b4b4b4'        
    }
})

export default styles;