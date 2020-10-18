/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import AsteroidInfo from './screens/AsteroidInfo';
import HomeScreen from './screens/HomeScreen';
import { createAppContainer } from 'react-navigation';
import { View } from 'react-native';



class App extends React.Component {
  render() {
    return (
      <View>

      </View>
    )
  }
}

const Root = createStackNavigator({
  Home: HomeScreen,
  AsteroidInfo: AsteroidInfo
},
  {
    initialRouteName: "Home",

  })

export default createAppContainer(Root)
