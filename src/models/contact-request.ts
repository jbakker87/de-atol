export class ContactRequest {
  personalData: PersonalData;
}

export class PersonalData {
  name: string = '';
  phone: string = '';
  email: string = '';
  msg: string = '';
}