/**
 * Created by rastislavbertusek on 06.03.17.
 */

import { Router, Response, Request } from 'express';
import { basketItems } from '../../data/basket-items';
import { BasketCalculator } from './basket-calculator.service';

const basketCalculateRouter: Router = Router();

basketCalculateRouter.get('/calculate', (request: Request, response: Response) => {

  let basketCalculator = new BasketCalculator();
  let calculatedPrice = basketCalculator.generateBasketReceipt(basketItems);

  response.json( { totalSum: calculatedPrice } );
});

export { basketCalculateRouter }
