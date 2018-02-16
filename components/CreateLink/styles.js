import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 5,
  },
  '@media ios': {
    inputField: {
      padding: 15,
      backgroundColor: '#FFF',
      borderColor: '#EEE',
      borderWidth: 1,
    },
  },
  '@media android': {
    inputField: {
      fontSize: 16,
      paddingVertical: 10,
      paddingHorizontal: 5,
      marginHorizontal: 5,
    },
  },
  lastInputField: {
    borderTopWidth: 0,
    marginBottom: 10,
  },
  $orange: '$primaryOrange',
});

export default styles;
