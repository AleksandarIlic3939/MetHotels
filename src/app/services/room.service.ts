import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor() { }

  public getPrice(smestajPricePerNight: string) {
    return (parseInt(smestajPricePerNight) * 5) * 0.75;
  }

}
