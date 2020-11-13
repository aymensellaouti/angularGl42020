import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorComponent } from './components/color/color.component';
import { CvComponent } from './cv/pages/cv/cv.component';
import { TodoComponent } from './todo/pages/todo/todo.component';


const routes: Routes = [
  {path: 'cv', component: CvComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'color', component: ColorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
