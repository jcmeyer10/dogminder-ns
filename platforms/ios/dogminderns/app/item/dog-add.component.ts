import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { dog } from "./dog";
import { dogService } from "./dog.service";

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./dog-add.component.html",
})
export class DogAddComponent {

    constructor(
        private route: ActivatedRoute
    ) { }

 }
