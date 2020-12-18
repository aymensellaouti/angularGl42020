import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ColorComponent } from './components/color/color.component';
import { AddPersonneComponent } from './cv/pages/add-personne/add-personne.component';
import { CvComponent } from './cv/pages/cv/cv.component';
import { DetailPersonneComponent } from './cv/pages/detail-personne/detail-personne.component';
import { NgstyleComponent } from './directives/ngstyle/ngstyle.component';
import { FrontComponent } from './front/front.component';
import { LoginGuard } from './guards/login.guard';
import { NF404Component } from './nf404/nf404.component';
import { LoginComponent } from './pages/login/login.component';
import { TodoComponent } from './todo/pages/todo/todo.component';

const routes: Routes = [
  { path: '', redirectTo: 'todo', pathMatch: 'full' },
  {
    path: 'cv',
    loadChildren: () => import('./cv/cv.module').then((m) => m.CvModule),
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
    path: 'admin',
    component: AdminComponent,
    children: [{ path: 'ngStyle', component: NgstyleComponent }],
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'cv', pathMatch: 'full' },
];
/*   { path: '**', component: NF404Component }, */
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
