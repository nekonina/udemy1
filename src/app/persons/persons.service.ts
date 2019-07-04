import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PersonsService{
  persons: string[] = ["Max", "iri", "Fer", "manu"];

  addPerson(name: string){
    this.persons.push(name);
  }
}
