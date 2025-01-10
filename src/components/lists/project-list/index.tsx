import React from 'react';
import {FlatList} from 'react-native';
import {IProject} from '../../../interfaces';
import {ProjectListItem} from '../../listItem/project-list-item';
import {LoadingIndicator} from '../../loading-indicator';
import {UniversalErrorIcon, UniversalStubIcon} from '../../../assets';

interface ProjectListProps {
  projects: IProject[];
  loading: boolean;
  error: any;
}

export const ProjectList = ({projects, loading, error}: ProjectListProps) => {
  const renderItem = ({item}: {item: IProject}) => {
    return <ProjectListItem project={item} />;
  };

  if (error) {
    return <UniversalErrorIcon text="Something went wrong" />;
  }

  if (projects.length === 0) {
    return <UniversalStubIcon text="No Projects" />;
  }

  return (
    <>
      <LoadingIndicator visible={loading} />

      <FlatList
        data={projects}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </>
  );
};
