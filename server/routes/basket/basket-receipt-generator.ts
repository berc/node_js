/**
 * Created by rastislavbertusek on 06.03.17.
 */

import { Router, Response, Request } from 'express';
import { basketItems } from '../../data/basket-items';
import { BasketCalculator } from './basket-calculator.service';

const basketReceiptGeneratorRouter: Router = Router();

basketReceiptGeneratorRouter.get('', (request: Request, response: Response) => {

  let basketCalculator = new BasketCalculator();
  let receipt = basketCalculator.generateBasketReceipt(basketItems);

  response.render('receipt', { basket: receipt });
});

export { basketReceiptGeneratorRouter }
