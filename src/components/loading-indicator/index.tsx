import React from 'react';
import {StyleSheet, View, ActivityIndicator, Modal} from 'react-native';

interface LoadingIndicatorProps {
  visible: boolean;
}

export const LoadingIndicator = ({visible}: LoadingIndicatorProps) => {
  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      statusBarTranslucent>
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6200ed" />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
