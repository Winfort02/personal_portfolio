import { IAchievement } from '../interfaces/achievement.interface';
import { IAward } from '../interfaces/award.interface';
import { IEducation } from '../interfaces/education.interface';

export class Achievement implements IAchievement {
  id?: number | undefined = 0;
  awards: IAward[] = [];
  educations: IEducation[] = [];
}
