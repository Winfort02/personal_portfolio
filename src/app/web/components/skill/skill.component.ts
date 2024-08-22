import { Component, HostListener, OnInit, signal } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CarouselModule, ButtonModule],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss',
})
export class SkillComponent implements OnInit {
  constructor(public storeService: StoreService) {}
  responsiveOptions = signal<any[]>([]);
  showIndecators = signal<boolean>(true);

  @HostListener('window:resize', ['$event'])
  onAdjustScreenWidth() {
    if (window.innerWidth <= 768) {
      this.showIndecators.set(false);
    } else {
      this.showIndecators.set(true);
    }
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
