import { HttpClient } from '@angular/common/http';
import { computed, Injectable, Signal, signal } from '@angular/core';
import { delay, map, shareReplay, take, tap } from 'rxjs/operators';
import { Portfolio } from '../models/portfolio.model';
import { Experience } from '../models/experience.model';
import { Tool } from '../models/tool.model';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  url: string = './../../../assets/data/mock.json';

  constructor(private httpClient: HttpClient) {}
  private _tools = signal<Tool[]>([]);

  set tools(value: Tool[]) {
    this._tools.set(value);
  }

  get tools(): Signal<Tool[]> {
    return computed(() => this._tools());
  }

  getPorfolioDetails() {
    return this.httpClient.get(this.url).pipe(
      take(1),
      delay(1000),
      map((data: any) => (data?.portfolio as Portfolio) || ({} as Portfolio)),
      shareReplay(1)
    );
  }

  getExperienceById(id: number) {
    return this.httpClient.get(this.url).pipe(
      take(1),
      delay(1000),
      map((data: any) => {
        const portfolio: Portfolio = data?.portfolio || {};
        if (portfolio?.experiences?.length) {
          return portfolio.experiences.find(
            (item) => item.id === id
          ) as Experience;
        }
        return {} as Experience;
      }),
      shareReplay(1)
    );
  }

  getProjectById(id: number) {
    return this.httpClient.get(this.url).pipe(
      take(1),
      delay(1000),
      map((data: any) => {
        const projects: Project[] = data.portfolio.projects;
        if (projects.length) {
          return projects.find((item) => item.id === id) as Project;
        }
        return {} as Project;
      })
    );
  }
}
