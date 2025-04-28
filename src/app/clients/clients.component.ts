import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-clients',
  imports: [
    MatTableModule
  ],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent {
  clients = [
    {name: 'Client 1', subtitle: 'Subtitle 1', description: 'Description 1'},
    {name: 'Client 2', subtitle: 'Subtitle 2', description: 'Description 2'},
  ];

  displayedColumns: string[] = [
    'name', 'subtitle', 'description'

  ];
}
