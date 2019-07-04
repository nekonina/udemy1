import { Component, OnInit, OnDestroy } from "@angular/core";
import { PersonsService } from "./persons.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-persons",
  templateUrl: "./persons.component.html",
  styleUrls: ["./persons.component.scss"]
})
export class PersonsComponent implements OnInit, OnDestroy {
  personsList: string[];
  isFetching = false;
  private personsListSubs: Subscription;
  constructor(private prsService: PersonsService) {}

  ngOnInit() {
    this.prsService.fetchPersons();
    this.isFetching = true;
    this.personsListSubs = this.prsService.personsChanged.subscribe(persons => {
      this.isFetching = false;
      this.personsList = persons;
    });
  }

  onRemovePerson(personName: string) {
    this.prsService.removePerson(personName);
  }
  ngOnDestroy(){
    this.personsListSubs.unsubscribe();
  };
}
