import { Component , Input , Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {


// @Input() 
// data : any;

@Output()
search = new EventEmitter();



}
