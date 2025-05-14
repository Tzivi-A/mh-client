export interface RegistrationFormValues {
  // Personal Details
  idNumber: string;
  firstName: string;
  lastName: string;
  // Contact Details
  email: string;
  isEmailConfirmed: boolean;
  // Address
  city: string;
  street: string;
  houseNumber: string;
  apartment: string;
  zipCode: string;
  // Phone Numbers
  primaryPhone: string;
  secondaryPhone: string;
}
