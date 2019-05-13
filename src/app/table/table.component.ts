import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  table: Object;

  constructor(private data: DataService) { }
  

  ngOnInit() {
  	this.data.getTable().subscribe(data => {
    this.table = data
  		console.log(this.table);
  	})
  }
}

