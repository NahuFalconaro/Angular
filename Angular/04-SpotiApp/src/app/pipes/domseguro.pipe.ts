import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser'



@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private _domSanitazed:DomSanitizer){}

  transform(value: string, ...args: unknown[]): SafeResourceUrl {
    const url = " https://api.spotify.com/v1/tracks/";
     return this._domSanitazed.bypassSecurityTrustResourceUrl(url + value.slice(14));
  }

}
