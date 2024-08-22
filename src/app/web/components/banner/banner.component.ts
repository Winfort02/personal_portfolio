import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  constructor(public storeService: StoreService) {}
}
