import { Component, OnInit } from "@angular/core";

import { Dog } from "./dog";
import { DogService } from "./dog.service";

@Component({
    selector: "ns-dogs",
    providers: [DogService],
    moduleId: module.id,
    templateUrl: "./dogs.component.html",
})
export class DogsComponent implements OnInit {
    dogs: Dog[];

    constructor(private dogService: DogService) { }

    ngOnInit(): void {
        this.dogs = this.dogService.getDogs();
        console.table(this.dogs);
    }
}
