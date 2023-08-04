import { Injectable } from '@angular/core';
import { Task } from '../models/Task.model'; 

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {
  private listTask: Task[] = [];

  constructor() { 
    const tareaQuemada: Task = {
      id: 1,
      nombre: 'Tarea Quemada',
      fechaCreacion: '2023-08-15',
      fechaLimite: '2023-08-30',
      prioridad: 'Alta',
      estado: 'pendiente',
      categorias: ['trabajo'],
      etiquetas: ['importante', 'urgente']
    };
    
    const tareaQuemada2: Task = {
      id: 2,
      nombre: 'Tarea Quemada 2',
      fechaCreacion: '2023-08-15',
      fechaLimite: '2023-09-21',
      prioridad: 'Media',
      estado: 'en progreso',
      categorias: ['hogar', 'personal'],
      etiquetas: ['importante']
    };
    
    const tareaQuemada3: Task = {
      id: 3,
      nombre: 'Tarea Quemada 3',
      fechaCreacion: '2023-08-15',
      fechaLimite: '2023-08-18',
      prioridad: 'Baja',
      estado: 'completada',
      categorias: ['estudios'],
      etiquetas: []
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

  getTaskById(tareaId: string): Task | undefined {
    const id = parseInt(tareaId, 10);
    return this.listTask.find(task => task.id === id);
  }
  
}
