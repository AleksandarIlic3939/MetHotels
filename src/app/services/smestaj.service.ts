import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Smestaj } from '../models/smestaj';

@Injectable({
  providedIn: 'root'
})
export class SmestajService {

  public baseUrl = 'http://localhost:3000/lista_smestaja';

  constructor(private _httpClient: HttpClient) { }

  public getListaSmestaja() : Observable<Smestaj[]> {
    return this._httpClient.get<Smestaj[]>(this.baseUrl).pipe(
      map((data: any[]) => data.map((item: any) => this._createSmestajFromObject(item))),
    );
  }

  public getSmestaj(id: number) : Observable<Smestaj> {
    return this._httpClient.get(this.baseUrl + '/' + id).pipe(
      map((data: any) => this._createSmestajFromObject(data)),
    );
  }

  public deleteSmestaj(id: number) : Observable<Smestaj> {
    return this._httpClient.delete(this.baseUrl + '/' + id).pipe(
      map((data: any) => this._createSmestajFromObject(data)),
    );
  }

  public createSmestaj(smestaj: Smestaj) : Observable<Smestaj> {
    return this._httpClient.post(this.baseUrl, smestaj).pipe(
      map((data: any) => this._createSmestajFromObject(data)),
    );
  }

  public updateSmestaj(id: number, smestaj: Smestaj) : Observable<Smestaj> {
    return this._httpClient.put(this.baseUrl + '/' + id, smestaj).pipe(
      map((data: any) => this._createSmestajFromObject(data)),
    );
  }

  private _createSmestajFromObject(item: any): any {
    return new Smestaj(item.id, item.title, item.link, item.price, item.votes);
  }

  public requestDataFromMultipleSources() : Observable<any[]> {
    let response = this._httpClient.get(this.baseUrl);
    return forkJoin([response]);
  }

  ngOnInit() {
    this._httpClient.get(this.baseUrl).subscribe(json => console.log(json));
  }

  public getPrice(pricePerNight: string) {
    return (parseInt(pricePerNight) * 5) * 0.75;
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`; // klijent-strana errors.
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`; // server-strana errors.
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
