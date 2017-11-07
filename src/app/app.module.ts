import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; // Pour les requêtes ajax avec angular

import { AppComponent } from './components/app.component';
import { NoteComponent } from './components/note.component';
import { NiemePipe } from './pipes/nieme.pipe';
import { ResumePipe } from './pipes/resume.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    NiemePipe,
    ResumePipe,
    FilterPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
