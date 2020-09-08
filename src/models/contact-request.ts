export class ContactRequest {
  personalData: PersonalData;
  text: string = '';
}

export class PersonalData {
  name: string = '';
  phone: string = '';
  email: string = '';
  msg: string = '';
}