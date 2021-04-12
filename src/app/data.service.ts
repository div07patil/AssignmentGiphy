import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
gifs = new BehaviorSubject<any>([]);
  constructor(private http:HttpClient) { }
  getTrendingGif(){
    return this.http.get('https://api.giphy.com/v1/gifs/trending?api_key=P6izXiP6FXa1KqRezKOgJugdrJr480Oo&limit=50&rating=g')
    .subscribe((response:any)=>{
      console.log(response);
    this.gifs.next(response.data);
    });
  }
  searchGif(_gifName:string){
    return this.http.get('https://api.giphy.com/v1/gifs/search?&api_key=P6izXiP6FXa1KqRezKOgJugdrJr480Oo&limit=50&rating=g')
    .subscribe((response:any)=>{
      console.log(response);
      this.gifs.next(response.data);
      });
  }
  getGif(){
    return this.gifs.asObservable();
  }
}
