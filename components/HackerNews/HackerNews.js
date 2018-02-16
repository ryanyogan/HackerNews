import React from 'react';
import { View } from 'react-native';
import { LinkList } from '../LinkList';
import styles from './styles';

const HackerNews = () => (
  <View style={styles.container}>
    <LinkList />
  </View>
);

export default HackerNews;
