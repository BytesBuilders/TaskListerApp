import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private auth: AuthService){}

  username:String = ''

  ngOnInit(): void {
    this.auth.user$.subscribe(user => {
      this.username = user?.name || 'NoNameAccess';
      console.log("Nombre Usuario:", this.username);
    });
  }

  listaTareas = [
    { nombre: 'Tarea 1', fechaCreacion: '2023-08-02', fechaLimite: '2023-08-10', prioridad: 'Alta' },
    { nombre: 'Tarea 2', fechaCreacion: '2023-08-03', fechaLimite: '2023-08-15', prioridad: 'Media' },
    { nombre: 'Tarea 3', fechaCreacion: '2023-08-04', fechaLimite: '2023-08-12', prioridad: 'Baja' },
    { nombre: 'Tarea 4', fechaCreacion: '2023-08-04', fechaLimite: '2023-08-12', prioridad: 'Baja' },
    { nombre: 'Tarea 5', fechaCreacion: '2023-08-02', fechaLimite: '2023-08-10', prioridad: 'Alta' }
  ];

  onCartaClickeada(tarea: any) {
    // Aquí puedes manejar la acción que deseas realizar cuando se haga clic en la carta
    console.log('Carta clickeada:', tarea);
    // Por ejemplo, puedes redirigir a otra página o realizar alguna otra acción específica
  }
}
