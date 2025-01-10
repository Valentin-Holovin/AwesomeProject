/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {Text, Pressable} from '@react-native-material/core';
import {DeleteIcon, EditIcon} from '../../../assets';
import {IProject} from '../../../interfaces';
import {useNavigator, useProjects} from '../../../hooks';

interface ProjectListProps {
  project: IProject;
}

export const ProjectList = ({project}: ProjectListProps) => {
  const {deleteProject} = useProjects();
  const {navigation} = useNavigator();

  const goToProjectDetails = React.useCallback(() => {
    navigation.navigate('ProjectDetails', {
      project,
    });
  }, [project]);

  const goToProjectEditor = React.useCallback(() => {
    navigation.navigate('ProjectEditor', {
      projectId: project.id,
      currentTitle: project.title,
      currentDescription: project.description,
    });
  }, [project]);

  const deleteCurrentProject = React.useCallback(() => {
    Alert.alert(
      'Confirm Deletion',
      'Are you sure you want to delete?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            deleteProject(project.id!);
          },
        },
      ],
      {cancelable: true},
    );
  }, [project]);

  return (
    <Pressable style={styles.container} onPress={goToProjectDetails}>
      <View style={styles.wrapper}>
        <View style={styles.title_wrapper}>
          <View>
            <Text style={styles.title}>{project?.title}</Text>
          </View>
          <View style={styles.title_button_wrapper}>
            <Pressable onPress={goToProjectEditor}>
              <EditIcon />
            </Pressable>
            <Pressable onPress={deleteCurrentProject}>
              <DeleteIcon />
            </Pressable>
          </View>
        </View>

        <View>
          <Text style={styles.description}>{project?.description}</Text>
        </View>

        <View style={styles.task_info_wrapper}>
          <View>
            <Text style={styles.task_info_text}>
              Task count: {project?.tasksCount}
            </Text>
          </View>
          <View style={styles.task_info_members}>
            <Text style={styles.task_info_text}>
              Members: {project?.users.length}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 4,
    marginTop: 12,
  },
  wrapper: {
    marginHorizontal: 10,
    marginVertical: 8,
  },
  title_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  title_button_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  description: {
    fontWeight: '300',
  },
  task_info_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  task_info_text: {
    fontSize: 13,
    fontWeight: '300',
  },
  task_info_members: {
    marginLeft: 10,
  },
});
