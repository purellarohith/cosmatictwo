import React from 'react';
import { StyleSheet, View } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenOne from './Components/Screens/ScreenOne/ScreenOne';
import ScreenTwo from './Components/Screens/ScreenTwo/ScreenTwo';

const App = () => {
  enableScreens();
  

  const Stack = createStackNavigator();

  return (
    <View style={styles.main}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="screenone" component={ScreenOne} />
          <Stack.Screen name="screentwo" component={ScreenTwo} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
