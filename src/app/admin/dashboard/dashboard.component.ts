import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Offer } from 'src/app/interfaces/offer';
import { OffersService } from 'src/app/services/offers.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  constructor(
    private activatedRoute: ActivatedRoute, // --------------------------
    private formBuilder: FormBuilder, // Form contructor
    private offersService: OffersService
  ) {}

  offerForm!: FormGroup;
  offers: Offer[] = [];
  subscription!: Subscription; // Observable subscription managing

  ngOnInit(): void {
    // component did mount
    this.initOfferForm();
    this.subscription = this.offersService.getOffers().subscribe({
      next: (offers: Offer[]) => {
        console.log('rendering list');
        this.offers = offers;
      },
      complete: () => {
        console.log('Observer gettOffer completed');
      },
      error: (error) => {
        console.error(error);
      },
    });

    // .then((offers: Offer[]) => { // userd for Promise not Observer
    //   this.offers = offers;
    // })
    // .catch((error: any) => {
    //   console.error(error);
    // })
    // .finally(() => {
    //   console.log('========================');
    // });
  }

  /* Template form */
  // onSubmitOfferForm(form: NgForm): void {
  //   console.log(' form.value >>>', form.value);
  // }

  /* Reactive form */
  initOfferForm(): void {
    this.offerForm = this.formBuilder.group({
      index: [0],
      title: ['', [Validators.required, Validators.maxLength(50)]],
      brand: ['', [Validators.required, Validators.maxLength(30)]],
      model: ['', [Validators.required, Validators.maxLength(30)]],
      description: ['', [Validators.maxLength(200)]],
      price: [0, [Validators.required, Validators.min(0)]],
    });
  }
  /* end reactive form */

  onSubmitOfferForm(): void {
    const offerIndex = this.offerForm.value.index;
    let offer = this.offerForm.value;
    console.log('#onSubmitOfferForm offerIndex >>>', offerIndex);

    if (offerIndex === null || offerIndex === undefined) {
      delete offer.index;
      this.offers = this.offersService.createOffer(offer);
    } else {
      delete offer.index;
      this.offers = this.offersService.editOffer(offer, offerIndex);
    }

    console.log('#onSubmitOfferForm this.offerForm.value >>>', offer);
    console.log(
      '#onSubmitOfferForm  this.offerForm.invalid >>>',
      this.offerForm.invalid
    );

    this.offerForm.reset();
    console.log('#onSubmitOfferForm  this.offers >>>', this.offers);
  }

  onEditOffer(offer: Offer, index: number): void {
    this.offerForm.setValue({ ...offer, index });
    console.log('#onEditOffer this.offerForm.value >>>', offer);
  }

  onDeleteOffer(index: number): void {
    this.offers = this.offersService.deleteOffer(index);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
