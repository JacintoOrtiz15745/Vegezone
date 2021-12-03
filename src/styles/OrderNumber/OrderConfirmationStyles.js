import {StyleSheet} from 'react-native';

export default stylesOrder = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#3cb3ab',
    },
    image: {
      flex: 1,
      justifyContent: 'flex-start',
      paddingHorizontal: 1,
      paddingBottom: 40,
    },
    order: {
      flex: 3,
      backgroundColor: '#fff',
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      paddingHorizontal: 20,
      paddingVertical: 30,
    },
    size: {
      width: 360,
      height: 500,
      resizeMode: 'cover',
      opacity: 0.2,
      alignItems: 'flex-start',
    },
    text: {
      fontSize: 22,
      color: 'gray',
      fontWeight: '500',
      justifyContent: 'center',
      alignItems: 'center',
    },
    orderText: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10
    },
    circule: {
      width: 120,
      height: 120,
      borderRadius: 60,
      backgroundColor: 'white',
      top: -70,
      marginLeft: '35%',
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: "gray",
      shadowOffset: {
        width: 2,
        height: 5,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 5,
    },
    shop: {
      width: 70,
      height: 70,
    },
    textOrder: {
      color: '#54b5af',
      fontSize: 30,
      fontWeight: '500'
    },
    textTop:{
      color:'white',
      fontSize:20,
      fontWeight:'600'
  }
  });

