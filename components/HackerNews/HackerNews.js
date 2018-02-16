import React from 'react';
import { View, StatusBar } from 'react-native';

import RootStackNavigator from '../../config/routes';

import styles from './styles';

const HackerNews = () => (
  <View style={styles.container}>
    <RootStackNavigator />
    <StatusBar barStyle="light-content" />
  </View>
);

export default HackerNews;
