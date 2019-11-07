import { Component, OnInit } from '@angular/core';
import { PersonaJuridica } from './persona-juridica';
import { PersonaJuridicaService } from './persona-juridica-service';
import { Router, ActivatedRoute} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormsComponent implements OnInit {
 personaJuridica: PersonaJuridica = new PersonaJuridica();

  constructor(private personaService: PersonaJuridicaService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarPersonaJuridica();
  }

  cargarPersonaJuridica(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if (id) {
        this.personaService.getPersonaJuridica(id).subscribe( (personaJuridica) => this.personaJuridica = personaJuridica);
      }
    });
  }

  create(): void {
    this.personaService.create(this.personaJuridica).subscribe( personaJuridica => {
      this.router.navigate(['/personasjuridicas']);
      Swal.fire('Nueva Persona', `Persona ${this.personaJuridica.id_titular} creada con exito!`, 'success');
    }
    );
  }

  update(): void {
    this.personaService.update(this.personaJuridica).subscribe( personaJuridica => {
      this.router.navigate(['/personasjuridicas']);
      Swal.fire('Editar Persona', `Persona ${this.personaJuridica.id_titular} editada con exito!`, 'success');
    }
    );
  }

}
