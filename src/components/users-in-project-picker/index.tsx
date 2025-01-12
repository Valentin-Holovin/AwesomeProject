/* eslint-disable react-hooks/exhaustive-deps */
import {Button} from '@react-native-material/core';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IUser} from '../../interfaces';
import {useSelector} from 'react-redux';
import {TRootState} from '../../store';
import {usersOutsideProjectSelector} from '../../store/selectors/usersSelectors';
import {useProjects, useUsers} from '../../hooks';
import {UsersInProjectModal} from '../users-in-project-modal';
import {LoadingIndicator} from '../loading-indicator';
import {showToast} from '../../services';

interface UserInProjectPickerProps {
  projectId: number;
  usersInProject: IUser[];
}

export const UserInProjectPicker = ({
  projectId,
  usersInProject,
}: UserInProjectPickerProps) => {
  const [open, setOpen] = React.useState(false);

  const usersOutsideProject = useSelector<TRootState, IUser[]>(
    (state: TRootState) => usersOutsideProjectSelector(usersInProject)(state),
  );

  const {fetchUsers, loading} = useUsers();
  const {addUserToProject, removeUserFromProject} = useProjects();

  React.useEffect(() => {
    fetchUsers();
  }, []);

  const openModal = React.useCallback(() => {
    setOpen(true);
  }, []);

  const closeModal = React.useCallback(() => {
    setOpen(false);
  }, []);

  const addUserToCurrentProject = React.useCallback(
    (selectedUser: IUser) => {
      addUserToProject(projectId, selectedUser.id);
      showToast({
        type: 'success',
        text1: 'User added to project ',
      });
    },

    [projectId],
  );

  const removeUserFromCurrentProject = React.useCallback(
    (selectedUser: IUser) => {
      removeUserFromProject(projectId, selectedUser.id);
      showToast({
        type: 'info',
        text1: 'User removed from the project',
      });
    },
    [projectId],
  );

  return (
    <View style={styles.container}>
      <LoadingIndicator visible={loading} />

      <Button
        title="USER IN PROJECT"
        style={styles.button}
        titleStyle={styles.button_text}
        onPress={openModal}
      />

      <UsersInProjectModal
        open={open}
        usersInProject={usersInProject}
        usersOutsideProject={usersOutsideProject}
        closeModal={closeModal}
        addUserToCurrentProject={addUserToCurrentProject}
        removeUserFromCurrentProject={removeUserFromCurrentProject}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
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
