import React from 'react';
import { View } from 'react-native';
import { LinkList } from '../LinkList';
import { CreateLink } from '../CreateLink';

import styles from './styles';

const HackerNews = () => (
  <View style={styles.container}>
    <CreateLink />
  </View>
);

export default HackerNews;
