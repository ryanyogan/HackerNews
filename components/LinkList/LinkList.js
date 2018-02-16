import React from 'react';
import { ScrollView, ActivityIndicator, Text, View } from 'react-native';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from '../Link';
import styles from './styles';

const LinkList = props => {
  if (props.allLinksQuery && props.allLinksQuery.loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator />
      </View>
    );
  }

  if (props.allLinksQuery && props.allLinksQuery.error) {
    return (
      <View style={styles.container}>
        <Text>Error</Text>
      </View>
    );
  }

  const linksToRender = props.allLinksQuery.allLinks;

  return (
    <ScrollView style={styles.container}>
      {linksToRender.map(link => <Link key={link.id} link={link} />)}
    </ScrollView>
  );
};

const ALL_LINKS_QUERY = gql`
  query AllLinksQuery {
    allLinks {
      id
      createdAt
      url
      description
    }
  }
`;

export default graphql(ALL_LINKS_QUERY, { name: 'allLinksQuery' })(LinkList);
