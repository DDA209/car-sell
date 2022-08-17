import { Injectable } from '@angular/core';
import { provideDatabase } from '@angular/fire/database';
import { Observable, timeout } from 'rxjs';
import { Offer } from '../interfaces/offer';

@Injectable({
  providedIn: 'root',
})
export class OffersService {
  constructor() {
    const db: any = provideDatabase;
  }

  private offers: Offer[] = [
    // {
    //   title: 'Vends Trabant 601 ',
    //   brand: 'TRABANT',
    //   model: '601',
    //   description: 'Auto de qualité',
    //   price: 2100,
    // },
  ];

  // getOffers(): Promise<Offer[]> {
  //   // needed for HTML
  //   return new Promise((res, rej) => {
  //     setTimeout(() => {
  //       if (this.offers.length <= 0) {
  //         rej(new Error('CarSellErr --> No offer registered'));
  //       }
  //       res(this.offers);
  //     }, 3000);
  //   });
  // }

  getOffers(): Observable<Offer[]> {
    return new Observable((observer) => {
      if (this.offers.length <= 0) {
        observer.error(new Error('CarSellErr --> No offer registered'));
      }
      setInterval(() => {
        observer.next(this.offers);
        // observer.complete
      }, 3000);
    });
  }

  createOffer(offer: Offer): Offer[] {
    console.log('#CREATE OFFER SERVICE');

    console.log(' this.offers >>>', this.offers);
    this.offers.push(offer);
    console.log(' this.offers >>>', this.offers);

    return this.offers;
  }

  editOffer(offer: Offer, index: number): Offer[] {
    console.log('#EDIT OFFER SERVICE');
    console.log('#EDIT OFFER SERVICE offer >>>', offer);
    console.log('#EDIT OFFER SERVICE index >>>', index);
    this.offers[index] = offer;
    return this.offers;
  }

  deleteOffer(index: number): Offer[] {
    console.log('#DELETE OFFER SERVICE');

    this.offers.splice(index, 1);
    return this.offers;
  }
}
