import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Dog } from "./dog";
import { DogService } from "./dog.service";

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./dog-detail.component.html",
})
export class DogDetailComponent implements OnInit {
    dog: Dog;

    constructor(
        private dogService: DogService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params["id"];
        this.dog = this.dogService.getDog(id);
    }
}

