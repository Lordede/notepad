import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteBigComponent } from './note-big/note-big.component';
import { NoteSmallComponent } from './note-small/note-small.component';
import { WorkingPartComponent } from './working-part/working-part.component';

@NgModule({
  declarations: [			
    AppComponent,
      NoteBigComponent,
      NoteSmallComponent,
      WorkingPartComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
