import React, { Component } from 'react';
import { Button, Platform, ScrollView, View } from 'react-native';
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

  _confirm = async () => {};

  _saveUserData = (id, token) => ({ id, token });

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
              type="text"
              placeholder="Your name"
            />
          )}
          <StyledTextInput
            autoFocus
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            type="text"
            placeholder="Your email address"
          />
          <StyledTextInput
            lastStyledTextInputInGroup
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
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

export default Authentication;
