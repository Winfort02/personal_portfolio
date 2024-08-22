import { computed, Injectable, Signal, signal } from '@angular/core';
import { Tool } from '../models/tool.model';
import { Project } from '../models/project.model';
import { Experience } from '../models/experience.model';
import { Skill } from '../models/skill.model';
import { Achievement } from '../models/achievement.model';
import { PersonalDetail } from '../models/personal-detail.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor() {}

  private _tools = signal<Tool[]>([]);
  private _projects = signal<Project[]>([]);
  private _experiences = signal<Experience[]>([]);
  private _skills = signal<Skill[]>([]);
  private _achievement = signal<Achievement>(new Achievement());
  private _personalDetail = signal<PersonalDetail>(new PersonalDetail());

  set tools(value: Tool[]) {
    this._tools.set(value);
  }

  set projects(value: Project[]) {
    this._projects.set(value);
  }

  set experiences(value: Experience[]) {
    this._experiences.set(value);
  }

  set skills(value: Skill[]) {
    this._skills.set(value);
  }

  set achievement(value: Achievement) {
    this._achievement.set(value);
  }

  set personalDetail(value: PersonalDetail) {
    this._personalDetail.set(value);
  }

  get tools(): Signal<Tool[]> {
    return computed(() => this._tools());
  }

  get projects(): Signal<Project[]> {
    return computed(() => this._projects());
  }

  get experiences(): Signal<Experience[]> {
    return computed(() => this._experiences());
  }

  get skills(): Signal<Skill[]> {
    return computed(() => this._skills());
  }

  get achievement(): Signal<Achievement> {
    return computed(() => this._achievement());
  }

  get personalDetail(): Signal<PersonalDetail> {
    return computed(() => this._personalDetail());
  }
}
