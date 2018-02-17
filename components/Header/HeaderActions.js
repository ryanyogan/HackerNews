import React from 'react';
import { View, Platform, Button } from 'react-native';

import HeaderIconButton from './HeaderIconButton';

import styles from './styles';

const HeaderActionsRight = props => (
  <View style={styles.container}>
    <HeaderIconButton
      name="create"
      onPress={() => props.navigation.navigate('CreateLink')}
    />

    {Platform.OS === 'android' && (
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
      <Button
        title="Sign In"
        color="#FFF"
        onPress={() => props.navigation.navigate('Authentication')}
      />
    </View>
  );
};

export default {
  Right: HeaderActionsRight,
  Left: HeaderActionsLeft,
};
