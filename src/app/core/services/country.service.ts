import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from './../../models/country';

@Injectable()
export class CountryService {

    private headers: HttpHeaders;

    constructor(private http: HttpClient) {

        this.headers = new HttpHeaders();
        // this.headers = this.headers.set('Content-Type', 'application/json');
        // this.headers = this.headers.set('Accept', 'application/json');
    }

    getAll(): Observable<Country[]> {
        return this.http.get<Country[]>('https://restcountries.eu/rest/v2/all', { headers: this.headers });
    }

    getAllPerRegion(region: string): Observable<Country[]> {
        return this.http.get<Country[]>(`https://restcountries.eu/rest/v2/region/${region}` , { headers: this.headers });
    }

    getAllPerSubRegion(subRegion: string): Observable<Country[]> {
        return this.http.get<Country[]>(`https://restcountries.eu/rest/v2/subregion/${subRegion}`, { headers: this.headers });
    }
}
