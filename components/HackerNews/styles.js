import ESStyleSheet from 'react-native-extended-stylesheet';
import { Constants } from 'expo';

export default ESStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
  },
});
