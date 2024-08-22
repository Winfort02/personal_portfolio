import { IExperience } from '../interfaces/experience.interface';
import { IResponsibility } from '../interfaces/responsibilty.interface';

export class Experience implements IExperience {
  id = 0;
  companyName = '';
  position = '';
  dateAttended = '';
  responsibilty!: IResponsibility;
}
