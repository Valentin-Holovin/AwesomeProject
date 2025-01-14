import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Header, StatusPicker, TypePicker, UserPicker} from '../../components';
import {Button, Text, TextInput} from '@react-native-material/core';
import {IProject, IStatus, IType, IUser} from '../../interfaces';
import {TRootState} from '../../store';
import {useSelector} from 'react-redux';
import {projectInfoSelector} from '../../store/selectors/projectSelectors';
import {useNavigator, useTasks} from '../../hooks';
import {TaskCreatorProps} from '../../navigation/AppNavigation';

export const TaskCreator: React.FC<TaskCreatorProps> = ({route}) => {
  const [title, setTitle] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');
  const [timeAllotted, setTimeAllotted] = React.useState<number>(0);
  const [type, setType] = React.useState<IType | undefined>();
  const [status, setStatus] = React.useState<IStatus | undefined>();
  const [user, setUser] = React.useState<IUser | undefined>();
  const [files, setFiles] = React.useState<File[]>([]);

  const {projectId} = route.params;

  const projectInfo = useSelector<TRootState, IProject | undefined>(
    (state: TRootState) => projectInfoSelector(projectId)(state),
  );

  const {loading, createTask} = useTasks(projectId);
  const {goToBack} = useNavigator();

  const createNewTask = React.useCallback(() => {
    createTask(
      title,
      description,
      status!,
      type!,
      user!,
      timeAllotted,
      files,
      goToBack,
    );
  }, [
    createTask,
    title,
    description,
    status,
    type,
    user,
    timeAllotted,
    files,
    goToBack,
  ]);

  return (
    <View style={styles.container}>
      <Header title="Task Creator" isBack />
      <ScrollView>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Create New Task</Text>

          <View style={styles.form_wrapper}>
            <TextInput
              label="Title"
              variant="outlined"
              value={title}
              onChangeText={setTitle}
              // onBlur={() => validateField('email', email || '')}
            />
            <TextInput
              style={styles.input}
              label="Description"
              variant="outlined"
              value={description}
              onChangeText={setDescription}
              // onBlur={() => validateField('name', name || '')}
            />
            <TextInput
              style={styles.input}
              label="Time Allotted (minutes)"
              variant="outlined"
              keyboardType="number-pad"
              value={timeAllotted}
              onChangeText={setTimeAllotted}
              // onBlur={() => validateField('name', name || '')}
            />

            <TypePicker type={type} setType={setType} />

            <StatusPicker status={status} setStatus={setStatus} />

            <UserPicker
              usersInProject={projectInfo!.users}
              user={user}
              setUser={setUser}
            />

            <Button
              title="CREATE NEW TASK"
              onPress={createNewTask}
              style={styles.button}
              loading={loading}
              disabled={loading || !type || !status || !user}
            />
          </View>
        </View>
      </ScrollView>
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
  form_wrapper: {
    marginTop: 20,
  },
  input: {
    marginTop: 10,
  },
  button: {
    elevation: 0,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0,
    shadowRadius: 0,
    marginTop: 15,
    marginHorizontal: 5,
  },
});
