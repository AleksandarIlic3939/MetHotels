import { Component } from '@angular/core';
import { Smestaj } from './smestaj/smestaj.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'MetHotels';
  searchText: string = '';
  public lista_smestaja: Smestaj[] = [];

  constructor() {
    this.lista_smestaja = [
      new Smestaj('Luxury Rooms', 'https://velikaskadarlijalux.com/', '5490', 10),
      new Smestaj('Apartmans & Rooms', 'https://hostel-apartmans-rooms.business.site/?utm_source=gmb&utm_medium=referralhttps://www.google.com/search?q=i5+6400&rlz=1C1CHBF_enRS834RS834&oq=i5+6400&aqs=chrome..69i57j69i60l3j0l2.2603j0j7&sourceid=chrome&ie=UTF-8', '3190', 6),
      new Smestaj('Studio Apartman A13', 'https://rakoc.com/', '4230', 9),
    ];
  }

  // addSmestaj(title: HTMLInputElement, link: HTMLInputElement, price: HTMLInputElement): boolean {
  //   console.log(`Adding smestaj title: ${title.value}, link: ${link.value} and price: ${price.value}`);
  //   this.lista_smestaja.push(new Smestaj(title.value, link.value, price.value, 0));
  //   title.value = '';
  //   link.value = '';
  //   price.value = '';
  //   return false;
  // }

  addSmestaj(smestaj: Smestaj) {
    this.lista_smestaja.push(smestaj);
  }

  deleteSmestaj(smestaj: Smestaj) {
    this.lista_smestaja = this.lista_smestaja.filter(item => {
      return item.title !== smestaj.title;
    })
  }

  updateSmestaj(smestaj: Smestaj) {
    let index = this.lista_smestaja.findIndex(i => i.title === smestaj.title);
    this.lista_smestaja[index].title = smestaj.title;
    this.lista_smestaja[index].price = smestaj.price;
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

}