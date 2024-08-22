import { Component, OnInit, signal } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { INavigation } from '../../interfaces/navigation.interface';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [ToolbarModule, RouterLink],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent implements OnInit {
  items = signal<INavigation[]>([
    {
      link: '',
      label: 'Home',
      fragment: '',
    },
    {
      link: 'home',
      label: 'About',
      fragment: 'web-about',
    },
    {
      link: 'home',
      label: 'Achievement',
      fragment: 'web-education',
    },
    {
      link: 'home',
      label: 'Experience',
      fragment: 'web-experience',
    },
    {
      link: 'home',
      label: 'Project',
      fragment: 'web-project',
    },
    {
      link: 'home',
      label: 'Tools',
      fragment: 'web-tool',
    },
  ]);
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          });
        }
      }
    });
  }
}
