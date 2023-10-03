export const isEmailValid = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isPhoneNumberValid = (phoneNumber: string): boolean => {
  const phoneRegex = /^\d{10}$/; // Assuming a 10-digit phone number for simplicity
  return phoneRegex.test(phoneNumber);
};

export const isFieldValid = (fieldType: string, value: string): boolean => {
  switch (fieldType) {
    case "email":
      return isEmailValid(value);
    case "phone":
      return isPhoneNumberValid(value);
    default:
      return true;
  }
};
