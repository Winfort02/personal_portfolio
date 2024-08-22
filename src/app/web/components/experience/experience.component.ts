import { Component } from '@angular/core';
import { WebContainerComponent } from '../web-container/web-container.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [WebContainerComponent, CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  constructor(private router: Router, public storeService: StoreService) {}
  selectedIndex!: number | null;
  selected: any = {
    0: null,
  };

  onShowProject(index: number) {
    this.selectedIndex = this.selectedIndex === index ? null : index;
    if (this.selected[index] != index) {
      this.selected[index] = this.selectedIndex;
    } else {
      this.selected[index] = null;
    }
  }

  onShowExperienceDetail(id: number) {
    this.router.navigate(['experience-detail/' + id]);
  }
}
