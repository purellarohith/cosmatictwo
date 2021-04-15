/* eslint-disable prettier/prettier */

import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Feather';

import { colorArray, height, width } from '../../constants';
import CustomNavigationContainer from '../../navigation';
import CardItemView from './CardItemView';
import Cardview from './cardView';
const data = [
    {
        image: require('./../../../assets/images/imageone.png'),
        textOne: 'Black Rose Petal',
        textTwo: '$ 53.50',
    },
    {
        image: require('./../../../assets/images/imagetwo.png'),
        textOne: 'Night In Paris',
        textTwo: '$ 40.50',
    },
];




const ScreenOne = () => {
    return (
        <View>
            <View style={styles.iconsMainView}>
                <CustomNavigationContainer />
                <View style={styles.iconView}>
                    <Ionicons name="search" color={'black'} size={30} />
                </View>
                <View style={styles.iconView}>
                    <Ionicons name="shopping-bag" color={'black'} size={30} />
                </View>
            </View>
            <View style={styles.TopTextView}>
                <View style={styles.TextView}>
                    <Text style={styles.textstyle}>Everyday care</Text>
                    <Text style={styles.textstyle}>for Your Skin</Text>
                </View>
            </View>
            <View style={styles.bottomView} >
                <View style={styles.overlayFlatlist}>
                    <FlatList
                        keyExtractor={(item, index) => item.color}
                        data={colorArray}
                        horizontal={true}
                        contentContainerStyle={{ padding: 16, justifyContent: 'space-around', alignItems: 'center' }}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            return (
                                <Cardview bgcolor={item.color} />
                            );
                        }}
                        ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
                    />
                </View>
                <View style={styles.mainFlatlist}>
                    <FlatList
                        keyExtractor={(item, index) => item.textOne}
                        data={data}
                        renderItem={({ item, index }) => {
                            return (<CardItemView
                                imageSource={item.image}
                                widthImage={(width / 3) + 50}
                                heightImage={(width / 3) + 50}
                                textOne={item.textOne}
                                textTwo={item.textTwo}
                            />);
                        }}
                    />
                </View>
                <View style={styles.explorerStyle}>
                    <Text style={styles.explorerText}>Explorer More</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    iconsMainView: {
        width: width,
        height: 100,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
    },
    iconView: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        marginHorizontal: 20,
        textAlign: 'center',
        position: 'relative',
        top: -10,
        borderRadius: 25,
    },
    TopTextView: {
        backgroundColor: 'transparent',
        width: width,
        height: height * 0.25,
    },
    TextView: {
        height: height * 0.15,
    },
    textstyle: {
        fontSize: 32,
        textTransform: 'uppercase',
        marginLeft: 16,
        fontFamily: 'PlayfairDisplay-SemiBold',
        color: '#0B050C',
    },
    bottomView: {
        backgroundColor: '#0C080F',
        width: width,
        height: height * 0.65,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    mainFlatlist: {
        backgroundColor: 'transparent',
        height: height * 0.55,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: width / 3,

    },
    explorerStyle: {
        backgroundColor: 'black',
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopColor: '#534951',
        borderTopWidth: 2,
        height: height * 0.1,
    },
    explorerText: {
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: '600',
    },
    overlayFlatlist: {
        position: 'absolute',
        top: -width * 0.9,
        zIndex: 3,
        // left: 16,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ScreenOne;
