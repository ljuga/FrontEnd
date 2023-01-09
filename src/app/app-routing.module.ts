import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core/core.component';
import { NewExperienciaComponent } from './core/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './core/experiencia/edit-experiencia.component';
import { LoginComponent } from './login/login.component';
import { EditSobreMiComponent } from './core/sobre-mi/edit-sobre-mi.component';
import { NewHabilidadComponent } from './core/habilidad/new-habilidad.component';
import { EditHabilidadComponent } from './core/habilidad/edit-habilidad.component';
import { NewHabilidadBComponent } from './core/habilidad/new-habilidad-b.component';
import { EditHabilidadBComponent } from './core/habilidad/edit-habilidad-b.component';
import { EditPersonaComponent } from './core/header/edit-persona.component';
import { NewProyectoComponent } from './core/proyecto/new-proyecto.component';
import { EditProyectoComponent } from './core/proyecto/edit-proyecto.component';
import { RegisterComponent } from './login/register.component';

const routes: Routes = [
  { path: '', component: CoreComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'nuevaexp', component: NewExperienciaComponent },
  { path: 'editper/:id', component: EditPersonaComponent },
  { path: 'editexp/:id', component: EditExperienciaComponent },
  { path: 'nuevahys', component: NewHabilidadComponent },
  { path: 'editproy/:id', component: EditProyectoComponent },
  { path: 'nuevoproy', component: NewProyectoComponent },
  { path: 'edithysb/:id', component: EditHabilidadBComponent },
  { path: 'nuevahysb', component: NewHabilidadBComponent },
  { path: 'edithys/:id', component: EditHabilidadComponent },
  { path: 'editsmi/:id', component: EditSobreMiComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
