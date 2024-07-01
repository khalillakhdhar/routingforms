import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { DemonstrationComponent } from './demonstration/demonstration.component';
import { FormulaireComponent } from './formulaire/formulaire.component';

const routes: Routes = [
  { path:"",component:AccueilComponent},
  {path:"demo/:id",component:DemonstrationComponent},
  {path:"forms",component:FormulaireComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
