import { IPersonalDetails } from '../interfaces/personal-details.interface';

export class PersonalDetail implements IPersonalDetails {
  id?: number | undefined = 0;
  name = '';
  phone = '';
  email = '';
  address = '';
  country = '';
  gender = '';
  bio = '';
  imageLink = '';
}
