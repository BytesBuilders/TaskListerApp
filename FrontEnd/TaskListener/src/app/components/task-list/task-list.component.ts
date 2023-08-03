import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

interface Tarea {
  nombre: string;
  fechaCreacion: string;
  fechaLimite: string;
  prioridad: 'Alta' | 'Media' | 'Baja'; // Se especifican las opciones posibles
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  constructor(private auth: AuthService) {}

  username: string = '';

  listaTareas: Tarea[] = [
    { nombre: 'Tarea 1', fechaCreacion: '2023-08-02', fechaLimite: '2023-08-10', prioridad: 'Alta' },
    { nombre: 'Tarea 2', fechaCreacion: '2023-08-03', fechaLimite: '2023-08-15', prioridad: 'Media' },
    { nombre: 'Tarea 3', fechaCreacion: '2023-08-04', fechaLimite: '2023-08-12', prioridad: 'Baja' },
    { nombre: 'Tarea 4', fechaCreacion: '2023-08-04', fechaLimite: '2023-08-12', prioridad: 'Baja' },
    { nombre: 'Tarea 5', fechaCreacion: '2023-08-02', fechaLimite: '2023-08-10', prioridad: 'Alta' },
    { nombre: 'Tarea 6', fechaCreacion: '2023-08-04', fechaLimite: '2023-08-12', prioridad: 'Baja' },
    { nombre: 'Tarea 7', fechaCreacion: '2023-08-02', fechaLimite: '2023-08-10', prioridad: 'Alta' }
  ];

  ngOnInit(): void {
    this.auth.user$.subscribe(user => {
      this.username = user?.name || 'NoNameAccess';
      console.log("Nombre Usuario:", this.username);
    });

    // Ordenar la lista de tareas por fecha límite y prioridad
    this.listaTareas.sort((a, b) => {
      if (a.fechaLimite === b.fechaLimite) {
        // Si tienen la misma fecha límite, ordenar por prioridad (alta > media > baja)
        if (a.prioridad === 'Alta' && b.prioridad !== 'Alta') {
          return -1;
        } else if (a.prioridad === 'Baja' && b.prioridad !== 'Baja') {
          return 1;
        } else {
          return 0; // Si tienen la misma prioridad o ambas son 'Alta' o ambas son 'Baja'
        }
      } else {
        // Si las fechas límite son diferentes, ordenar por fecha límite
        return a.fechaLimite.localeCompare(b.fechaLimite);
      }
    });
  }

  onCartaClickeada(tarea: Tarea) {
    // Aquí puedes manejar la acción que deseas realizar cuando se haga clic en la carta
    console.log('Carta clickeada:', tarea);
    // Por ejemplo, puedes redirigir a otra página o realizar alguna otra acción específica
  }
}
