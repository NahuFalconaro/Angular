import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artist:any[] = [];
  loading?:boolean;
  constructor(private spotifyService:SpotifyService) { 
  }

  ngOnInit(): void {
  }

  buscar(valor:string) {
    this.loading = true;
    if(!valor) throw new Error('valor is empty or undefined');
    this.spotifyService.getArtists(valor)
    .subscribe((data:any) =>{
      this.artist = data;  
      this.loading = false;    
    })
  }
}
