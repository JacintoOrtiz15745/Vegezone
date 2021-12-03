import React from 'react';
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    topMenu:{        
        paddingTop:25,
        paddingBottom:25                          
    },
    titleMenu:{
        alignSelf:'center',
        color:'white',
        fontSize:30,
        marginBottom:20,
        fontFamily: 'Courgette-Regular'
    },
    imageMenu:{
        alignSelf:'center',
        width:60,
        height:60
    },
    itemMenuContainer:{
        flexDirection:'row',        
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:30,
        marginTop:15
    },
    itemImage:{
        width:20,
        height:20,
        marginRight:30
    },
    itemText:{
        color:'white',        
    }
})

export default styles;