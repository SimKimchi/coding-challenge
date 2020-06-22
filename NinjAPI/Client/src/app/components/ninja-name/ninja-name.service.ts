import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ninja } from 'src/models/ninja-model';

@Injectable()
export class NinjaNameService {
  private readonly ninjifyUrl = window.location.href + 'ninjify';

  constructor(private http: HttpClient) {}

  public getNinjaName(flatBuzzwordList: string): Observable<Ninja> {
    return this.http.get<Ninja>(`${this.ninjifyUrl}?x=${flatBuzzwordList}`, {
      responseType: 'json',
    });
  }
}
