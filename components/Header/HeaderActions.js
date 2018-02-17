import React from 'react';
import { View, Platform, Button } from 'react-native';
import { withUser, clearUser } from 'react-native-authentication-helpers';

import HeaderIconButton from './HeaderIconButton';

import styles from './styles';

const HeaderActionsRight = props => (
  <View style={styles.container}>
    {props.user && (
      <HeaderIconButton
        name="create"
        onPress={() => props.navigation.navigate('CreateLink')}
      />
    )}

    {Platform.OS === 'android' &&
      !props.user && (
        <HeaderIconButton
          name="authenticate"
          onPress={() => props.navigation.navigate('Authentication')}
        />
      )}
  </View>
);

const HeaderActionsLeft = props => {
  if (Platform.OS === 'android') {
    return null;
  }

  return (
    <View style={styles.container}>
      {props.user ? (
        <Button title="Sign Out" color="#FFF" onPress={clearUser} />
      ) : (
        <Button
          title="Sign In"
          color="#FFF"
          onPress={() => props.navigation.navigate('Authentication')}
        />
      )}
    </View>
  );
};

export default {
  Right: withUser(HeaderActionsRight),
  Left: withUser(HeaderActionsLeft),
};
