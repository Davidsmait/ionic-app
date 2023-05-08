import { Component, OnInit } from '@angular/core';
import {CardsDetailsService} from "../../services/cards-details.service";
import { DescriptionCardModel } from '../../interfaces/description-card.model'
import {BackUrlService} from "../../services/back-url.service";

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.page.html',
  styleUrls: ['./list-item.page.scss'],
})
export class ListItemPage implements OnInit {
  descriptionCards : DescriptionCardModel[] = []

  constructor(
    private backUrlService: BackUrlService,
    private cardsDetails: CardsDetailsService) {
  }

  ngOnInit() {
    this.descriptionCards = this.cardsDetails.getCards()
  }

  onBackUrl(){
    this.backUrlService.backUrl()
  }

}
