import { Component, OnInit } from '@angular/core';
import {CardsDetailsService} from "../services/cards-details.service";
import { DescriptionCardModel } from '../interfaces/description-card.model'

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.page.html',
  styleUrls: ['./list-item.page.scss'],
})
export class ListItemPage implements OnInit {
  descriptionCards : DescriptionCardModel[] = []

  constructor(private cardsDetails: CardsDetailsService) { }

  ngOnInit() {
    console.log(this.cardsDetails.getCards())
    this.descriptionCards = this.cardsDetails.getCards()
  }

}
