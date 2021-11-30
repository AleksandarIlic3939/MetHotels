import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Smestaj } from 'src/app/smestaj/smestaj.model';

@Component({
  selector: 'app-add-smestaj',
  templateUrl: './add-smestaj.component.html',
  styleUrls: ['./add-smestaj.component.css']
})
export class AddSmestajComponent implements OnInit {

  public smestajForm: FormGroup;

  @Output() smestajToAdd: EventEmitter<Smestaj>;

  constructor() {
    this.smestajToAdd = new EventEmitter();
  }

  ngOnInit(): void {
    this.initForm();
  }

  public initForm() {
    this.smestajForm = new FormGroup({
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

  public submitForm() {
    let title = this.smestajForm.get('title').value;
    let link = this.smestajForm.get('link').value;
    let price = this.smestajForm.get('price').value;
    let smestaj = new Smestaj(title, link, price);
    this.smestajToAdd.emit(smestaj);
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
