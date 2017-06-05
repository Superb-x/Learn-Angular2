
import {Injectable} from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AjaxService {
    private BASEURL = 'http://app.ftms.bjscfl.com';
    constructor(private http: Http){}
    getData(url: string): Promise<any> {
        const URL = `${this.BASEURL}/${url}`;
        return this.http.get(URL)
                        .toPromise()
                        .then(res => res.json())
                        .catch(this.handleError)
    }
    private handleError(error: any) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}