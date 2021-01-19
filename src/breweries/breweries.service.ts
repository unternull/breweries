import { Injectable, HttpService } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class BreweriesService {
    constructor(private httpService: HttpService) {}

    // TODO: change any to response type
    findAll(): Observable<AxiosResponse<any>> {
        return this.httpService.get(`http://api.brewerydb.com/v2/breweries/?key=${process.env.API_KEY}`).pipe(
            map(response => response.data)
        );
    }
}
