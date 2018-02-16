import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    paddingVertical: 10,
    marginVertical: 3,
    '@media ios': {
      paddingHorizontal: 15,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 2,
    },
    '@media android': {
      elevation: 4,
    },
  },
  description: {
    fontSize: 17,
    fontWeight: '600',
  },
});

export default styles;
