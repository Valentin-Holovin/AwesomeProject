/* eslint-disable radix */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {Text, Pressable} from '@react-native-material/core';
import {DeleteIcon, EditIcon} from '../../../assets';
import {IProject, ITask} from '../../../interfaces';
import {useNavigator, useTasks} from '../../../hooks';
import {TaskStatus} from '../../task-status';
import {TaskType} from '../../task-type';
import {TaskUser} from '../../task-user';

interface TaskListItemProps {
  task: ITask;
  projectInfo?: IProject;
}

export const TaskListItem = ({task, projectInfo}: TaskListItemProps) => {
  // const {navigation, goToBack} = useNavigator();

  const {deleteTask} = useTasks(projectInfo?.id!);

  const deleteCurrentTask = React.useCallback(() => {
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
            deleteTask(task.id!);
          },
        },
      ],
      {cancelable: true},
    );
  }, [projectInfo]);

  return (
    <Pressable style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.title_wrapper}>
          <View>
            <Text style={styles.title}>{task?.title}</Text>
          </View>
          <View style={styles.title_button_wrapper}>
            <Pressable>
              <EditIcon />
            </Pressable>
            <Pressable onPress={deleteCurrentTask}>
              <DeleteIcon />
            </Pressable>
          </View>
        </View>

        <View>
          <Text style={styles.description}>{task?.description}</Text>
        </View>

        <View style={styles.task_info_wrapper}>
          <TaskType type={task.type} />
          <TaskStatus status={task.status} />
          <TaskUser user={task.user} />
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
    flexWrap: 'wrap',
    alignContent: 'center',
    marginTop: 10,
    marginBottom: 5,
  },
});
