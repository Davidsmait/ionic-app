import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import { DescriptionCardModel } from '../interfaces/description-card.model'

@Injectable({
  providedIn: 'root'
})
export class CardsDetailsService {
  private descriptionCards: DescriptionCardModel[] =[]
  private descriptionCardsObservable = new Subject<DescriptionCardModel[]>()

  constructor() { }
  getCards() {

    return this.descriptionCards.slice()
  }

  addCard(card: DescriptionCardModel){
    this.descriptionCards.unshift(card)
    this.descriptionCardsObservable.next(this.descriptionCards.slice())
  }

}
