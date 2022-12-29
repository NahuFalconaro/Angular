import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  newSongs:any[]=[];
  
  loading:boolean;
  error:boolean;
  errorName?:string;
  constructor(private spotifyService: SpotifyService) {
    this.loading = true;
    this.error = false;
    console.log(this.loading);
   }

  ngOnInit(): void {
    this.spotifyService.getNewReleases()
    .subscribe((data:any)=> {
      this.newSongs = data;
      console.log(data)
      this.loading = false;
      }, (err)=>{
        this.loading = false;
        this.error = true;
        this.errorName = err.error.error.message;
      }
    ); //una vez se inicie el componente, ejecuta esto
  }

}
