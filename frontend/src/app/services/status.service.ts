import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  url = environment.apiUrl

  constructor(private httpClient: HttpClient) { }

  getStatus() {
    return this.httpClient.get(this.url + "status/get/");
  }
}
