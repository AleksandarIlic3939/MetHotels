import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Smestaj } from 'src/app/models/smestaj';
import { SmestajService } from 'src/app/services/smestaj.service';

@Component({
  selector: 'app-view-smestaj',
  templateUrl: './view-smestaj.component.html',
  styleUrls: ['./view-smestaj.component.css']
})
export class ViewSmestajComponent implements OnInit {

  public lista_smestaja: Smestaj[] = [];
  public smestaj: Smestaj = new Smestaj(null, '', '', '', null);

  public updatedID: number;
  public updatedTitle: any;
  public updatedLink: any;
  public updatedPrice: any;

  constructor(private _smestajService: SmestajService, private _route: ActivatedRoute) {
    this._route.params.subscribe(params => {
      let id =+ params['id'];
      this.getSmestaj(id);
    })
  }

  ngOnInit(): void {
  }

  public getSmestaj(id: number) {
    this._smestajService.getSmestaj(id).subscribe((data) => {
      this.smestaj = data;
    })
  }

  voteUp() {
    this.smestaj.voteUp();
    return false;
  }

  voteDown() {
    this.smestaj.voteDown();
    return false;
  }

  public deleteSmestaj(id: number) {
    this._smestajService.deleteSmestaj(id).subscribe((data) => {
      this._removeSmestajFromList(id);
      alert("Smestaj je obrisan sa servera!");
      window.location.replace('/lista_smestaja');
    })
  }

  private _removeSmestajFromList(id: number) {
    let ind = this.lista_smestaja.findIndex(smestaj => smestaj.id == id);
    this.lista_smestaja.splice(ind, 1);
  }

  public changeContent(updatedTitle: string, updatedLink: string, updatedPrice: string): void {
    if (updatedTitle != undefined && updatedTitle != '') {
      this.smestaj.title = updatedTitle;
    }
    if (updatedLink != undefined && updatedLink != '') {
      this.smestaj.link = updatedLink;
    }
    if (updatedPrice != undefined && updatedPrice != '') {
      this.smestaj.price = updatedPrice;
    }
    this._smestajService.updateSmestaj(this.smestaj.id, this.smestaj)
  }

  public totalPrice() {
    return this._smestajService.getPrice(this.smestaj.price);
  }

}
