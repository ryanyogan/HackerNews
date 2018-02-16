import { StackNavigator } from 'react-navigation';
import { LinkList } from '../components/LinkList';
import { CreateLink } from '../components/CreateLink';

export default StackNavigator(
  {
    Links: {
      screen: LinkList,
    },
    CreateLink: {
      screen: CreateLink,
    },
  },
  {
    cardStyle: {
      backgroundColor: '#FAFAFA',
    },
    navigationOptions: () => ({
      headerBackTitle: 'Back',
      headerStyle: {
        backgroundColor: '#FF5722',
      },
      headerTintColor: '#FFFFFF',
    }),
  },
);
