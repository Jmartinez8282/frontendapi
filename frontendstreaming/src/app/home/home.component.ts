import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dService:DataService) { }

  ngOnInit() {
    this.dService.GetTracks().subscribe(x=> console.log(x));
    this.dService.GetRandomTracks().subscribe(x=> console.log(x));
    this.dService.addTrack({
      artistName:"Norrin Radd",
      trackName:"Go Home and Bea Family Man",
      albumName:"Street Fighter 2",
      trackUrl:"https://codestackcdnwest.blob.core.windows.net/muiscstreaming/Street_Fighter_2_GoHomeandBeaFamilyMan_OC_ReMix.mp3"

    }).subscribe(x=> console.log(x));
  } 

}
