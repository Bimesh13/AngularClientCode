import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  final1 = '';


  constructor(private data: DataService) { }

  ngOnInit() {
  }

  doPrediction1(team1, team2){
  	if(team1.value == team2.value){
  		alert("Same team selected");
  		return;
  	}

  	const teams1 = {
  		'team1': team1.value,
  		'team2': team2.value
  	};

  	this.data.getPrediction(teams1).subscribe(data => {
	  	if(data == 1){
	  		this.final1 = (team1.value + " is the winner !");
	  	} else if (data == 0){
	  		this.final1 = 'It is a Draw';
	  	} else {
	  		this.final1 = (team2.value + " is the winner !");
	  	}
      console.log(data);
  	})




  	
  }
}
