import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PersonasFisicasComponent } from './personas-fisicas/personas-fisicas.component';
import { PersonaService } from './personas-fisicas/persona.service';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './personas-fisicas/form.component';
import { FormsComponent } from './personas-juridicas/form.component';
import { FormsModule } from '@angular/forms';
import { PersonasJuridicasComponent } from './personas-juridicas/personas-juridicas.component';
import { PersonaJuridicaService } from './personas-juridicas/persona-juridica-service';

const router: Routes = [
  {path: '', redirectTo: '/personas-fisicas', pathMatch: 'full'},
  {path: 'personasfisicas', component: PersonasFisicasComponent},
  {path: 'personasfisicas/form', component: FormComponent},
  {path: 'personasfisicas/form/:id', component: FormComponent},
  {path: '', redirectTo: '/personas-juridicas', pathMatch: 'full'},
  {path: 'personasjuridicas', component: PersonasJuridicasComponent},
  {path: 'personasjuridicas/form', component: FormsComponent},
  {path: 'personasjuridicas/form/:id', component: FormsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PersonasFisicasComponent,
    FormComponent,
    FormsComponent,
    PersonasJuridicasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(router)
  ],
  providers: [PersonaService, PersonaJuridicaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
