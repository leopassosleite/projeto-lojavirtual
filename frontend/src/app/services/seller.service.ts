import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  url = environment.apiUrl

  constructor(private httpClient: HttpClient) { }

  getSellers() {
    return this.httpClient.get(this.url + "seller/get/");
  }
}