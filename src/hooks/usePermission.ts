import React from 'react';
import {Permission, RESULTS, check, request} from 'react-native-permissions';

export const usePermission = (permission: Permission) => {
  const [allowed, setAllowed] = React.useState(false);

  const checkPermission = async (): Promise<boolean> => {
    try {
      const permissionStatus = await check(permission);
      if (
        permissionStatus === RESULTS.GRANTED ||
        permissionStatus === RESULTS.LIMITED
      ) {
        setAllowed(true);
        return true;
      } else {
        return requestPermission(permission);
      }
    } catch (error) {
      console.error(`Error checking ${permission} permission:`, error);
      return false;
    }
  };

  const requestPermission = async (
    permission: Permission,
  ): Promise<boolean> => {
    const result = await request(permission);
    if (result === RESULTS.GRANTED || result === RESULTS.LIMITED) {
      setAllowed(true);
      return true;
    } else {
      setAllowed(false);
      return false;
    }
  };

  return {allowed, checkPermission};
};
