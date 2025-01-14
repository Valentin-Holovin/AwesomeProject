import {Text, Button} from '@react-native-material/core';
import React from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import {IUser} from '../../interfaces';
import {UsersInProjectList} from '../users-in-project-list';
import {UserTabs} from '../user-tabs';
import {AddIcon, CloseIcon} from '../../assets';

interface UsersInProjectModalProps {
  open: boolean;
  usersInProject: IUser[];
  usersOutsideProject: IUser[];
  closeModal: () => void;
  addUserToCurrentProject: (user: IUser) => void;
  removeUserFromCurrentProject: (user: IUser) => void;
}

export const UsersInProjectModal = ({
  open,
  usersInProject,
  usersOutsideProject,
  closeModal,
  addUserToCurrentProject,
  removeUserFromCurrentProject,
}: UsersInProjectModalProps) => {
  const [activeTab, setActiveTab] = React.useState('first');

  return (
    <Modal visible={open} animationType="fade" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Users</Text>

          <UserTabs activeTab={activeTab} setActiveTab={setActiveTab} />

          {activeTab === 'first' && (
            <UsersInProjectList
              data={usersInProject}
              icon={<CloseIcon />}
              onClick={removeUserFromCurrentProject}
            />
          )}

          {activeTab === 'second' && (
            <UsersInProjectList
              data={usersOutsideProject}
              icon={<AddIcon />}
              onClick={addUserToCurrentProject}
            />
          )}

          <View style={styles.modalCloseButton}>
            <Button style={styles.button} title="CLOSE" onPress={closeModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  modalContent: {
    width: '90%',
    height: '65%',
    backgroundColor: 'white',
    borderRadius: 6,
    position: 'relative',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 10,
  },
  modalCloseButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
    paddingTop: 10,
  },
  button: {
    elevation: 0,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0,
    shadowRadius: 0,
    marginHorizontal: 5,
  },
});
