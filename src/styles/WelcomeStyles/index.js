import {StyleSheet} from 'react-native';
import {colors} from '../Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.green,  
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    opacity: 0.2,
  },
  subcontainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute', 
    width: '100%',
    height: '100%',
    paddingTop: 100,
    paddingBottom: 100,
  },  
  title: {
    color: 'white',
    fontSize: 55,
    fontFamily: 'Courgette-Regular'
  }, 
  icon: {
    marginTop: 0, 
    alignSelf: 'center',
    marginTop: 50, 
    width: 150,
    height: 150,
  },
  button: {
    backgroundColor: colors.greenbutton,
    width: '100%',
    height: 70,
    justifyContent: 'center', 
  },
  textButton: {
    color: colors.white,
    fontSize: 28, 
    alignSelf: 'center',
    fontFamily: 'SFProText-Semibold',
  },
});
