import { Injectable } from "@angular/core";

import { Dog } from "./dog";

@Injectable()
export class DogService {
    private dogs = new Array<Dog>(
        { id: 1, name: "Rupert", breed: "Goldendoodle" },
        { id: 2, name: "Gracie", breed: "Goldendoodle" },
        { id: 3, name: "Big Ralph", breed: "Goldendoodle" },
    );

    getDogs(): Dog[] {
        console.log(this.dogs[1].breed);
        return this.dogs;
    }

    getDog(id: number): Dog {
        return this.dogs.filter(dog => dog.id === id)[1];
    }
}
