import { Component, ViewChild, AfterViewInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Calendar } from '@fullcalendar/core';
import esLocale from '@fullcalendar/core/locales/es';
import { Task } from '../../models/Task.model'; 
import { TaskDataService } from '../../services/task-data.service'; 

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements AfterViewInit {
  @ViewChild('calendar') calendarRef: any;
  taskList: Task[] = [];

  constructor(private taskDataService: TaskDataService) { }

  ngAfterViewInit(): void {
    this.taskList = this.taskDataService.getTasks();

    const calendarEl = this.calendarRef.nativeElement;
    const calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin],
      initialView: 'dayGridMonth',
      locales: [esLocale],
      locale: 'es',
      events: this.taskList.map(task => ({
        title: task.nombre,
        start: task.fechaCreacion,
        end: task.fechaLimite,
        color: this.getPriorityColor(task.prioridad)
      }))
    });

    calendar.render();
  }

  getPriorityColor(priority: string): string {
    switch (priority) {
      case 'Alta':
        return 'red';
      case 'Media':
        return 'blue';
      case 'Baja':
        return 'green';
      default:
        return 'black';
    }
  }
}
