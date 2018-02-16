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
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  $orange: '$primaryOrange',
});

export default styles;
