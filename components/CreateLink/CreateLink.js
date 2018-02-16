import React, { Component } from 'react';
import { Button, View, TextInput, Platform } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import styles from './styles';

class CreateLink extends Component {
  static navigationOptions = props => {
    const { params } = props.navigation.state;
    const onDonePress = params ? params.onDonePress : () => {};

    return {
      title: 'New Link',
      headerRight: Platform.OS === 'ios' && (
        <Button color="#FFF" title="Done" onPress={onDonePress} />
      ),
    };
  };

  state = {
    description: '',
    url: '',
  };

  componentWillMount() {
    this.props.navigation.setParams({
      onDonePress: this._createLink,
    });
  }

  _createLink = async () =>
    await this.props.createLinkMutation({
      variables: {
        ...this.state,
      },
    });

  _maybeRenderButton() {
    if (Platform.OS === 'ios') {
      return;
    }

    return <Button color="#BBB" title="Submit" onPress={this._createLink} />;
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={description => this.setState({ description })}
          onSubmitEditing={() => this._urlInput.focus()}
          placeholder="A description for the link"
          returnKeyType="next"
          style={styles.inputField}
          underlineColorAndroid="#BBB"
          selectionColor={styles.$orange}
          value={this.state.description}
        />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="url"
          onChangeText={url => this.setState({ url })}
          onSubmitEditing={this._createLink}
          placeholder="A url for the link"
          ref={ref => {
            this._urlInput = ref;
          }}
          returnKeyType="done"
          style={[styles.inputField, styles.lastInputField]}
          underlineColorAndroid="#BBB"
          selectionColor={styles.$orange}
          value={this.state.url}
        />

        {this._maybeRenderButton()}
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
