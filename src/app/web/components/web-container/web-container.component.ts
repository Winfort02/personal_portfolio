import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-web-container',
  standalone: true,
  imports: [],
  templateUrl: './web-container.component.html',
  styleUrl: './web-container.component.scss',
})
export class WebContainerComponent {
  @Input() label!: string;
  @Input() icon!: string;
  @Input() flexLayout: string = 'flex-column';
  @Input() iconColor: string = 'text-teal-500';
  @Input() textColor: string = 'text-800';
}
