import { Component } from '@angular/core';
import { WebContainerComponent } from '../web-container/web-container.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [WebContainerComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
