import { Component, OnInit } from '@angular/core';
import { WebContainerComponent } from '../web-container/web-container.component';
import { ImageModule } from 'primeng/image';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-tools',
  standalone: true,
  imports: [WebContainerComponent, ImageModule],
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.scss',
})
export class ToolsComponent implements OnInit {
  constructor(public storeService: StoreService) {}

  ngOnInit(): void {}
}
