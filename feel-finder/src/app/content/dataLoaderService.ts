import { Injectable } from '@angular/core';
import { HTTPClient } from '@angular/common/http';
import { FeelingCard } from './feeling-card';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FeelingCardService {

    private _url: string = "../assets/data/gefuehlsfinder.json";

    constructor(private http: HttpClient){ }

        getFeelingCard(): Observable<FeelingCard[]{
            return this.http.get<FeelingCard[]>(this._url);
        }
    }
