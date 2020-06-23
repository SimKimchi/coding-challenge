import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NinjaModel } from 'src/models/ninja-model';

@Injectable()
export class NinjaNameService {
  private readonly ninjifyUrl = window.location.href + 'ninjify';

  constructor(private http: HttpClient) {}

  // Sends an HTTP call to the Web API and returns an Observable object.
  public getNinjaName(flatBuzzwordList: string): Observable<NinjaModel> {
    return this.http.get<NinjaModel>(
      `${this.ninjifyUrl}?x=${flatBuzzwordList}`,
      {
        responseType: 'json',
      }
    );
  }
}
