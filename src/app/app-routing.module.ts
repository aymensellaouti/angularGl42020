import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ColorComponent } from './components/color/color.component';
import { CvComponent } from './cv/pages/cv/cv.component';
import { NgstyleComponent } from './directives/ngstyle/ngstyle.component';
import { FrontComponent } from './front/front.component';
import { NF404Component } from './nf404/nf404.component';
import { LoginComponent } from './pages/login/login.component';
import { TodoComponent } from './todo/pages/todo/todo.component';

const routes: Routes = [

  {
    path: 'cv',
    children: [
      { path: '', component: CvComponent },
      { path: 'add', component: CvComponent },
      { path: ':id', component: CvComponent },
    ],
  },
  {
    path: '',
    component: FrontComponent,
    children: [
      { path: 'todo', component: TodoComponent },
      { path: 'color/:defaultColor', component: ColorComponent },
    ],
  },
  {
    path: 'admin', component: AdminComponent, children: [
      {path: 'ngStyle', component: NgstyleComponent}
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'cv', pathMatch: 'full'},
  {path: '**', component: NF404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
