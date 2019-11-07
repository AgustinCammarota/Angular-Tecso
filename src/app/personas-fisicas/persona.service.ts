import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PersonaFisica } from './persona-fisica';
import { map } from 'rxjs/operators';

@Injectable()
export class PersonaService {
  private urlEndPoint = 'http://localhost:8080/api/personas_fisicas';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }
  getPersonasFisicas(): Observable<PersonaFisica[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map( (response) => response as PersonaFisica[])
    );
  }

  create(persona: PersonaFisica): Observable<PersonaFisica> {
    return this.http.post<PersonaFisica>(this.urlEndPoint, persona, {headers: this.httpHeaders});
  }

  getPersonaFisica(id: number): Observable<PersonaFisica> {
    return this.http.get<PersonaFisica>(`${this.urlEndPoint}/${id}`);
  }

  update(personaFisica: PersonaFisica): Observable<PersonaFisica> {
    return this.http.put<PersonaFisica>(`${this.urlEndPoint}/${personaFisica.id_titular}`, personaFisica , {headers: this.httpHeaders});
  }

  delete(id: number): Observable<PersonaFisica> {
    return this.http.delete<PersonaFisica>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders});
  }
}
