import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
GetAllTracksURL= 'http://localhost:5000/streaming';
RandomTrackURL ='http://localhost:5000/streaming/random';
  constructor(private http:HttpClient) { }
  GetTracks(){
    return this.http.get(this.GetAllTracksURL);
  }
  GetRandomTracks(){
    return this.http.get(this.RandomTrackURL)
  }
}
