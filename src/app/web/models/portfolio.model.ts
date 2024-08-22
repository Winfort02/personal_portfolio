import { IAchievement } from '../interfaces/achievement.interface';
import { IExperience } from '../interfaces/experience.interface';
import { IPortfolio } from '../interfaces/portfolio.interface';
import { IProject } from '../interfaces/project.interface';
import { ISkill } from '../interfaces/skill.interface';
import { Achievement } from './achievement.model';
import { PersonalDetail } from './personal-detail.model';
import { Tool } from './tool.model';

export class Portfolio implements IPortfolio {
  personalDetail = new PersonalDetail();
  skills: ISkill[] = [];
  achievement: IAchievement = new Achievement();
  experiences: IExperience[] = [];
  projects: IProject[] = [];
  tools: Tool[] = [];
}
