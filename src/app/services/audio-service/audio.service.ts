import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

import { Audio } from "../../models/audio";

@Injectable()
export class AudioService {
  url: string;

  constructor(private http: Http) {
    this.url = 'https://fast-plains-6359.herokuapp.com/api/v1/audios';
  }

  fetchData(): Observable<Audio[]> {
    return this.http.get(this.url).map(res => res.json());
  }

}
