import { Component, OnInit, signal } from '@angular/core';
import { CoreService } from '../../services/core.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from '../../models/experience.model';
import { SkeletonComponent } from '../skeleton/skeleton.component';
import { ButtonModule } from 'primeng/button';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-experience-detail',
  standalone: true,
  imports: [SkeletonComponent, ButtonModule, ToolbarComponent, FooterComponent],
  templateUrl: './experience-detail.component.html',
  styleUrl: './experience-detail.component.scss',
  providers: [CoreService],
})
export class ExperienceDetailComponent implements OnInit {
  constructor(
    private coreService: CoreService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  experience = signal<Experience>(new Experience());
  isLoaded = signal<boolean>(true);

  loadExperienceDetail() {
    const id = parseInt(this.route.snapshot.params['id'], 10);
    this.coreService.getExperienceById(id).subscribe({
      next: (response: Experience) => {
        if (!response) this.router.navigate(['/home']);
        this.experience.set(response);
      },
      error: (error) => {
        throw new Error(error);
      },
      complete: () => {
        if (this.experience()) this.isLoaded.set(false);
      },
    });
  }

  onBack() {
    this.router.navigate(['/home'], { fragment: 'web-experience' });
  }

  ngOnInit(): void {
    this.loadExperienceDetail();
  }
}
