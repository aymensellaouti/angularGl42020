import { NgModule } from '@angular/core';
import { AddPersonneComponent } from './pages/add-personne/add-personne.component';
import { DetailPersonneComponent } from './pages/detail-personne/detail-personne.component';
import { EmbaucheComponent } from './../embauche/components/embauche/embauche.component';
import { CvComponent } from './pages/cv/cv.component';
import { DetailComponent } from './components/detail/detail.component';
import { ItemComponent } from './components/item/item.component';
import { ListComponent } from './components/list/list.component';
import { DefaultImagePipe } from './../pipes/default-image.pipe';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginGuard } from './../guards/login.guard';

@NgModule({
  declarations: [
    DetailPersonneComponent,
    AddPersonneComponent,
    EmbaucheComponent,
    CvComponent,
    DetailComponent,
    ItemComponent,
    ListComponent,
    DefaultImagePipe,
  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
          { path: '', component: CvComponent },
          {
            path: 'add',
            component: AddPersonneComponent,
            canActivate: [LoginGuard],
          },
          { path: ':id', component: DetailPersonneComponent },
    ]),
  ],
})
export class CvModule {}
