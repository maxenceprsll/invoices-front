import { Injectable } from '@angular/core';
import { Client } from '../models/client.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:8080/api/public';

  constructor(private http: HttpClient) { }

  getClients() {
    return this.http.get<Client[]>(this.apiUrl + '/clients');
  }
}
