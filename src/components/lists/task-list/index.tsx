import React from 'react';
import {FlatList} from 'react-native';
import {IProject, ITask} from '../../../interfaces';
import {LoadingIndicator} from '../../loading-indicator';
import {TaskListItem} from '../../listItem/task-list-item';
import {UniversalErrorIcon, UniversalStubIcon} from '../../../assets';

interface TaskListProps {
  tasks: ITask[];
  loading: boolean;
  error: any;
  projectInfo?: IProject;
}

export const TaskList = ({
  tasks,
  loading,
  error,
  projectInfo,
}: TaskListProps) => {
  const renderItem = ({item}: {item: ITask}) => {
    return <TaskListItem task={item} projectInfo={projectInfo} />;
  };

  if (error) {
    return <UniversalErrorIcon text="Something went wrong" />;
  }

  if (tasks.length === 0) {
    return <UniversalStubIcon text="No Tasks" />;
  }

  return (
    <>
      <LoadingIndicator visible={loading} />

      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </>
  );
};
