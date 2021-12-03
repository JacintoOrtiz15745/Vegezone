import React from 'react';
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    mainContainer:{
        flexDirection:'row',                
        marginTop:30,
        paddingLeft:10,
        borderWidth: 0.1,
        borderRadius: 10,                        
        shadowOffset: { width: 100, height: 200 },
        shadowOpacity: 0.1,                        
    },
    imageStyles:{
        width:30,
        height:30,
        alignSelf:'center'
    },
    inputStyles:{         
        width:'95%'              
    }
})

export default styles;