import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 3,
    '@media ios': {
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 2,
    },
    '@media android': {
      elevation: 2,
    },
  },
  description: {
    fontSize: 17,
    fontWeight: '500',
  },
});

export default styles;
