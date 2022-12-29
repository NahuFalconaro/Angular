import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http: HttpClient) { }

  getPaises() {
    return this.http.get('https://restcountries.com/v3.1/lang/spanish')
      .pipe(
        map((p: any) => {
          return p.map((res:any) => {
            return {
              name: res.name.official,
              code: res.cca3
            }
          })
        })
      );
  }

}
