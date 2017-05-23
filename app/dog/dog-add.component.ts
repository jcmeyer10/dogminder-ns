import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Dog } from "./dog";
import { DogService } from "./dog.service";

@Component({
    selector: "ns-add",
    providers: [DogService],
    moduleId: module.id,
    templateUrl: "./dog-add.component.html",
})
export class DogAddComponent {
    dog: Dog;

    name = '';
    breed = '';

    submit(){
      console.log(this.name + " the " + this.breed );
    }

    constructor(
        private dogService: DogService,
        private route: ActivatedRoute
    ) { }

 }
