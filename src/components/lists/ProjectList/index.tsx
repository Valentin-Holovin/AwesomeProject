import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Pressable} from '@react-native-material/core';
import {DeleteIcon, EditIcon} from '../../../assets';
import {IProject} from '../../../interfaces';

interface ProjectListProps {
  project: IProject;
}

export const ProjectList = ({project}: ProjectListProps) => {
  return (
    <Pressable style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.title_wrapper}>
          <View>
            <Text style={styles.title}>{project?.title}</Text>
          </View>
          <View style={styles.title_button_wrapper}>
            <Pressable>
              <EditIcon />
            </Pressable>
            <Pressable>
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
