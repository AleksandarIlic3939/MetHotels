import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Smestaj } from 'src/app/models/smestaj';
import { SmestajService } from 'src/app/services/smestaj.service';

@Component({
  selector: 'app-smestaj-listing',
  templateUrl: './smestaj-listing.component.html',
  styleUrls: ['./smestaj-listing.component.css']
})
export class SmestajListingComponent implements OnInit {

  title = 'MetHotels';

  public lista_smestaja: Smestaj[] = [];
  public searchText: any = '';

  constructor(private _smestajService: SmestajService, private _route: ActivatedRoute) {
    this._smestajService.getListaSmestaja().subscribe((data) => {
      this.lista_smestaja = data;
    })
  }

  ngOnInit(): void {
  }

  public createSmestaj(smestaj: Smestaj) {
    this._smestajService.createSmestaj(smestaj).subscribe((data) => {
      this.lista_smestaja.unshift(data);
    })
  }

  public deleteSmestaj(id: number) {
    this._smestajService.deleteSmestaj(id).subscribe((data) => {
      this._removeSmestajFromList(id);
      alert("Smestaj je obrisan sa servera!");
    })
  }

  private _removeSmestajFromList(id: number) {
    let ind = this.lista_smestaja.findIndex(smestaj => smestaj.id == id);
    this.lista_smestaja.splice(ind, 1);
  }

  reverse() {
    this.lista_smestaja.reverse();
  }

  shuffle() {
    let currentIndex = this.lista_smestaja.length,  randomIndex;
  
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [this.lista_smestaja[currentIndex], this.lista_smestaja[randomIndex]] = [
        this.lista_smestaja[randomIndex], this.lista_smestaja[currentIndex]];
    }
  
    return this.lista_smestaja;
  }

  updateSmestaj(smestaj: Smestaj) {
    let index = this.lista_smestaja.findIndex(i => i.title === smestaj.title);
    this.lista_smestaja[index].title = smestaj.title;
    this.lista_smestaja[index].price = smestaj.price;
  }

}
