/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { height, width } from '../../constants';

const CardItemView = ({ imageSource, textOne, textTwo, widthImage, heightImage }) => {
  return (
    <View style={styles.main}>
      <View style={styles.firstView}>
        <Image
          source={imageSource}
          width={widthImage}
          height={heightImage}
          // resizeMode={'cover'}
        />
      </View>
      <View style={styles.secondView}>
        <Text style={styles.secondViewTextOne}>Black Rose Petal</Text>
        <Text style={styles.secondViewTextTwo}>$ 52.50</Text>
      </View>
    </View>
  );
};

export default CardItemView;

const styles = StyleSheet.create({
  main: {
    
    width: width,
    height: width * 0.3,
    backgroundColor: '#0B080F',
    
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  firstView: {
    backgroundColor: '#0B080F',
    width: width / 3,
    height: width * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondView: {
    backgroundColor: '#0B080F',
    width: width * 0.7,
    justifyContent: 'center',
  },
  secondViewTextOne: {
    fontSize: 22,
    color: '#D6D4D5',
  },
  secondViewTextTwo: {
    fontSize: 16,
    color: '#57565F',
  },
});
