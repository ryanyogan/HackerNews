import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  $orange: '$primaryOrange',
  container: {
    flex: 1,
  },
  formInputGroup: {
    marginBottom: 5,
    marginTop: 10,
  },
  buttonGroup: {
    marginHorizontal: 10,
  },
  buttonSeparator: {
    '@media ios': {
      marginBottom: 0,
    },
    '@media android': {
      marginBottom: 10,
    },
  },
});

export default styles;
