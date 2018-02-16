import React from 'react';
import { View, Platform } from 'react-native';
import { Icon } from 'expo';
import Touchable from 'react-native-platform-touchable';

import styles from './styles';

const ButtonHitSlop = {
  top: 10,
  bottom: 10,
  left: 5,
  right: 5,
};

const IconNames = {
  ...Platform.select({
    ios: {
      create: 'ios-create-outline',
    },
    android: {
      create: 'md-create',
    },
  }),
};

const HeaderActionsRight = props => (
  <View style={styles.container}>
    <Touchable
      hitSlop={ButtonHitSlop}
      background={Touchable.Ripple('#555', true)}
      style={styles.button}
      onPress={() => props.navigation.navigate('CreateLink')}
    >
      <Icon.Ionicons
        name={IconNames.create}
        style={{ color: '#FFF' }}
        size={20}
      />
    </Touchable>
  </View>
);

export default {
  Right: HeaderActionsRight,
  Left: () => null,
};
