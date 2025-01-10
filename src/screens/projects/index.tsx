import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Button, Text, ActivityIndicator} from '@react-native-material/core';
import {Header, ProjectList} from '../../components';
import {useNavigator, useProjects} from '../../hooks';
import {IProject} from '../../interfaces';

export const Projects = () => {
  const {projects, error, loading, fetchProjects} = useProjects();
  const {navigation} = useNavigator();

  React.useEffect(() => {
    fetchProjects();
  }, []);

  const renderItem = ({item}: {item: IProject}) => {
    return <ProjectList project={item} />;
  };

  const goToProjectCreator = () => {
    navigation.navigate('ProjectCreator');
  };

  if (loading) {
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" />;
    </View>;
  }

  return (
    <View style={styles.container}>
      <Header title="Projects" />
      <View style={styles.wrapper}>
        <Text style={styles.title}>Projects</Text>
        <Button
          title="Create Project"
          style={styles.button}
          titleStyle={styles.button_text}
          onPress={goToProjectCreator}
        />
        <FlatList
          data={projects}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  button: {
    elevation: 0,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0,
    shadowRadius: 0,
    width: '35%',
    marginTop: 10,
  },
  button_text: {
    fontSize: 12,
    textAlign: 'center',
  },
});
