import React, { Component } from 'react';
import { TextInput } from 'react-native';

import styles from './styles';

class StyledTextInput extends Component {
  focus() {
    this._input.focus();
  }

  render() {
    const { lastStyledTextInputInGroup, ...props } = this.props;

    return (
      <TextInput
        underlineColorAndroid="#888"
        selectionColor={styles.$orange}
        autoCorrect={false}
        ref={view => {
          this._input = view;
        }}
        {...props}
        style={[
          styles.input,
          lastStyledTextInputInGroup && styles.lastInGroup,
          props.style,
        ]}
      />
    );
  }
}

export default StyledTextInput;
