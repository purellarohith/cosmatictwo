/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { height, width } from '../../constants';

const Cardview = ({bgcolor}) => {
  return (
    <View style={[styles.main, { backgroundColor: bgcolor }]} >
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

export default Cardview;

const styles = StyleSheet.create({
  main: {
    width: width - 100,
    height: width * 0.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 12,
    padding: 16,
    margin:16
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
