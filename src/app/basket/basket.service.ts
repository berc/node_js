import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class BasketService {

    constructor( private http: Http ) {}

    public getAll(): Observable<Object[]>  {

        return this.http.get('/api/v1/basket/list/')
            .map((rs: Response) => rs.json())
            .catch( (error: Response | any) => Observable.throw(error.json()));

    }

    public getCalculatedSum(): Observable<Object[]>  {

        return this.http.get('http://localhost:4300/api/v1/basket/list')
            .map((rs: Response) => rs.json())
            .catch( (error: Response | any) => Observable.throw(error.json()));

    }
}
