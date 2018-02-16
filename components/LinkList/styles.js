import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 60,
  },
  loadingText: {
    marginTop: 5,
    color: '#888',
  },
  '@media ios': {
    loaderColor: '#CCC',
  },
  '@media android': {
    loaderColor: '$primaryOrange',
  },
});

export default styles;
