import React, { Component } from 'react';
import { Button, View, Platform } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { getUser } from 'react-native-authentication-helpers';

import { StyledTextInput } from '../TextInput';

import styles from './styles';

class CreateLink extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
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
    const user = getUser();
    if (!user) {
      console.error('No user logged in'); // eslint-disable-line
      return;
    }

    await this.props.createLinkMutation({
      variables: {
        ...this.state,
        postedBy: user.id,
      },
    });

    this.props.navigation.goBack(null);
  };

  _renderAndroidButton() {
    if (Platform.OS === 'ios') {
      return;
    }

    return (
      <View style={styles.buttonContainer}>
        <Button color="#000" title="Submit" onPress={this._createLink} />;
      </View>
    );
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
  mutation CreateLinkMutation(
    $description: String!
    $url: String!
    $postedById: ID!
  ) {
    createLink(description: $description, url: $url, postedById: $postedById) {
      id
      createdAt
      url
      description
      postedBy {
        id
        name
      }
    }
  }
`;

export default graphql(CREATE_LINK_MUTATION, {
  name: 'createLinkMutation',
})(CreateLink);
