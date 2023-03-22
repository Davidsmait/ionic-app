import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import { DescriptionCardModel } from '../interfaces/description-card.model'

@Injectable({
  providedIn: 'root'
})
export class CardsDetailsService {
  private descriptionCardsDetails = new Subject<DescriptionCardModel[]>()

  constructor() { }


  getCards() {
    let cards : DescriptionCardModel[] = []
    this.descriptionCardsDetails.subscribe((data) => {
      console.log('data from service: ', data)
      cards = data
    })
    console.log('cards from service:  ',cards)

    return cards
  }
}
