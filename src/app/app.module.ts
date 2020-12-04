import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ColorComponent } from './components/color/color.component';
import { TwoComponent } from './components/two/two.component';
import { CardComponent } from './components/card/card.component';
import { PereComponent } from './components/pere/pere.component';
import { FilsComponent } from './components/fils/fils.component';
import { CvComponent } from './cv/pages/cv/cv.component';
import { DetailComponent } from './cv/components/detail/detail.component';
import { ItemComponent } from './cv/components/item/item.component';
import { ListComponent } from './cv/components/list/list.component';
import { NgstyleComponent } from './directives/ngstyle/ngstyle.component';
import { WordComponent } from './directives/word/word.component';
import { NgclassComponent } from './directives/ngclass/ngclass.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { StructurelleComponent } from './components/structurelle/structurelle.component';
import { RandomStringPipe } from './pipes/random-string.pipe';
import { LoggerService } from './services/logger.service';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { TodoComponent } from './todo/pages/todo/todo.component';
import { HeaderComponent } from './components/header/header.component';
import { EmbaucheComponent } from './embauche/components/embauche/embauche.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './admin/admin.component';
import { FrontComponent } from './front/front.component';
import { NF404Component } from './nf404/nf404.component';
import { TestNestComponent } from './test-nest/test-nest.component';
import { TestFormComponent } from './test-form/test-form.component';
import { ObservableTestComponent } from './observable-test/observable-test.component';
import { TestHttpComponent } from './components/test-http/test-http.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    TwoComponent,
    CardComponent,
    PereComponent,
    FilsComponent,
    CvComponent,
    DetailComponent,
    ItemComponent,
    ListComponent,
    NgstyleComponent,
    WordComponent,
    NgclassComponent,
    HighlightDirective,
    RainbowDirective,
    StructurelleComponent,
    RandomStringPipe,
    DefaultImagePipe,
    TodoComponent,
    HeaderComponent,
    EmbaucheComponent,
    LoginComponent,
    AdminComponent,
    FrontComponent,
    NF404Component,
    TestNestComponent,
    TestFormComponent,
    ObservableTestComponent,
    TestHttpComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
