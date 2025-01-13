/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Avatar, Pressable} from '@react-native-material/core';
import {ArrowLeft} from '../../assets';
import {useNavigator, useCurrentUser} from '../../hooks';

interface HeaderProps {
  title: string;
  isBack?: boolean;
}

export const Header = ({title, isBack}: HeaderProps) => {
  const {currentUser, fetchCurrentUser} = useCurrentUser();
  const {goToBack, navigation} = useNavigator();

  React.useEffect(() => {
    fetchCurrentUser();
  }, []);

  const avatarUrl = React.useMemo(() => {
    return currentUser?.avatar
      ? currentUser.avatar
      : 'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg';
  }, [currentUser]);

  const goToProfile = () => {
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {isBack && (
          <Pressable onPress={goToBack}>
            <ArrowLeft />
          </Pressable>
        )}
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
        <Pressable style={styles.profile_wrapper} onPress={goToProfile}>
          <Avatar
            image={{
              uri: avatarUrl,
            }}
            size={38}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6200ee',
    width: '100%',
    paddingBottom: 15,
    paddingTop: 15,
  },
  wrapper: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    color: 'white',
    fontWeight: '700',
  },
  profile_wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
