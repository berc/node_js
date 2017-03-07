import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BasketService } from '../';

@Component({
  selector: 'basket-list',
  styleUrls: ['basket-items.css'],
  templateUrl: 'basket-items.component.html'
})

export class BasketItemsComponent implements OnInit {

  private basketItems = [];

  constructor( private basketService: BasketService,
               private route: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.route.params.subscribe(() => {

      this.isLoading = true;
      this.basketService.getAll()
        .finally(() => this.isLoading = false )
        .subscribe(
          ( basketItems ) => { this.basketItems = basketItems; },
          ( error ) => { console.log(error); }
        );
    });
  }
}
