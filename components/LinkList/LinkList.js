import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View } from 'react-native';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from '../Link';
import { HeaderActions } from '../Header';
import styles from './styles';

class LinkList extends Component {
  static navigationOptions = props => ({
    title: 'Hacker News',
    headerRight: <HeaderActions.Right navigation={props.navigation} />,
  });

  render() {
    if (this.props.allLinksQuery && this.props.allLinksQuery.loading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" />
          <Text style={styles.loadingText}>Loading links...</Text>
        </View>
      );
    }

    if (this.props.allLinksQuery && this.props.allLinksQuery.error) {
      return (
        <View style={styles.container}>
          <Text>Error</Text>
        </View>
      );
    }

    return (
      <FlatList
        data={this.props.allLinksQuery.allLinks}
        style={styles.container}
        keyExtractor={link => link.id}
        renderItem={({ item }) => <Link link={item} />}
      />
    );
  }
}

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
