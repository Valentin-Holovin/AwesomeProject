/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {FlatList, Modal, StyleSheet, View} from 'react-native';
import {IType} from '../../interfaces';
import {useTypes} from '../../hooks';
import {Button, Text} from '@react-native-material/core';
import {LoadingIndicator} from '../loading-indicator';
import {TypeListItem} from '../listItem/type-list-item';
import {UniversalErrorIcon} from '../../assets';

interface TypePickerModalProps {
  selectType: (selectedType: IType) => void;
  closeModal: () => void;
  open: boolean;
}

export const TypePickerModal = ({
  selectType,
  closeModal,
  open,
}: TypePickerModalProps) => {
  const {types, error, loading, fetchTypes} = useTypes();

  React.useEffect(() => {
    fetchTypes();
  }, []);

  const renderItem = ({item}: {item: IType}) => {
    return <TypeListItem types={item} selectType={selectType} />;
  };

  if (error) {
    return <UniversalErrorIcon text="Something went wrong" />;
  }

  return (
    <Modal visible={open} animationType="fade" transparent={true}>
      <LoadingIndicator visible={loading} />

      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Select Type</Text>

          <FlatList
            data={types}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          />

          <Button title="CLOSE" onPress={closeModal} style={styles.button} />
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
    zIndex: 9999,
  },
  modalContent: {
    width: '90%',
    height: '45%',
    backgroundColor: 'white',
    borderRadius: 6,
    position: 'relative',
    paddingHorizontal: 30,
    paddingBottom: 20,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 10,
  },
  button: {
    elevation: 0,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0,
    shadowRadius: 0,
    marginHorizontal: 5,
    marginTop: 10,
  },
});
