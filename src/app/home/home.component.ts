import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  final = '';

  constructor(private data: DataService) { }

  ngOnInit() {
  }



  doPrediction(team1, team2){
  	if(team1.value == team2.value){
  		alert("Same team selected");
  		return;
  	}

  	const teams = {
  		'team1': team1.value,
  		'team2': team2.value
  	};

  	this.data.getPrediction(teams).subscribe(data => {
	  	if(data == 'W'){
	  		this.final = team1.value;
	  	} else if (data == 'D'){
	  		this.final = 'Draw';
	  	} else {
	  		this.final = team2.value;
	  	}
  	})


  	
  }
}
