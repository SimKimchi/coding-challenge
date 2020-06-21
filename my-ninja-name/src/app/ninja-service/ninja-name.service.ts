import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class NinjaNameService {
  public ninjaNameUrl = 'url';

  constructor(private http: HttpClient) {}

  public getNinjaName(): string {
    // this.http.get(this.ninjaNameUrl);

    return 'Sekiro';
  }
}
