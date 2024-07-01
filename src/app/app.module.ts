import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AccueilComponent } from './accueil/accueil.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemonstrationComponent } from './demonstration/demonstration.component';
import { FormulaireComponent } from './formulaire/formulaire.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    DemonstrationComponent,
    FormulaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
