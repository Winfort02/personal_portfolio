import { IProject } from '../interfaces/project.interface';

export class Project implements IProject {
  id?: number = 0;
  projectName = '';
  imageLink = '';
  duration = 0;
}
