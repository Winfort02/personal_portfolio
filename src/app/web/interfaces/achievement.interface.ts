import { IAward } from './award.interface';
import { IEducation } from './education.interface';

export interface IAchievement {
  id?: number;
  awards: IAward[];
  educations: IEducation[];
}
