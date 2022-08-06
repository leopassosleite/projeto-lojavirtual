import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  url = environment.apiUrl

  constructor(private httpClient: HttpClient) { }

  add(data: any) {
    return this.httpClient.post(this.url + "client/add/", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  update(data: any) {
    return this.httpClient.patch(this.url + "client/update/", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  updateStatus(data: any) {
    return this.httpClient.patch(this.url + "client/updateStatus/", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  getClients() {
    return this.httpClient.get(this.url + "client/get/");
  }

  delete(id: any) {
    return this.httpClient.delete(this.url + "client/delete/" + id, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  getClientByDeadline(id: any) {
    return this.httpClient.get(this.url + "client/getBydeadline/" + id);
  }

  getById(id: any) {
    return this.httpClient.get(this.url + "client/getById/" + id);
  }
}
