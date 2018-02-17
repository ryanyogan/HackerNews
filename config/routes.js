import { StackNavigator } from 'react-navigation';
import { LinkList } from '../components/LinkList';
import { CreateLink } from '../components/CreateLink';
import { Authentication } from '../components/Authentication';

export default StackNavigator(
  {
    Links: {
      screen: LinkList,
    },
    CreateLink: {
      screen: CreateLink,
    },
    Authentication: {
      screen: Authentication,
    },
  },
  {
    initialRouteName: 'Links',
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
