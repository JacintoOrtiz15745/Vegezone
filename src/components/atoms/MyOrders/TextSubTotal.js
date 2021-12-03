import React,{useState} from 'react';
import {Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../../../styles/MyOrdersStyles/TextSubTotalStyles';

const TextSubTotal = ()=>{

    const [subTotal, setSubTotal] = useState(null);

    AsyncStorage.getItem('subTotal')
        .then((res)=>{    
            setSubTotal(res);                                
        })

        return(
            <Text style={styles.textTotal}>SubTotal = ${subTotal}</Text>
        )
}

export default TextSubTotal;
