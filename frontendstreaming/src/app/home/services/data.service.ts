import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  public apiUrl = environment.api;
GetAllTracksURL= this.apiUrl + 'streaming';
RandomTrackURL =this.apiUrl + 'streaming/random';
AddTrackURL = this.apiUrl + 'streaming';
  constructor(private http:HttpClient) { }
  GetTracks(){
    return this.http.get(this.GetAllTracksURL);
  }
  GetRandomTracks(){
    return this.http.get(this.RandomTrackURL)
  }
  addTrack(track:any){
    return this.http.post(this.AddTrackURL,track)
  }
}
