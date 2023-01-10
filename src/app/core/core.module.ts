import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { HeaderComponent } from './header/header.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HabilidadComponent } from './habilidad/habilidad.component';
import { RouterModule } from '@angular/router';
import { NewExperienciaComponent } from './experiencia/new-experiencia.component';
import { FormsModule } from '@angular/forms';
import { EditExperienciaComponent } from './experiencia/edit-experiencia.component';
import { EditSobreMiComponent } from './sobre-mi/edit-sobre-mi.component';
import { NewHabilidadComponent } from './habilidad/new-habilidad.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProgressBarAngularModule } from "progress-bar-angular";
import { EditHabilidadComponent } from './habilidad/edit-habilidad.component';
import { NewHabilidadBComponent } from './habilidad/new-habilidad-b.component';
import { EditHabilidadBComponent } from './habilidad/edit-habilidad-b.component';
import { EditPersonaComponent } from './header/edit-persona.component';
import { NewProyectoComponent } from './proyecto/new-proyecto.component';
import { EditProyectoComponent } from './proyecto/edit-proyecto.component';
import { EducacionComponent } from './educacion/educacion.component';
import { EditEducacionComponent } from './educacion/edit-educacion.component';
import { NewEducacionComponent } from './educacion/new-educacion.component';

@NgModule({
  declarations: [
    CoreComponent,
    HeaderComponent,
    ExperienciaComponent,
    SobreMiComponent,
    ProyectoComponent,
    ContactoComponent,
    HabilidadComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    EditSobreMiComponent,
    NewHabilidadComponent,
    EditHabilidadComponent,
    NewHabilidadBComponent,
    EditHabilidadBComponent,
    EditPersonaComponent,
    NewProyectoComponent,
    EditProyectoComponent,
    EducacionComponent,
    EditEducacionComponent,
    NewEducacionComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    ProgressBarAngularModule


  ],
  exports: [
    CoreComponent,
    HeaderComponent,
    ExperienciaComponent,
    SobreMiComponent,
    ProyectoComponent,
    ContactoComponent,
    HabilidadComponent
  ]
})
export class CoreModule { }
