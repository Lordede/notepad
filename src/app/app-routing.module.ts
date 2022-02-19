import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NoteBigComponent } from './note-big/note-big.component';

const routes: Routes = [
  {path:'note-big-component', component: NoteBigComponent},
  {path:'app-component', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
