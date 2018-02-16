import React from 'react';
import ESStyleSheet from 'react-native-extended-stylesheet';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HackerNews } from './components/HackerNews';

const httpLink = new HttpLink({
  uri: 'https://api.graph.cool/simple/v1/cj6nypgtb224m0143b2gstire',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

ESStyleSheet.build({});

const App = () => (
  <ApolloProvider client={client}>
    <HackerNews />
  </ApolloProvider>
);

export default App;
