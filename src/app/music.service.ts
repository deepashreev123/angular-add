import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Track } from './track';


@Injectable({
  providedIn: 'root'
})
export class MusicService {

  public track;
  public count=1000;

  constructor(private http:HttpClient) { }


  getTrendMusic():any{
    return this.http.get("http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=disco&api_key=2e87936224c8024f4e1471c4a1b0ea9f&format=json");
  }

  getMusic(value):any{
    var url=`http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=disco&api_key=2e87936224c8024f4e1471c4a1b0ea9f&format=json`;
    return this.http.get(url);
  }
 
  add(music):Observable<any> {
    console.log("valuevaluevalue", music);
    this.count++;
    this.track=new Track(this.count, music.name, music.url);
    console.log(this.track);
    return this.http.post<any>('http://localhost:8090/api/v1/track',this.track);
  }

  getWishlist():Observable<any>{
    return this.http.get<any>("http://localhost:8090/api/v1/track");
  }
}
  