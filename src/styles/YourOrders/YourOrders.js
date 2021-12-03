import {StyleSheet} from 'react-native';
import {colors} from '../Colors';

export const styles = StyleSheet.create({
  main: {
    backgroundColor: '#54b5af',
  },
  navbarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 100,
    justifyContent: 'space-between',
    paddingLeft: 20, 
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    backgroundColor: colors.white,
  },
  iconBack: {
    width: 32,
    height: 32,
  },
  navbarTitleContainer: {
    position: 'absolute',  
    top: 0,
    left: 25,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  navbarTitle: {
    fontSize: 25,
    color: colors.gray,
    fontFamily: 'SFProText-Semibold',
  },
  mainContainer: {
    marginTop: 20,
    backgroundColor: colors.white,
    height: '100%',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  orderContainer: {
    flexDirection: 'row',
    width: '85%',
    height: 80,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 15,
    shadowColor: colors.graylight,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
  },
  orderContainerOpen: {
    flexDirection: 'row',
    width: '85%',
    height: 80,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
    backgroundColor: colors.white,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    padding: 15,
  }, 
  Icon: {
    width: 15,
    height: 15,
  },
  headerText: {
    fontSize: 20,
    color: colors.gray,  
  },
  content: { 
    width: '85%',
    height: 'auto',
    paddingBottom: 25,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  tableProducts : {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  }, 
  productColumn: {
    fontSize: 20,
    color: colors.gray,
  },
  quantityColumn: {
    fontSize: 20,
    color: colors.graylight,
  },
  priceColumn: {
    fontSize: 20,
    color: colors.gray,
  },
  shippedContainer: {
    flexDirection: 'row',
  },
  shipped: {
    fontSize: 20,
    color: colors.green,
  },
  shippedIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  total: {
    fontSize: 20,
    color: colors.graylight,
  },
  totalPrice: {
    fontSize: 20,
    color: colors.gray,
  },
  tableDelivery : {
    flexDirection: 'row',
    width: '90%', 
    alignSelf: 'center', 
    marginTop: 20, 
  },
  deliveryContainer: { 
    position: 'absolute',  
    top: 0,
    left: 25,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  delivery: {  
    fontSize: 20,
    color: colors.graylight,  
  },
  priceDelivery: {  
    fontSize: 20,
    color: colors.gray,
    marginLeft: 'auto',
  },
});
