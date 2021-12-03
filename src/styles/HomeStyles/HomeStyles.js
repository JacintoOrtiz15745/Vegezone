import React from 'react';
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor:'#54b5af',
        flex:1
    },
    topOptionsContainer:{
        backgroundColor:'#54b5af',
        flexDirection:'row',
        justifyContent:'space-around',
        padding:20
    },
    homeText:{
        color:'#ffffff',
        fontSize:20
    },   
    productListContainer:{
        flex:1,
        backgroundColor:'#ffffff',
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        paddingLeft:25,
        paddingRight:25
    }
})

export default styles;