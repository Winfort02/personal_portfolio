import { IResponsibility } from './responsibilty.interface';

export interface IExperience {
  id: number;
  companyName: string;
  position: string;
  dateAttended: string;
  responsibilty: IResponsibility;
}
