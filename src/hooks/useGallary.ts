import React from 'react';
import {usePermission} from './usePermission';
import {PERMISSIONS} from 'react-native-permissions';
import {CameraOptions, launchImageLibrary} from 'react-native-image-picker';
import {Platform} from 'react-native';

export const useGallery = () => {
  const [photo, setPhoto] = React.useState<string>();

  const photoPermission =
    Platform.OS === 'ios'
      ? PERMISSIONS.IOS.PHOTO_LIBRARY
      : PERMISSIONS.ANDROID.READ_MEDIA_IMAGES;

  const {allowed, checkPermission} = usePermission(photoPermission);

  React.useEffect(() => {
    checkPermission();
  }, [checkPermission]);

  const fetchGallery = React.useCallback(async (): Promise<
    string | undefined
  > => {
    const options: CameraOptions = {
      mediaType: 'photo',
      quality: 1,
    };
    let galleryResponse = await launchImageLibrary(options);
    if (galleryResponse.assets) {
      return galleryResponse.assets[0].uri;
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
