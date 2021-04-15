/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { height, width } from '../../constants';

const ScreenTwo = () => {
    return (
        <View style={styles.main} >
            <View style={styles.leftView}>
                <Text style={styles.textOne}>Eau de Toilette</Text>
                <Text style={styles.textTwo}>{'More      >'}</Text>
            </View>
            <View style={styles.rightView}>
                <Image
                    source={require('./../../../assets/images/imagethree.png')}
                    width={width}
                    height={width}
                    style={{ width: width / 2, height: width / 2 }}
                />
            </View>
        </View>
    );
};

export default ScreenTwo;

const styles = StyleSheet.create({
    main: {
        width: width - 50,
        height: width * 0.5,
        backgroundColor: '#FE9A22',
        marginTop: height * 0.3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        borderRadius: 12,
        padding: 16,
    },
    leftView: {
        justifyContent: 'space-between',
        paddingVertical: 10,
        width: (width - 50) / 3,
    },
    textOne: {
        color: '#fff',
        fontSize: 28,
        textTransform: 'uppercase',
    },
    textTwo: {
        color: '#fff',
        textTransform: 'uppercase',
    },
    rightView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
