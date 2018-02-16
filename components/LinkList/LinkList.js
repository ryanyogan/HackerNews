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

  state = {
    refreshing: false,
  };

  _handleRefresh = async () => {
    try {
      // FIXME: .refetch() is not an Apollo 2 client function
      this.setState({ refreshing: true });
      await this.props.allLinksQuery.refetch();
    } finally {
      this.setState({ refreshing: false });
    }
  };

  render() {
    if (this.props.allLinksQuery && this.props.allLinksQuery.loading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={styles.loaderColor} />
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
        onRefresh={this._handleRefresh}
        refreshing={this.state.refreshing}
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
