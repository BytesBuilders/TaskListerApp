import { Component } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  getTodayDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1; // Los meses son indexados desde 0, por lo que sumamos 1
    const day = today.getDate();

    // Formateamos la fecha en el formato 'YYYY-MM-DD'
    return `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
  }

  volverAtras(){
    
  }

  agregarTarea(): void {
    // Aquí puedes implementar la lógica para agregar la tarea
    console.log('Se ha agregado una nueva tarea');
  }
}
