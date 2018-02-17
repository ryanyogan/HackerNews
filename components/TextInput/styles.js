import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  '@media ios': {
    input: {
      padding: 13,
      backgroundColor: '#FFF',
      borderColor: '#EEE',
      borderWidth: 1,
      borderBottomWidth: 0,
    },
  },
  '@media android': {
    input: {
      fontSize: 16,
      paddingVertical: 10,
      paddingHorizontal: 5,
      marginHorizontal: 5,
    },
  },
  lastInGroup: {
    '@media ios': {
      borderBottomWidth: 1,
    },
    '@media android': {
      borderBottomWidth: 0,
    },
    marginBottom: 10,
  },
  $orange: '$primaryOrange',
});

export default styles;
