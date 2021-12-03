import React from 'react';
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor: 'white'
    },
    topSection:{
        backgroundColor:'#3cb3ab',
        flexDirection:'row',
        justifyContent:'space-around',
        padding:15
    },
    textTop:{
        color:'white',
        fontSize:20,
        fontWeight:'600'
    },
    mainContentDetails:{                        
        flex:5
    },   
    textProduct:{
        marginLeft:50,  
        marginTop:20,
        fontSize:20,
        color:'#748a9d',
        fontWeight:'bold'          
    },
    textPrice:{
        marginLeft:50,
        marginTop:8,
        color:'#b4b4b4'
    },
    textDescription:{
        marginLeft:50,
        marginRight:25,
        textAlign:'justify',
        color:'#b4b4b4'     
    },
    containerButton:{
        flex:1,        
        marginTop:15
    },
    buttonCart:{
        backgroundColor:'#3cb3ab',  
        height:50,
        alignItems:'center',
    },
    textButton: {
         color: 'white',
         justifyContent: 'center',
         top:10,
         fontSize:18,
         fontWeight:'bold'          
    },
    containerImage:{
        width:'80%',
        height:'38%',
        alignSelf:'center',
        marginTop:50,
        borderRadius:30,
        shadowColor: 'black',
        shadowOffset: {
    	width: 0,
	    height: 3,
        },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 10,
    },
    imageStyles:{
        width:'100%',
        height:'100%',
        borderRadius: 20,
    },
    counterContainer:{
        flexDirection:'row',        
        paddingLeft:48,
        marginTop:30
    },
    counterText:{
        alignSelf:'center',
        marginLeft:5,
        marginRight:5,
        color:'#b4b4b4', 

    }
})

export default styles;
