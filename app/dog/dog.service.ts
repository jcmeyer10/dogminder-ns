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
        return this.dogs;
    }

    getDog(id: number): Dog {
        console.table(Dog.name[1])
        return this.dogs.filter(dog => dog.id === id)[0];
    }
}
