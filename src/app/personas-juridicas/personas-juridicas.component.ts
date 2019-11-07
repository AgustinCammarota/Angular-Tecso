import { Component, OnInit } from '@angular/core';
import { PersonaJuridica } from './persona-juridica';
import { PersonaJuridicaService } from './persona-juridica-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-personas-juridicas',
  templateUrl: './personas-juridicas.component.html'
})
export class PersonasJuridicasComponent implements OnInit {

  Personas: PersonaJuridica[];
  constructor(private personaJuridicaService: PersonaJuridicaService) { }

  ngOnInit() {
    this.personaJuridicaService.getPersonasJuridicas().subscribe(
      (Personas) => this.Personas = Personas
    );
  }

  delete(personaJuridica: PersonaJuridica): void {
    Swal.fire({
      title: 'Estas Seguro?',
      text: `¿Seguro que desea eliminar a la persona ${personaJuridica.id_titular} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.value) {
        this.personaJuridicaService.delete(personaJuridica.id_titular).subscribe(
          response => {
            this.Personas = this.Personas.filter(persona => persona !== personaJuridica);
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
