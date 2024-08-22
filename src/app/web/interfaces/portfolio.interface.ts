import { IAchievement } from './achievement.interface';
import { IExperience } from './experience.interface';
import { IPersonalDetails } from './personal-details.interface';
import { IProject } from './project.interface';
import { ISkill } from './skill.interface';
import { ITool } from './tool.interface';

export interface IPortfolio {
  personalDetail: IPersonalDetails;
  skills: ISkill[];
  achievement: IAchievement;
  experiences: IExperience[];
  projects: IProject[];
  tools: ITool[];
}
