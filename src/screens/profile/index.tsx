import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header} from '../../components';
import {Text} from '@react-native-material/core';

export const Profile = () => {
  return (
    <View style={styles.container}>
      <Header title="Profile" isBack />

      <View style={styles.wrapper}>
        <Text style={styles.title}>Your Profile</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 10,
  },
});
