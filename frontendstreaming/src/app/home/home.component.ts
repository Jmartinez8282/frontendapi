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
  } 

}
