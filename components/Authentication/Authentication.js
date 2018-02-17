import React, { Component } from 'react';
import { Button, Platform, ScrollView, View } from 'react-native';
import { graphql, compose } from 'react-apollo';
import { setUser } from 'react-native-authentication-helpers';
import gql from 'graphql-tag';
import { StyledTextInput } from '../TextInput';

import styles from './styles';

const isSignUpState = navigationState =>
  !!(navigationState.params && navigationState.params.signUp);

class Authentication extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    const onSubmitPress = params ? params.onSubmitPress : () => {};

    return {
      title: isSignUpState(navigation.state) ? 'Sign Up' : 'Sign In',
      headerRight: Platform.OS === 'ios' && (
        <Button color="#FFF" title="Submit" onPress={onSubmitPress} />
      ),
    };
  };

  state = {
    email: '',
    password: '',
    name: '',
  };

  componentWillMount() {
    this.props.navigation.setParams({
      onSubmitPress: this._confirm,
    });
  }

  _confirm = async () => {
    try {
      if (!isSignUpState(this.props.navigation.state)) {
        const { data: { signinUser } } = await this.props.createUserMutation({
          variables: {
            ...this.state,
          },
        });
        const { id } = signinUser.user;
        const { token } = signinUser;
        this._saveUserData(id, token);
      } else {
        const { email, password } = this.state;
        const { data: { signinUser } } = await this.props.signinUserMutation({
          variables: {
            email,
            password,
          },
        });
        const { id } = signinUser.user;
        const { token } = signinUser;
        this._saveUserData(id, token);
      }
    } catch (error) {
      alert(error.message); // eslint-disable-line
    }
  };

  _saveUserData = (id, token) => setUser({ id, token });

  render() {
    const showSignupForm = isSignUpState(this.props.navigation.state);

    return (
      <ScrollView keyboardShouldPersistTaps="always" style={styles.container}>
        <View style={styles.formInputGroup}>
          {showSignupForm && (
            <StyledTextInput
              autoFocus
              value={this.state.name}
              onChangeText={name => this.setState({ name })}
              onSubmitEditing={() => this._emailInput.focus()}
              type="text"
              placeholder="Your name"
            />
          )}
          <StyledTextInput
            autoFocus
            autoCapitalize="none"
            ref={view => {
              this._emailInput = view;
            }}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            onSubmitEditing={() => this._passwordInput.focus()}
            type="text"
            placeholder="Your email address"
          />
          <StyledTextInput
            lastStyledTextInputInGroup
            value={this.state.password}
            returnKeyType="go"
            ref={view => {
              this._passwordInput = view;
            }}
            onChangeText={password => this.setState({ password })}
            onSubmitEditing={this._confirm}
            secureTextEntry
            type="password"
            placeholder="Choose a safe password"
          />
        </View>

        <View style={styles.buttonGroup}>
          {Platform.OS === 'android' && (
            <Button
              color="#888"
              onPress={this._confirm}
              title={showSignupForm ? 'Create account' : 'Login'}
            />
          )}
          <View style={styles.buttonSeparator} />
          <Button
            color={Platform.OS === 'android' ? '#000' : styles.$orange}
            onPress={() =>
              this.props.navigation.setParams({ signUp: !showSignupForm })
            }
            title={
              showSignupForm
                ? 'Already have an account?'
                : 'Need to create an account?'
            }
          />
        </View>
      </ScrollView>
    );
  }
}

const CREATE_USER_MUTATION = gql`
  mutation CreateUserMutation(
    $name: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      name: $name
      authProvider: { email: { email: $email, password: $password } }
    ) {
      id
    }
    signinUser(email: { email: $email, password: $password }) {
      token
      user {
        id
      }
    }
  }
`;

const SIGNIN_USER_MUTATION = gql`
  mutation SigninUserMutation($email: String!, $password: String!) {
    signinUser(email: { email: $email, password: $password }) {
      token
      user {
        id
      }
    }
  }
`;

export default compose(
  graphql(CREATE_USER_MUTATION, { name: 'createUserMutation' }),
  graphql(SIGNIN_USER_MUTATION, { name: 'signinUserMutation' }),
)(Authentication);
