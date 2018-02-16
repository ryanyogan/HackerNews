import React, { Component } from 'react';
import { Button, View, TextInput, Platform } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { StyledTextInput } from '../TextInput';

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

  _createLink = async () => {
    await this.props.createLinkMutation({
      variables: {
        ...this.state,
      },
    });

    this.props.navigation.goBack(null);
  };

  _renderAndroidButton() {
    if (Platform.OS === 'ios') {
      return;
    }

    return <Button color="#BBB" title="Submit" onPress={this._createLink} />;
  }

  render() {
    return (
      <View style={styles.container}>
        <StyledTextInput
          onChangeText={description => this.setState({ description })}
          onSubmitEditing={() => this._urlInput.focus()}
          placeholder="A description for the link"
          returnKeyType="next"
          value={this.state.description}
        />
        <StyledTextInput
          autoCapitalize="none"
          keyboardType="url"
          onChangeText={url => this.setState({ url })}
          onSubmitEditing={this._createLink}
          placeholder="A url for the link"
          ref={ref => {
            this._urlInput = ref;
          }}
          returnKeyType="done"
          value={this.state.url}
        />

        {this._renderAndroidButton()}
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
