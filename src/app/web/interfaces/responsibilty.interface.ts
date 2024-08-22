import { IJob } from './job.interface';
import { ITechnology } from './technology.interface';
import { ITool } from './tool.interface';

export interface IResponsibility {
  id?: number;
  job: IJob[];
  tools: ITool[];
  technologies: ITechnology[];
}
