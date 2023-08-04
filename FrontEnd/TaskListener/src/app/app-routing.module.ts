import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { OvercomeComponent } from './components/overcome/overcome.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'SignUp',component: SignUpComponent},
  {path: 'home', component: HomeComponent},
  {path: 'addTask',component: AddTaskComponent},
  {path: 'taskList', component: TaskListComponent},
  {path: 'user-calendar', component: CalendarComponent},
  {path: 'userProfile', component: ProfileComponent},
  {path: 'overcome', component: OvercomeComponent},
  { path: 'task/:id', component: TaskDetailComponent },
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
