import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Client } from '../models/client.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-clients',
  imports: [
    MatTableModule
  ],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent {
  clients: Client[] = [];

  displayedColumns: string[] = [
    'id', 'name', 'businessName', 'phone', 'mail', 'address'
  ];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchClients();
  }

  fetchClients() {
    this.apiService.getClients().subscribe(
      (data: Client[]) => {
        this.clients = data;
      }
    );
  }

}
