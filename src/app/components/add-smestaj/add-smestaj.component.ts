import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Smestaj } from 'src/app/models/smestaj';
import { SmestajService } from 'src/app/services/smestaj.service';

@Component({
  selector: 'app-add-smestaj',
  templateUrl: './add-smestaj.component.html',
  styleUrls: ['./add-smestaj.component.css']
})
export class AddSmestajComponent implements OnInit {

  public smestajForm: FormGroup;

  public lista_smestaja: Smestaj[] = [];

  constructor(private _smestajService: SmestajService, private _route: ActivatedRoute) {
    this._smestajService.getListaSmestaja().subscribe((data) => {
      this.lista_smestaja = data;
    })
  }

  ngOnInit(): void {
    this.initForm();
  }

  public initForm() {
    this.smestajForm = new FormGroup({
      'id': new FormControl(1, [
        Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
      'title': new FormControl(null, [
        Validators.required, Validators.minLength(6)
      ]),
      'link': new FormControl(null, [
        Validators.required, Validators.minLength(6)
      ]),
      'price': new FormControl(null, [
        Validators.required, Validators.minLength(6)
      ])
    });
  }

  public submitForm(): boolean {
    let id = this.smestajForm.get('id').value;
    let title = this.smestajForm.get('title').value;
    let link = this.smestajForm.get('link').value;
    let price = this.smestajForm.get('price').value;
    let smestaj = new Smestaj(id, title, link, price, 0);
    this.createSmestaj(smestaj);
    alert('Uspesno je dodat smestaj!\n\n' + JSON.stringify(smestaj));
    window.location.replace('./lista_smestaja');
    return false
  }

  public createSmestaj(smestaj: Smestaj) {
    this._smestajService.createSmestaj(smestaj).subscribe((data) => {
      this.lista_smestaja.unshift(data);
    })
  }

  get id() {
    return this.smestajForm.get('id');
  }

  get title() {
    return this.smestajForm.get('title');
  }

  get link() {
    return this.smestajForm.get('link');
  }

  get price() {
    return this.smestajForm.get('price');
  }

}
