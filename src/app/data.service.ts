import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(){
  	return this.http.get('http://api.football-api.com/2.0/standings/1204?Authorization=565ec012251f932ea4000001fa542ae9d994470e73fdb314a8a56d76')
  }

  getFixture(){
  	let headers = new HttpHeaders().set('X-Auth-Token','974149c5462b4d4f94c9df60dce9d1bf');
  	return this.http.get('http://api.football-data.org/v2/competitions/PL/matches', {headers})
  }

  POST_HEADERS = {
  	headers: new HttpHeaders({
  		'Access-Control-Allow-Origin':'*',
  		'Content-Type': 'application/json',
  		'Access-Control-Allow-Methods': 'POST, GET, DELETE, OPTIONS'
  	}),
  	responseType: 'json' as 'json'
  };

	getPrediction(teamdata){
	return(
	this.http
  			.post('http://127.0.0.1:8000/employees', teamdata, this.POST_HEADERS)
  			);
  }
}
