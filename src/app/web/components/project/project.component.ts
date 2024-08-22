import { Component, OnInit, signal } from '@angular/core';
import { WebContainerComponent } from '../web-container/web-container.component';
import { CarouselModule } from 'primeng/carousel';
import { StoreService } from '../../services/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [WebContainerComponent, CarouselModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent implements OnInit {
  constructor(public storeService: StoreService, private router: Router) {}
  responsiveOptions = signal<any[]>([]);

  onNavigateToProjectDetail(id: number) {
    this.router.navigate(['project-detail/' + id]);
  }

  ngOnInit(): void {
    this.responsiveOptions.set([
      {
        breakpoint: '1400px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '1220px',
        numVisible: 3,
        numScroll: 2,
      },
      {
        breakpoint: '1100px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '980px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1,
      },
    ]);
  }
}
