import { Component, OnDestroy, OnInit } from '@angular/core';

import { Receipt } from '../../../shared/model/receipt';
import { AppStore } from 'angular2-redux';
import { StateActions } from '../store/state-actions';
import { BasketService } from './basket.service';

@Component({
  selector: 'basket-list',
  styleUrls: ['basket.component.css', '../../assets/css/global.css'],
  templateUrl: 'basket.component.html'
})
export class BasketComponent implements OnInit, OnDestroy {

  public isLoading: boolean;
  public receipt: Receipt;
  private unsubscribeFromStore;

  private setReceipt;

  constructor(store: AppStore, actions: StateActions, private basketService: BasketService) {
    this.setReceipt = actions.createDispatcher(actions.setReceipt);

    this.isLoading = true;
    this.unsubscribeFromStore = store.subscribe( (state) => {
      this.receipt = state.receipt;
      this.isLoading = !this.receipt;
    });
  }

  public ngOnInit() {
    this.basketService.getReceipt().subscribe(
        (receipt: Receipt) => this.setReceipt(receipt),
        (error) => console.log(error)
    );
  }

  public ngOnDestroy(): void {
    this.unsubscribeFromStore();
  }
}
