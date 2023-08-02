import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  listaTareas = [
    { nombre: 'Tarea 1', fechaCreacion: '2023-08-02', fechaLimite: '2023-08-10', prioridad: 'Alta' },
    { nombre: 'Tarea 2', fechaCreacion: '2023-08-03', fechaLimite: '2023-08-15', prioridad: 'Media' },
    { nombre: 'Tarea 3', fechaCreacion: '2023-08-04', fechaLimite: '2023-08-12', prioridad: 'Baja' }
  ];

  onCartaClickeada(tarea: any) {
    // Aquí puedes manejar la acción que deseas realizar cuando se haga clic en la carta
    console.log('Carta clickeada:', tarea);
    // Por ejemplo, puedes redirigir a otra página o realizar alguna otra acción específica
  }
}
