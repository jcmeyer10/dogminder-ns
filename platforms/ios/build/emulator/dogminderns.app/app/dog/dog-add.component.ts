import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Dog } from "./dog";
import { DogService } from "./dog.service";

@Component({
    selector: "ns-add",
    moduleId: module.id,
    templateUrl: "./dog-add.component.html",
})
export class DogAddComponent {
  name = "Rupert";

  submit() {
   console.log(this.name);

  }

    constructor(
        private dogService: DogService,
        private route: ActivatedRoute
    ) { }

 }
