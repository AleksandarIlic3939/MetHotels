import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Smestaj } from 'src/app/models/smestaj';
import { SmestajService } from 'src/app/services/smestaj.service';

@Component({
  selector: 'app-single-smestaj',
  templateUrl: './single-smestaj.component.html',
  styleUrls: ['./single-smestaj.component.css']
})
export class SingleSmestajComponent implements OnInit {

  public lista_smestaja: Smestaj[] = [];
  @Input() smestaj: Smestaj;

  constructor(private _smestajService: SmestajService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
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

  public totalPrice() {
    return this._smestajService.getPrice(this.smestaj.price);
  }

}
