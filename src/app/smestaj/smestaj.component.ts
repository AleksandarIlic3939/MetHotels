import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Smestaj } from './smestaj.model';

@Component({
  selector: 'app-smestaj',
  templateUrl: './smestaj.component.html',
  styleUrls: ['./smestaj.component.css']
})
export class SmestajComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';
  @Output() smestajToAdd!: EventEmitter<Smestaj>;
  @Output() smestajToDelete: EventEmitter<Smestaj>;
  @Output() updateSmestaj: EventEmitter<Smestaj>;
  @Input() smestaj: any;
  public title: any;
  public updateTitle: any;
  public updatePrice: any;

  constructor(private _sanitizer: DomSanitizer) {
    this.smestajToDelete = new EventEmitter();
    this.updateSmestaj = new EventEmitter();
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

  ngOnInit() {
    this.embedUrl();
  }

  public embedUrl() {
    this.title = this._sanitizer.bypassSecurityTrustResourceUrl(this.smestaj.title);
  }

  public deleteProduct(): void {
    this.smestajToDelete.emit(this.smestaj);
  }

  public changeContent(updateTitle: string, updatePrice: string): void {
    if (updateTitle != undefined && updateTitle != '') {
      this.smestaj.title = updateTitle;
    }
    
    if (updatePrice != undefined && updatePrice != '') {
      this.smestaj.price = updatePrice;
    }

    this.updateSmestaj.emit(this.smestaj);
  }

}