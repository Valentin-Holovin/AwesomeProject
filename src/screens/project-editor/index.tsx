/* eslint-disable react-hooks/exhaustive-deps */
import {Button, Text, TextInput} from '@react-native-material/core';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header} from '../../components';
import {useNavigator, useProjects, useValidation} from '../../hooks';
import {ProjectEditorProps} from '../../navigation/AppNavigation';

export const ProjectEditor: React.FC<ProjectEditorProps> = ({route}) => {
  const {projectId, currentTitle, currentDescription} = route.params;

  const [title, setTitle] = React.useState(currentTitle);
  const [description, setDescription] = React.useState(currentDescription);

  const {validateField} = useValidation();
  const {loading, updateProject} = useProjects();
  const {goToBack} = useNavigator();

  const updateCurrentProject = React.useCallback(() => {
    updateProject(projectId, title, description, goToBack);
  }, [projectId, title, description]);

  return (
    <View style={styles.container}>
      <Header title="Project Editor" isBack />
      <View style={styles.wrapper}>
        <Text style={styles.title}>Update Project</Text>

        <View style={styles.input_wrapper}>
          <TextInput
            placeholder="Title"
            variant="outlined"
            value={title}
            onChangeText={setTitle}
            onBlur={() => validateField('title', title)}
          />
        </View>
        <View style={styles.input_wrapper}>
          <TextInput
            placeholder="Description"
            variant="outlined"
            value={description}
            onChangeText={setDescription}
            onBlur={() => validateField('description', description)}
          />
        </View>

        <View style={styles.button_wrapper}>
          <Button
            style={styles.button}
            title="UPDATE PROJECT"
            onPress={updateCurrentProject}
            loading={loading}
            disabled={loading}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    marginHorizontal: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 20,
  },
  input_wrapper: {
    marginTop: 10,
  },
  button_wrapper: {
    marginTop: 10,
  },
  button: {
    elevation: 0,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0,
    shadowRadius: 0,
  },
});
