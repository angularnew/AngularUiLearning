import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateComponent } from 'src/core/create/create.component';
import { PreviewComponent } from 'src/core/create/preview.component';
import { SubmitComponent } from 'src/core/create/submit.component';
import { ViewComponent } from 'src/core/view/view.component';


const appRoutes: Routes = [
  { path: 'home',component: AppComponent},
  { path: 'create/edit', component: CreateComponent },
  { path: 'create/preview',component: PreviewComponent },
  { path: 'create/confirm',component: SubmitComponent },
  { path: 'view',component: ViewComponent},
  { path: '',  
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
