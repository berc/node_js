/**
 * Created by rastislavbertusek on 06.03.17.
 */

import { Router, Response, Request } from 'express';
import { basketItems } from '../../data/basket-items';

const basketListRouter: Router = Router();

basketListRouter.get('/', (request: Request, response: Response) => {
  response.json( basketItems );
});

export { basketListRouter }
