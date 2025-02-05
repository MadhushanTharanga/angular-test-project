import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  @Output() searchEmitter : EventEmitter<any> = new EventEmitter<any>();
  search(value:any){
    this.searchEmitter.emit(value)
  }
}
