/**
 * Created by rastislavbertusek on 06.03.17.
 */

import * as express from 'express';
import * as compression from 'compression';
import { json, urlencoded } from 'body-parser';

import { basketListRouter } from './routes/basket/list';
import { basketCalculateRouter } from './routes/basket/calculate';
import { basketReceiptGeneratorRouter } from './routes/basket/basket-receipt-generator';

const app: express.Application = express();

app.disable('x-powered-by');

app.use(json());
app.use(compression());

app.set('view engine', 'jade');

// api routes
app.use('/', basketReceiptGeneratorRouter);
app.use('/api/v1/basket', basketCalculateRouter);
app.use('/api/v1/basket/list', basketListRouter);

app.use( (err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {

  res.status(err.status || 500);
  res.json({
    error: {},
    message: err.message
  });
});

export { app }
