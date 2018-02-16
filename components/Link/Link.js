import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { WebBrowser } from 'expo';

import styles from './styles';

class Link extends Component {
  _voteForLink = async () => {
    // vote
  };

  _openBrowser = () => {
    const url = this.props.link.url;
    if (!url.includes('http')) {
      // FIXME: Add in Alert wrapper
      return alert('Unable to open invalid url'); // eslint-disable-line
    }

    WebBrowser.openBrowserAsync(this.props.link.url);
  };

  render() {
    return (
      <Touchable style={styles.container} onPress={this._openBrowser}>
        <View>
          <Text style={styles.description}>{this.props.link.description}</Text>
          <Text>{this.props.link.url}</Text>
        </View>
      </Touchable>
    );
  }
}

export default Link;
