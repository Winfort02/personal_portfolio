import { Component, computed, Input, OnInit, signal } from '@angular/core';
import { WebContainerComponent } from '../web-container/web-container.component';
import { PersonalDetail } from '../../models/personal-detail.model';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [WebContainerComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  constructor(public storeServie: StoreService) {}

  ngOnInit(): void {}
}
