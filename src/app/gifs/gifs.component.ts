import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit ,OnDestroy{
  gifs :any[] = [];
  subscription :Subscription;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getTrendingGif();
    
  this.subscription = this.dataService.getGif().subscribe((response:any)=>{
   this.gifs=response;
  })
  }
ngOnDestroy(){
  this.subscription.unsubscribe();
}
}
