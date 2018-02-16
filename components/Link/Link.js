import React, { Component } from 'react';
import { Text } from 'react-native';
import Touchable from 'react-native-platform-touchable';

class Link extends Component {
  _voteForLink = async () => {
    // vote
  };

  render() {
    return (
      <Touchable>
        <Text>
          {this.props.link.description} ({this.props.link.url})
        </Text>
      </Touchable>
    );
  }
}

export default Link;
