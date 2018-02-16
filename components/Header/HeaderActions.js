import React from 'react';
import { View } from 'react-native';
import { Icon } from 'expo';
import Touchable from 'react-native-platform-touchable';

import styles from './styles';

const ButtonHitSlop = {
  top: 10,
  bottom: 10,
  left: 5,
  right: 5,
};

const HeaderActionsRight = props => (
  <View style={styles.container}>
    <Touchable
      hitSlop={ButtonHitSlop}
      onPress={() => props.navigation.navigate('CreateLink')}
    >
      <Icon.Ionicons
        name="ios-create-outline"
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
