import React from 'react';
import { ScrollView } from 'react-native';
import { Link } from '../Link';
import styles from './styles';

const linksToRender = [
  {
    id: '1',
    description: 'The Coolest GraphQL Backend 😎',
    url: 'https://www.graph.cool',
  },
  {
    id: '2',
    description: 'The Best GraphQL Client',
    url: 'http://dev.apollodata.com/',
  },
];
const LinkList = () => (
  <ScrollView style={styles.container}>
    {linksToRender.map(link => <Link key={link.id} link={link} />)}
  </ScrollView>
);

export default LinkList;
