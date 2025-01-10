import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';
import {StyleSheet} from 'react-native';
import {ProjectCreator, Projects, SignIn, SignUp} from '../screens';
import {useSelector} from 'react-redux';
import {TRootState} from '../store';

type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  Projects: undefined;
  ProjectCreator: undefined;
};

export type SignInScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SignIn'
>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  const accessToken = useSelector<TRootState>(state => state.auth.accessToken);

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={accessToken ? 'Projects' : 'SignIn'}
          screenOptions={{
            headerShown: false,
            contentStyle: styles.screenBackground,
          }}>
          {!accessToken ? (
            <>
              <Stack.Screen name="SignIn" component={SignIn} />
              <Stack.Screen name="SignUp" component={SignUp} />
            </>
          ) : (
            <>
              <Stack.Screen name="Projects" component={Projects} />
              <Stack.Screen name="ProjectCreator" component={ProjectCreator} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>

      <Toast />
    </>
  );
};

const styles = StyleSheet.create({
  screenBackground: {
    backgroundColor: '#FFFFFF',
  },
});

export default AppNavigation;
