import {useState} from 'react';
import {showToast} from '../services';

interface ValidationResult {
  isValid: boolean;
  errorMessage: string;
}

export const useValidation = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const showToastError = (message: string) => {
    showToast({
      type: 'error',
      text1: 'Validation Error',
      text2: message,
    });
  };

  const validateEmail = (email: string): ValidationResult => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      const errorMessage = 'Email is required.';
      showToastError(errorMessage);
      return {isValid: false, errorMessage};
    }
    if (!emailRegex.test(email)) {
      const errorMessage = 'Invalid email format.';
      showToastError(errorMessage);
      return {isValid: false, errorMessage};
    }
    return {isValid: true, errorMessage: ''};
  };

  const validatePassword = (password: string): ValidationResult => {
    const passwordRegex = /^(?=.*[a-zA-Z]).{6,32}$/;
    if (!password) {
      const errorMessage = 'Password is required.';
      showToastError(errorMessage);
      return {isValid: false, errorMessage};
    }
    if (password.length < 6 || password.length > 32) {
      const errorMessage = 'Password must be between 6 and 32 characters.';
      showToastError(errorMessage);
      return {isValid: false, errorMessage};
    }
    if (!passwordRegex.test(password)) {
      const errorMessage = 'Password must include letters (not just numbers).';
      showToastError(errorMessage);
      return {isValid: false, errorMessage};
    }
    return {isValid: true, errorMessage: ''};
  };

  const validateName = (name: string): ValidationResult => {
    if (!name) {
      const errorMessage = 'Name is required.';
      showToastError(errorMessage);
      return {isValid: false, errorMessage};
    }
    if (name.length < 3) {
      const errorMessage = 'Name must be at least 3 characters.';
      showToastError(errorMessage);
      return {isValid: false, errorMessage};
    }
    return {isValid: true, errorMessage: ''};
  };

  const validateTitleOrDescription = (
    value: string,
    fieldName: string,
  ): ValidationResult => {
    if (!value) {
      const errorMessage = `${fieldName} is required.`;
      showToastError(errorMessage);
      return {isValid: false, errorMessage};
    }
    if (value.length < 3) {
      const errorMessage = `${fieldName} must be at least 3 characters.`;
      showToastError(errorMessage);
      return {isValid: false, errorMessage};
    }
    return {isValid: true, errorMessage: ''};
  };

  const validateField = (fieldName: string, value: string) => {
    let result: ValidationResult;

    if (fieldName === 'email') {
      result = validateEmail(value);
    } else if (fieldName === 'password') {
      result = validatePassword(value);
    } else if (fieldName === 'name') {
      result = validateName(value);
    } else if (fieldName === 'title' || fieldName === 'description') {
      result = validateTitleOrDescription(value, fieldName);
    } else {
      result = {isValid: true, errorMessage: ''};
    }

    setErrors(prevErrors => ({
      ...prevErrors,
      [fieldName]: result.errorMessage,
    }));

    return result.isValid;
  };

  return {
    errors,
    validateField,
  };
};
