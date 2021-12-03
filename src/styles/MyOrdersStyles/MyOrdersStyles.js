import React from 'react';
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,   
        backgroundColor:'#3cb3ab',         
    },    
      size: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        opacity: 0.2,
        alignItems: 'flex-start',
        position:'absolute'
      },
      topSection: {
        flexDirection: 'row',
        justifyContent:'space-around',
        padding:15
      },
        textTop:{
            color:'white',
            fontSize:20,
            fontWeight:'bold'
      },
      mainContent: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 20          
      },
      backgroundColortextTotal:{
          fontSize:20
      },
      textTotal:{
          color:'white',
          fontWeight: 'bold'          
      },      
      buttonCheck: {
          borderWidth:2,
          borderBottomColor: 'white',
          borderColor: 'white',
          borderRadius: 5,
          padding: 4
      },
      textButton:{
          fontSize:11,
          color:'white'
      }
})

export default styles;