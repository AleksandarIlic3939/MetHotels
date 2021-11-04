import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Smestaj } from './smestaj.model';

@Component({
  selector: 'app-smestaj',
  templateUrl: './smestaj.component.html',
  styleUrls: ['./smestaj.component.css']
})
export class SmestajComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';
  @Input() smestaj: Smestaj;

  constructor() {
    this.smestaj = new Smestaj('', '', '', undefined);
  }

  getSmestajPrice() {
    return this.smestaj.price;
  }

  voteUp() {
    this.smestaj.voteUp();
    return false;
  }

  voteDown() {
    this.smestaj.voteDown();
    return false;
  }

  ngOnInit(): void {
  }

}
