import React, { Component } from 'react';
import { Button, View, TextInput } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import styles from './styles';

class CreateLink extends Component {
  state = {
    description: '',
    url: '',
  };

  _createLink = async () =>
    await this.props.createLinkMutation({
      variables: {
        ...this.state,
      },
    });

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={description => this.setState({ description })}
          onSubmitEditing={() => this._urlInput.focus()}
          placeholder="A description for the link"
          returnKeyType="next"
          style={styles.inputField}
          value={this.state.description}
        />
        <TextInput
          autoCapitalize="none"
          keyboardType="url"
          onChangeText={url => this.setState({ url })}
          onSubmitEditing={this._createLink}
          placeholder="A url for the link"
          ref={ref => {
            this._urlInput = ref;
          }}
          returnKeyType="done"
          style={styles.inputField}
          value={this.state.url}
        />
        <Button title="Submit" onPress={this._createLink} />
      </View>
    );
  }
}

const CREATE_LINK_MUTATION = gql`
  mutation CreateLinkMutation($description: String!, $url: String!) {
    createLink(description: $description, url: $url) {
      id
      createdAt
      url
      description
    }
  }
`;

export default graphql(CREATE_LINK_MUTATION, {
  name: 'createLinkMutation',
})(CreateLink);
