import { Component } from '@angular/core';
import {SearchBarComponent} from "../search-bar/search-bar.component";

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [
    SearchBarComponent
  ],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {
  text ='';
  setText(value:any){
    this.text=value
  }
}
