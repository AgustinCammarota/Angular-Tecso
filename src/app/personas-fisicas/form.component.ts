import { Component, OnInit } from '@angular/core';
import { PersonaFisica } from './persona-fisica';
import { PersonaService } from './persona.service';
import { Router, ActivatedRoute} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  personaFisica: PersonaFisica = new PersonaFisica();

  constructor(private personaService: PersonaService, private router: Router, private ativatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarPersonaFisica();
  }

  cargarPersonaFisica(): void {
    this.ativatedRoute.params.subscribe(params => {
      let id = params['id']
      if (id) {
        this.personaService.getPersonaFisica(id).subscribe( (personaFisica) => this.personaFisica = personaFisica);
      }
    });
  }

  create(): void {
    this.personaService.create(this.personaFisica).subscribe(persona => {
      this.router.navigate(['/personasfisicas']);
      Swal.fire('Nueva Persona', `Persona ${this.personaFisica.nombre} creada con exito!`, 'success');
      }
    );
  }

  update(): void{
    this.personaService.update(this.personaFisica).subscribe( personaFisica => {
      this.router.navigate(['/personasfisicas']);
      Swal.fire('Editar Persona', `Persona ${this.personaFisica.nombre} editada con exito!`, 'success');
      }
    );
  }
}
