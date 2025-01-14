/* eslint-disable radix */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {View, Alert, StyleSheet, ScrollView} from 'react-native';
import {
  Header,
  LoadingIndicator,
  TaskList,
  UserInProjectPicker,
} from '../../components';
import {useNavigator, useProjects, useTasks} from '../../hooks';
import {ProjectDetailsProps} from '../../navigation/AppNavigation';
import {Button, Text} from '@react-native-material/core';
import {useSelector} from 'react-redux';
import {projectInfoSelector} from '../../store/selectors/projectSelectors';
import {TRootState} from '../../store';
import {IProject} from '../../interfaces';

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({route}) => {
  const {project} = route.params;

  const projectInfo = useSelector<TRootState, IProject | undefined>(
    (state: TRootState) => projectInfoSelector(project.id!)(state),
  );

  const {navigation, goToBack} = useNavigator();
  const {deleteProject} = useProjects();
  const {tasks, error, loading, fetchTasks} = useTasks(project.id!);

  React.useEffect(() => {
    fetchTasks();
  }, []);

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
            goToBack();
          },
        },
      ],
      {cancelable: true},
    );
  }, []);

  const goToProjectEditor = React.useCallback(() => {
    navigation.navigate('ProjectEditor', {
      projectId: project.id,
      currentTitle: project.title,
      currentDescription: project.description,
    });
  }, [project]);

  const goToTaskCreator = React.useCallback(() => {
    navigation.navigate('TaskCreator', {
      projectId: project?.id,
    });
  }, []);

  return (
    <View style={styles.container}>
      {loading && <LoadingIndicator visible={loading} />}

      <Header title="Project Details" isBack />

      <View style={styles.wrapper}>
        <View>
          <Text style={styles.title}>{projectInfo?.title}</Text>
        </View>

        <ScrollView
          style={styles.button_wrapper}
          horizontal
          showsHorizontalScrollIndicator={false}>
          <UserInProjectPicker
            projectId={project.id}
            usersInProject={projectInfo?.users ?? []}
          />
          <Button
            title="CREATE TASK"
            style={styles.button}
            titleStyle={styles.button_text}
            onPress={goToTaskCreator}
          />
          <Button
            title="EDIT PROJECT"
            style={styles.button}
            titleStyle={styles.button_text}
            onPress={goToProjectEditor}
          />
          <Button
            title="DELETE PROJECT"
            variant="outlined"
            color="red"
            style={styles.button}
            titleStyle={styles.button_text}
            onPress={deleteCurrentProject}
          />
        </ScrollView>

        <TaskList
          tasks={tasks}
          loading={loading}
          error={error}
          projectInfo={projectInfo}
        />
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
  button_wrapper: {
    marginVertical: 15,
  },
  button: {
    elevation: 0,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0,
    shadowRadius: 0,
    marginHorizontal: 5,
  },
  button_text: {
    fontSize: 12,
    textAlign: 'center',
  },
});
