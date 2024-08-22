import { Component, effect, OnInit, signal } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { EducationsComponent } from '../educations/educations.component';
import { ExperienceComponent } from '../experience/experience.component';
import { AboutComponent } from '../about/about.component';
import { SkillComponent } from '../skill/skill.component';
import { ScrollTopModule } from 'primeng/scrolltop';
import { ProjectComponent } from '../project/project.component';
import { ToolsComponent } from '../tools/tools.component';
import { CoreService } from '../../services/core.service';
import { Portfolio } from '../../models/portfolio.model';
import { SkeletonComponent } from '../skeleton/skeleton.component';
import { StoreService } from '../../services/store.service';
import { Achievement } from '../../models/achievement.model';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ToolbarComponent,
    BannerComponent,
    EducationsComponent,
    ExperienceComponent,
    AboutComponent,
    SkillComponent,
    ProjectComponent,
    ToolsComponent,
    ScrollTopModule,
    SkeletonComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [CoreService],
})
export class HomeComponent implements OnInit {
  constructor(
    private coreService: CoreService,
    private storeService: StoreService
  ) {
    effect(() => this.portfolio());
  }
  portfolio = signal<Portfolio>(new Portfolio());
  isLoading = signal<boolean>(true);

  ngOnInit(): void {
    this.getPortfolioDetails();
    console.log(new Achievement());
  }

  getPortfolioDetails() {
    this.isLoading.set(true);
    this.coreService.getPorfolioDetails().subscribe({
      next: (response: Portfolio) => this.portfolio.set(response),
      error: (error) => {
        throw new Error(error);
      },
      complete: () => {
        this.storeService.personalDetail = this.portfolio().personalDetail;
        this.storeService.skills = this.portfolio().skills;
        this.storeService.achievement = this.portfolio().achievement;
        this.storeService.experiences = this.portfolio().experiences;
        this.storeService.projects = this.portfolio().projects;
        this.storeService.tools = this.portfolio().tools;
        this.isLoading.set(false);
      },
    });
  }
}
