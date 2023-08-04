import { Injectable } from '@angular/core';
import { Task } from '../models/Task.model'; 

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {
  private listTask: Task[] = [];

  constructor() { 
    const tareaQuemada: Task = {
      nombre: 'Tarea Quemada',
      fechaCreacion: '2023-08-15',
      fechaLimite: '2023-08-30',
      prioridad: 'Alta'
    };

    const tareaQuemada2: Task = {
      nombre: 'Tarea Quemada 2',
      fechaCreacion: '2023-08-15',
      fechaLimite: '2023-09-21',
      prioridad: 'Media'
    };

    const tareaQuemada3: Task = {
      nombre: 'Tarea Quemada 3',
      fechaCreacion: '2023-08-15',
      fechaLimite: '2023-08-18',
      prioridad: 'Baja'
    };

    this.listTask.push(tareaQuemada);
    this.listTask.push(tareaQuemada2);
    this.listTask.push(tareaQuemada3);
  }

  setTasks(tasks: Task[]): void {
    this.listTask = tasks;
  }

  getTasks(): Task[] {
    return this.listTask;
  }
}
