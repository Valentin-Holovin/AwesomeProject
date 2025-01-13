import {TUserRole} from '../interfaces';
import axiosInstance from './axios';

export const signInApi = async (email: string, password: string) => {
  const res = await axiosInstance.post('/users/login', {
    email: email,
    password: password,
  });
  return res.data;
};

export const signUpApi = async (
  email: string,
  name: string,
  password: string,
  role: TUserRole,
  avatar?: string,
) => {
  const formData = new FormData();
  formData.append('email', email);
  formData.append('name', name);
  formData.append('password', password);
  formData.append('role', role);
  if (avatar) {
    const file = {
      uri: avatar,
      name: 'avatar.jpg',
      type: 'image/jpeg',
    } as any;
    formData.append('avatar', file);
  }
  console.log('formdata:', email, name, password, role, avatar);
  const res = await axiosInstance.post('/users/registration', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
};
