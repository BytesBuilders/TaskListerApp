import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { TaskDataService } from 'src/app/services/task-data.service';
import { Task } from '../../models/Task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  constructor(private auth: AuthService, private taskDataService: TaskDataService) {}

  username: string = '';

  listaTareas: Task[] = [];

  ngOnInit(): void {
    this.auth.user$.subscribe(user => {
      this.username = user?.name || 'NoNameAccess';
      console.log("Nombre Usuario:", this.username);
    });

    this.listaTareas = this.taskDataService.getTasks();

    this.listaTareas.sort((a, b) => {
      if (a.fechaLimite === b.fechaLimite) {
        if (a.prioridad === 'Baja' && b.prioridad !== 'Baja') {
          return -1;
        } else if (a.prioridad === 'Media' && b.prioridad === 'Alta') {
          return -1;
        } else {
          return 1; 
        }
      } else {
        return a.fechaLimite.localeCompare(b.fechaLimite);
      }
    });
  }

  onCartaClickeada(task: Task) {
    // Aquí puedes manejar la acción que deseas realizar cuando se haga clic en la carta
    console.log('Carta clickeada:', task);
    // Por ejemplo, puedes redirigir a otra página o realizar alguna otra acción específica
  }
}
