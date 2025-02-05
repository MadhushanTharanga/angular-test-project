import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-customer-template',
  standalone: true,
  imports: [],
  templateUrl: './customer-template.component.html',
  styleUrl: './customer-template.component.scss'
})
export class CustomerTemplateComponent {
 @Input() customer :any;
}
