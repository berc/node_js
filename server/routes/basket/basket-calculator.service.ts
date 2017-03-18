/**
 * Created by rastislavbertusek on 06.03.17.
 */

import { prices } from '../../data/prices';
import * as _ from 'lodash';
import { Receipt } from '../../../shared/model/receipt';

export class BasketCalculator {

  public generateBasketReceipt(basketItems: string[]): Receipt {
    let items = {};
    let receipt: Receipt = {
      items: [],
      totalSum: 0
    };

    basketItems.forEach((o) => { this.increaseItemCount(items, o); } );

    Object.keys(items).forEach((name) => { receipt.items.push({name, count: items[name]}); } );
    receipt.totalSum = this.calculateSum(receipt.items);

    return receipt;
  }

  private increaseItemCount(items, item: string) {
    if (!items[item]) {
      items[item] = 1;
    } else {
      items[item] = items[item] + 1;
    }
  }

  private calculateSum (basketItems) {
    let acc = 0;
    basketItems.forEach((o) => {
      o.sumPrice = this.calculatePrice(o);
      acc = acc + o.sumPrice;
    } );
    return acc;
  }

  private calculatePrice (item) {
    const price = _.find(prices, (p) => p.name === item.name);
    if (!price) {
      return;
    }

    item.unitPrice = price.price;

    this.calculateDiscount(item, price);

    return item.reducedCount * price.price;
  }

  private calculateDiscount (item, price) {
    item.reducedCount = item.count;

    if (!price.discount) {
      return;
    }

    let floorCount = Math.floor(item.count / price.discount.count);
    if (!floorCount) {
      return;
    }

    item.reducedCount = (floorCount * price.discount.reduceTo)
      + (item.count % price.discount.count);
  }
}
