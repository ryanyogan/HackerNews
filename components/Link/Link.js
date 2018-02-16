import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Touchable from 'react-native-platform-touchable';

import styles from './styles';

class Link extends Component {
  _voteForLink = async () => {
    // vote
  };

  render() {
    return (
      <Touchable style={styles.container}>
        <View>
          <Text style={styles.description}>{this.props.link.description}</Text>
          <Text>{this.props.link.url}</Text>
        </View>
      </Touchable>
    );
  }
}

export default Link;
