import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from 'src/core/create/create.component';
import { PreviewComponent } from 'src/core/create/preview.component';
import { SubmitComponent } from 'src/core/create/submit.component';
import { AppRoutingComponent } from './approuting.component';
import { ViewComponent } from 'src/core/view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    AppRoutingComponent,
    CreateComponent,
    PreviewComponent,
    SubmitComponent,
    ViewComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppRoutingComponent]
})
export class AppModule { }
