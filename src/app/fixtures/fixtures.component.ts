import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.scss']
})
export class FixturesComponent implements OnInit {

  fixture: Object;

  constructor(private data: DataService) { }
  

  ngOnInit() {
  	this.data.getFixture().subscribe(data => {
    this.fixture = data;
  	console.log(this.fixture);
  	})
  }
}
