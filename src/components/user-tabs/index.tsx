import {Pressable, Text} from '@react-native-material/core';
import React from 'react';
import {StyleSheet, View} from 'react-native';

interface UserTabsProps {
  activeTab: string;
  setActiveTab: (v: string) => void;
}

export const UserTabs = ({activeTab, setActiveTab}: UserTabsProps) => {
  return (
    <View style={styles.tabBar}>
      <Pressable
        style={[
          styles.tabBarButton,
          activeTab === 'first' && styles.tabBarButtonActive,
        ]}
        onPress={() => setActiveTab('first')}>
        <Text
          style={
            activeTab === 'first'
              ? styles.tabButtonTextActive
              : styles.tabButtonText
          }>
          USERS IN PROJECT
        </Text>
      </Pressable>
      <Pressable
        style={[
          styles.tabBarButton,
          activeTab === 'second' && styles.tabBarButtonActive,
        ]}
        onPress={() => setActiveTab('second')}>
        <Text
          style={
            activeTab === 'second'
              ? styles.tabButtonTextActive
              : styles.tabButtonText
          }>
          USER OUTSIDE PROJECT
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  tabBarButton: {
    padding: 10,
  },
  tabBarButtonActive: {
    borderBottomWidth: 2,
    borderBottomColor: '#007bff',
  },
  tabButtonText: {
    fontSize: 12,
    color: '#000',
  },
  tabButtonTextActive: {
    fontSize: 12,
    color: '#007bff',
  },
});
