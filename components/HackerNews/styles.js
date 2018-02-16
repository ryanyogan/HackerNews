import ESStyleSheet from 'react-native-extended-stylesheet';
import { Constants } from 'expo';

export default ESStyleSheet.create({
  container: {
    flex: 1,
    '@media android': {
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#E64A19',
    },
    '@media ios': {
      backgroundColor: '#FFF',
    },
  },
});
