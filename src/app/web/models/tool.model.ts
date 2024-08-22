import { ITool } from '../interfaces/tool.interface';

export class Tool implements ITool {
  id?: number | undefined = 0;
  imageLink = '';
}
