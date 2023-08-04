import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { TaskDataService } from 'src/app/services/task-data.service';
import { Task } from '../../models/Task.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  constructor(private router: Router,private auth: AuthService, private taskDataService: TaskDataService) {}

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
    // Navegar a la ruta del detalle de la tarea con el id como parámetro en la URL
    this.router.navigate(['/task', task.id]);
  }

  getCardClasses(tarea: Task) {
    switch (tarea.prioridad) {
      case 'Alta':
        return 'card-priority-high';
      case 'Media':
        return 'card-priority-medium';
      case 'Baja':
        return 'card-priority-low';
      default:
        return '';
    }
  }
}
