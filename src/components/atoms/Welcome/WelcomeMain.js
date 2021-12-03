import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import {styles} from '../../../styles/WelcomeStyles/index';
import {WelcomeConstants} from '../../../utils/Constants/WelcomeConstants';

const WelcomeMain = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={require('../../../assets/images/cover.png')}
          style={styles.image}></ImageBackground>
      </View>
      <View style={styles.subcontainer}>
        <View style={styles.containerItems}>
          <Text style={styles.title}>{WelcomeConstants.Title}</Text>

          <Image 
            style={styles.icon}
            source={require('../../../assets/images/shopIcon.png')}></Image>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.textButton}>{WelcomeConstants.LetsShop}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeMain;
