import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { WebContainerComponent } from '../web-container/web-container.component';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-educations',
  standalone: true,
  imports: [CardModule, WebContainerComponent],
  templateUrl: './educations.component.html',
  styleUrl: './educations.component.scss',
})
export class EducationsComponent implements OnInit {
  constructor(public storeService: StoreService) {}
  ngOnInit(): void {}
}
