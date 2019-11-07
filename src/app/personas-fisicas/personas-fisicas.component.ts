import { Component, OnInit } from '@angular/core';
import { PersonaFisica } from './persona-fisica';
import { PersonaService } from './persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-personas-fisicas',
  templateUrl: './personas-fisicas.component.html'
})
export class PersonasFisicasComponent implements OnInit {

  Personas: PersonaFisica[];
  constructor(private personaService: PersonaService) { }

  ngOnInit() {
    this.personaService.getPersonasFisicas().subscribe(
      (Personas) => this.Personas = Personas
    );
  }

  delete(personaFisica: PersonaFisica): void {
    Swal.fire({
      title: 'Estas Seguro?',
      text: `¿Seguro que desea eliminar a la persona ${personaFisica.nombre} ${personaFisica.apellido}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.value) {
        this.personaService.delete(personaFisica.id_titular).subscribe(
          response => {
            this.Personas = this.Personas.filter(persona => persona !== personaFisica);
          }
        );
        Swal.fire(
          'Persona Eliminada!',
          'Persona elimninada con exito.',
          'success'
        );
      }
    });
  }
}
