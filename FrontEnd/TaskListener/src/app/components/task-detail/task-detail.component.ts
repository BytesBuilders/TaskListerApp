import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskDataService } from '../../services/task-data.service';
import { Task } from '../../models/Task.model';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  tarea: Task | undefined;

  constructor(
    private route: ActivatedRoute,
    private taskDataService: TaskDataService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const tareaId = params['id'];
      this.tarea = this.taskDataService.getTaskById(tareaId);

      // Si no se encuentra la tarea con el id proporcionado, redirigir a otra página o mostrar un mensaje de error
      if (!this.tarea) {
        // Por ejemplo, redirigir a la página de lista de tareas si la tarea no existe
        // this.router.navigate(['/tasks']);
        // O mostrar un mensaje de error en la vista
        // this.errorMessage = 'Tarea no encontrada';
      }
    });
  }
}
