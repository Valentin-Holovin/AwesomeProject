import {Pressable, Text} from '@react-native-material/core';
import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {IUser} from '../../interfaces';

interface UsersInProjectListProps {
  data: IUser[];
  icon: React.ReactElement;
}

export const UsersInProjectList = ({data, icon}: UsersInProjectListProps) => {
  const renderItem = ({item}: {item: IUser}) => (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {item.email}
        </Text>
      </View>

      <Pressable>{icon}</Pressable>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    padding: 5,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
  },
  textWrapper: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    fontSize: 12,
    fontWeight: '700',
  },
});
