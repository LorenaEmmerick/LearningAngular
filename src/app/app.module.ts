import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';

@NgModule({
  declarations: [
    AppComponent,
     FirstComponentComponent,
     ParentDataComponent,
     DirectivesComponent,
     IfRenderComponent,
     EventosComponent
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
