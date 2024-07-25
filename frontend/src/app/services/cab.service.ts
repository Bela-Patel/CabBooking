import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CabService {

  private apiUrl : string = window.location.protocol + "//" + window.location.hostname + ":5000/api/cabs";

    constructor(private http: HttpClient) {}

    getCabs(): Observable<any> {
        return this.http.get(this.apiUrl);
    }

    bookCab(id: string): Observable<any> {
        return this.http.put(`${this.apiUrl}/book/${id}`, {});
    }

    freeCab(id: string): Observable<any> {
        return this.http.put(`${this.apiUrl}/free/${id}`, {});
    }

    addCab(cab: any): Observable<any> {
        return this.http.post(this.apiUrl, cab);
    }
}
