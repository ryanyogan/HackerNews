import React, { Component } from 'react';
import { AppLoading } from 'expo';
import { getUser, loadUserAsync } from 'react-native-authentication-helpers';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-client-preset';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HackerNews } from './components/HackerNews';

import buildStyles from './config/styles';

buildStyles();

const httpLink = new HttpLink({
  uri: 'https://api.graph.cool/simple/v1/cj6nypgtb224m0143b2gstire',
});

const middlewareAuthLink = new ApolloLink((operation, forward) => {
  const user = getUser();
  const authHeader = user && user.token ? `Bearer ${user.token}` : null;
  operation.setContext({
    headers: {
      authorization: authHeader,
    },
  });

  return forward(operation);
});

const httpLinkWithAuthToken = middlewareAuthLink.concat(httpLink);

const client = new ApolloClient({
  link: httpLinkWithAuthToken,
  cache: new InMemoryCache(),
});

class App extends Component {
  state = {
    appIsReady: false,
  };

  componentDidMount() {
    this._loadAppDataAsync();
  }

  _loadAppDataAsync = async () => {
    try {
      await loadUserAsync();
    } catch (error) {
      console.error('Unable to load user data from device.'); // eslint-disable-line
    } finally {
      this.setState({ appIsReady: true });
    }
  };

  render() {
    if (!this.state.appIsReady) {
      return <AppLoading />;
    }

    return (
      <ApolloProvider client={client}>
        <HackerNews />
      </ApolloProvider>
    );
  }
}

export default App;
