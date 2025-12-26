
export interface Meeting {
  location: string;
  day: string;
  time: string;
}

export interface RegistrationFormData {
  fullName: string;
  email: string;
  phone: string;
  preferredLocation: string;
  meetingType: 'In-Person' | 'Online';
  message: string;
}
