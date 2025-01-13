import React from 'react';
import {usePermission} from './usePermission';
import {PERMISSIONS} from 'react-native-permissions';
import {CameraOptions, launchImageLibrary} from 'react-native-image-picker';

export const useGallery = () => {
  const [photo, setPhoto] = React.useState<string>();

  const {allowed, checkPermission} = usePermission(
    PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
  );

  const fetchGallery = React.useCallback(async (): Promise<
    string | undefined
  > => {
    const options: CameraOptions = {
      mediaType: 'photo',
      quality: 1,
    };
    let galleryRespose = await launchImageLibrary(options);
    if (galleryRespose.assets) {
      return galleryRespose.assets[0].uri;
    }
  }, []);

  const selectPhoto = async (): Promise<string | undefined> => {
    let photoUri: string | undefined;

    if (allowed) {
      photoUri = await fetchGallery();
    } else {
      const permissionStatus = await checkPermission();
      if (permissionStatus) {
        photoUri = await fetchGallery();
      }
    }
    if (photoUri) {
      setPhoto(photoUri);
    }
    return photoUri;
  };
  return {photo, selectPhoto};
};
