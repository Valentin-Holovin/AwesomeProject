import {useNavigation} from '@react-navigation/native';
import {SignInScreenNavigationProp} from '../navigation/AppNavigation';

export const useNavigator = () => {
  const navigation = useNavigation<SignInScreenNavigationProp>();

  return navigation;
};
