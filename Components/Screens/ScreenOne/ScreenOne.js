import React from 'react'
import { StyleSheet, Text, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Feather'

import { height, width } from '../../constants';
import CustomNavigationContainer from '../../navigation';


const ScreenOne = () => {
    return(
        <View>
        <View style={styles.iconsMainView}>
        <CustomNavigationContainer />
            <View style={styles.iconView}>
                <Ionicons name='search' color={'black'} size={30} />
            </View>
            <View style={styles.iconView}>
                <Ionicons name='shopping-bag' color={'black'} size={30} />
            </View>
        </View>
        <View style={styles.TopTextView}>
            <View style={styles.TextView}>
                <Text style={styles.textstyle}>Everyday care</Text>
                <Text style={styles.textstyle}>for Your Skin</Text>
            </View>
        </View>
        <View style={styles.bottomView}>
            <View>
                <View>
                    
                </View>
                <View>
                    <Text>Black Rose Petal</Text>
                    <Text>$52.50</Text>
                </View>
            </View>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    iconsMainView:{
        width: width,
        height:100,
        justifyContent:'flex-end',
        alignItems:'center',
        flexDirection:'row'
    },iconView:{
        alignItems:'center',
        justifyContent:'center',
        width:50,
        height:50,
        marginHorizontal:20,
        textAlign:'center',
        position:'relative',
        top:-10,
        borderRadius:25,
    },
    TopTextView:{
        backgroundColor:'transparent',
        width:width,
        height:height * 0.25
    },
    TextView:{
        height:height * 0.15
    },
    textstyle:{
        fontSize:32,
        textTransform:'uppercase',
        marginLeft:16,
        fontFamily:'PlayfairDisplay-SemiBold',
        color:'#0B050C' 
    },
    bottomView:{
        backgroundColor:'#0C080F',
        width:width,
        height:height * 0.65
    }
})

export default ScreenOne;