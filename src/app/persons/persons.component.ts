import { Component} from "@angular/core";
import {PersonsService} from './persons.service';

@Component({
  selector: "app-persons",
  templateUrl: "./persons.component.html",
  styleUrls: ["./persons.component.scss"]
})
export class PersonsComponent implements OnInit {
  personsList: string[];
  constructor(prsService: PersonsService) {
    this.personsList = prsService.persons;
  }

  ngOnInit() {}
}
