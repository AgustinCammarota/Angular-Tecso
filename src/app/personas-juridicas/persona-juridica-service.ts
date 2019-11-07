import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PersonaJuridica } from './persona-juridica';
import { map } from 'rxjs/operators';

@Injectable()
export class PersonaJuridicaService {
  private urlEndPoint = 'http://localhost:8080/api/personas_juridica';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }
  getPersonasJuridicas(): Observable<PersonaJuridica[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map( (response) => response as PersonaJuridica[])
    );
  }

  create(persona: PersonaJuridica): Observable<PersonaJuridica> {
    return this.http.post<PersonaJuridica>(this.urlEndPoint, persona, {headers: this.httpHeaders});
  }

  getPersonaJuridica(id: number): Observable<PersonaJuridica> {
    return this.http.get<PersonaJuridica>(`${this.urlEndPoint}/${id}`);
  }

  update(persona: PersonaJuridica): Observable<PersonaJuridica> {
    return this.http.put<PersonaJuridica>(`${this.urlEndPoint}/${persona.id_titular}`, persona , {headers: this.httpHeaders});
  }

  delete(id: number): Observable<PersonaJuridica> {
    return this.http.delete<PersonaJuridica>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders});
  }
}
