import React, { Component } from 'react';
import { Button, View, TextInput } from 'react-native';

import styles from './styles';

class CreateLink extends Component {
  state = {
    description: '',
    url: '',
  };

  _createLink = async () => {};

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={description => this.setState({ description })}
          onSubmitEditing={() => this._urlInput.focus()}
          placeholder="A description for the link"
          returnKeyType="next"
          style={styles.inputField}
          value={this.state.description}
        />
        <TextInput
          autoCapitalize="none"
          keyboardType="url"
          onChangeText={url => this.setState({ url })}
          onSubmitEditing={this._createLink}
          placeholder="A url for the link"
          ref={ref => {
            this._urlInput = ref;
          }}
          returnKeyType="done"
          style={styles.inputField}
          value={this.state.url}
        />
        <Button title="Submit" onPress={this._createLink} />
      </View>
    );
  }
}

export default CreateLink;
