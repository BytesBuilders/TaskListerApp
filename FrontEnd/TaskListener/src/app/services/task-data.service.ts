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
      etiquetas: ['importante', 'urgente'],
      pomodoro: 25, // Por ejemplo, 25 minutos para la tarea
      pomodoroTimeElapsed: 10 // Por ejemplo, 10 minutos transcurridos en el pomodoro
    };
    
    const tareaQuemada2: Task = {
      id: 2,
      nombre: 'Tarea Quemada 2',
      fechaCreacion: '2023-08-15',
      fechaLimite: '2023-09-21',
      prioridad: 'Media',
      estado: 'en progreso',
      categorias: ['hogar', 'personal'],
      etiquetas: ['importante'],
      pomodoro: 30, // Por ejemplo, 30 minutos para la tarea
      pomodoroTimeElapsed: 15 // Por ejemplo, 15 minutos transcurridos en el pomodoro
    };
    
    const tareaQuemada3: Task = {
      id: 3,
      nombre: 'Tarea Quemada 3',
      fechaCreacion: '2023-08-15',
      fechaLimite: '2023-08-18',
      prioridad: 'Baja',
      estado: 'completada',
      categorias: ['estudios'],
      etiquetas: [],
      pomodoro: 20, // Por ejemplo, 20 minutos para la tarea
      pomodoroTimeElapsed: 5 // Por ejemplo, 5 minutos transcurridos en el pomodoro
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
