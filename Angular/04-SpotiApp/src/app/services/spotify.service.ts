import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  
  constructor(private _http:HttpClient) { }

  getQuery(query:string){
    const url:string = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDe4MecFWPMQUWrHrjEXbdGqa1Er3tMPS0YolCKhHj8TNxIjtCpPsmIa1diZRjszXlyM0JLt9a3u2QzWdLKxo20mFvekebahU4L81r1na6rWIypHtg'
    })

    return this._http.get(url, { headers })
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases?country=AR&offset=0&limit=10')
    .pipe(
        map( (data:any) =>{
          return data['albums'].items;
        })
      )
  }

  getArtists(artist:string){

    return this.getQuery(`search?q=${artist}&type=artist&limit=10`)
    .pipe(
      map( (data:any) =>{
        return data['artists'].items;
      })
    )
  }

  getArtist(id:string){
    return this.getQuery(`artists/${id}`);
  }
  
  getTopTracks(id: string){
    return this.getQuery(`artists/${id}/top-tracks?market=US`)
    .pipe(map((data:any) => {
      console.log(data, 'DATA');
      
      return data['tracks']
    }))
  }
}
