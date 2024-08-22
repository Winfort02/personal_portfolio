import { ISkill } from '../interfaces/skill.interface';

export class Skill implements ISkill {
  id?: number = 0;
  skillName = '';
  description = '';
  imageLink = '';
  duration = 0;
}
