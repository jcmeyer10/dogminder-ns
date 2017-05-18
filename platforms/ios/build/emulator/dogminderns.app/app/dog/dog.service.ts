import { Injectable } from "@angular/core";

import { Dog } from "./dog";

@Injectable()
export class DogService {
    private dogs = new Array<Dog>(
        { id: 1, name: "Ter Stegen", breed: "Goalkeeper" },
        { id: 2, name: "Piqué", breed: "Defender" },
        { id: 3, name: "I. Rakitic", breed: "Midfielder" },
    );

    getDogs(): Dog[] {
        console.log("dogs");
        return this.dogs;
    }

    getDog(id: number): Dog {
        return this.dogs.filter(dog => dog.id === id)[0];
    }
}
