import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Receipt } from '../../../shared/model/receipt';

@Injectable()
export class BasketService {

    private urlPrefix = '/api/v1';

    constructor( private http: Http) {}

    public getReceipt(): Observable<Receipt>  {
        return this.http.get(`${this.urlPrefix}/basket/calculate`)
            .map( (rs: Response) => rs.json() )
            .catch( (error: Response | any) => Observable.throw(error.json()) );
    }
}
