import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Avatar, Pressable} from '@react-native-material/core';
import {ArrowLeft} from '../../assets';
import {useNavigator} from '../../hooks';

interface HeaderProps {
  title: string;
  isBack?: boolean;
}

export const Header = ({title, isBack}: HeaderProps) => {
  const {goToBack} = useNavigator();

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
        <Pressable style={styles.profile_wrapper}>
          <Avatar
            image={{
              uri: 'https://m.media-amazon.com/images/S/pv-target-images/dbf6812f59e5080cf420f1056bfceb66f7d6a43a8df19ace503ea70596afc0ff._SX1080_FMjpg_.jpg',
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
    paddingBottom: 20,
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
