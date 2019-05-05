import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  fixture: Object;

  constructor(private data: DataService) { }
  

  ngOnInit() {
  	this.data.getData().subscribe(data => {
    this.fixture = data
  		console.log(this.fixture);
  	})
  }
}
