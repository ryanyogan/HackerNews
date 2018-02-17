import React from 'react';
import { Platform } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { Icon } from 'expo';

import styles from './styles';

const IconNames = {
  ...Platform.select({
    ios: {
      create: 'ios-create-outline',
    },
    android: {
      create: 'md-create',
    },
  }),
  authenticate: 'md-key',
};

const HeaderIconButton = props => {
  const presetIconName = IconNames[props.name];

  return (
    <Touchable
      hitSlop={{
        top: 10,
        bottom: 10,
        left: 5,
        right: 5,
      }}
      background={Touchable.Ripple('#555', true)}
      style={styles.button}
      onPress={props.onPress}
    >
      <Icon.Ionicons
        name={presetIconName || props.name}
        style={{ color: '#FFF' }}
        size={20}
      />
    </Touchable>
  );
};

export default HeaderIconButton;
