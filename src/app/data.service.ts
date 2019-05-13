import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getTable(){
  	return this.http.get('http://api.football-api.com/2.0/standings/1204?Authorization=565ec012251f932ea4000001fa542ae9d994470e73fdb314a8a56d76')
  }

  getFixture(){
  	let headers = new HttpHeaders().set('X-Auth-Token','974149c5462b4d4f94c9df60dce9d1bf');
  	return this.http.get('http://api.football-data.org/v2/competitions/PL/matches', {headers})
  }

  POST_HEADERS = {
  	headers: new HttpHeaders({
  		'Content-Type': 'application/json',
  	}),
  	responseType: 'json' as 'json'
  };

	getPrediction(teamdata){
	return(
	this.http
  			.post('http://127.0.0.1:8000/prediction/', teamdata, this.POST_HEADERS)
  			);
  }
}
