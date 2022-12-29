import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  topTracks: any[] = [];
  artist:any = {};
  loading?:boolean;

  constructor(private _router:ActivatedRoute, private spotifyService:SpotifyService) { 
    this._router.params.subscribe( params =>{
      this.loading = true;
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    })
  }

  ngOnInit(): void {
  }

  getArtist(id: string){
    this.loading = true;
    this.spotifyService.getArtist(id)
    .subscribe(a => {
      console.log(a,'toptracks');
      
      this.artist = a;
      this.loading = false;
    })
  }

  getTopTracks(id:string){
    this.spotifyService.getTopTracks(id)
    .subscribe((a:any) => {
      this.topTracks = a;
      console.log(a, 'A');
      
    })
  }
}
