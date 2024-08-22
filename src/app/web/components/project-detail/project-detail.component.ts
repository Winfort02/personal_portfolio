import { Component, OnInit } from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { FooterComponent } from '../footer/footer.component';
import { Project } from '../../models/project.model';
import { ActivatedRoute } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CoreService } from '../../services/core.service';
import { SkeletonComponent } from '../skeleton/skeleton.component';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [ToolbarComponent, FooterComponent, ButtonModule, SkeletonComponent],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss',
  providers: [CoreService],
})
export class ProjectDetailComponent implements OnInit {
  constructor(
    private coreService: CoreService,
    private route: ActivatedRoute
  ) {}
  project: Project = new Project();
  isLoading!: boolean;

  loadProjectDetails() {
    this.isLoading = true;
    const id: number = parseInt(this.route.snapshot.params['id'], 10) || 0;
    this.coreService.getProjectById(id).subscribe({
      next: (response: Project) => (this.project = response),
      error: (err) => {
        throw new Error(err);
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  onBack() {}

  ngOnInit(): void {
    this.loadProjectDetails();
  }
}
