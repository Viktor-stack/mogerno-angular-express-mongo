import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Country} from "../interface";

@Injectable({
  providedIn: 'root'
})
export class PersonalInfoService {

  constructor(private http: HttpClient) {
  }

  getAllCountry(): Observable<Country[]> {
    return this.http.get<Country[]>('/api/country');
  }


}
