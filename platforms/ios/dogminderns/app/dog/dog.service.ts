import { Injectable } from "@angular/core";

import { Dog } from "./dog";

@Injectable()
export class DogService {
    private dogs = new Array<Dog>(
        { id: 1, name: "Ter Stegen", breed: "Goalkeeper" },
        { id: 3, name: "Piqué", breed: "Defender" },
        { id: 4, name: "I. Rakitic", breed: "Midfielder" },
        { id: 5, name: "Sergio", breed: "Midfielder" },
        { id: 6, name: "Denis Suárez", breed: "Midfielder" },
        { id: 7, name: "Arda", breed: "Midfielder" },
        { id: 8, name: "A. Iniesta", breed: "Midfielder" },
        { id: 9, name: "Suárez", breed: "Forward" },
        { id: 10, name: "Messi", breed: "Forward" },
        { id: 11, name: "Neymar", breed: "Forward" },
        { id: 12, name: "Rafinha", breed: "Midfielder" },
        { id: 13, name: "Cillessen", breed: "Goalkeeper" },
        { id: 14, name: "Mascherano", breed: "Defender" },
        { id: 17, name: "Paco Alcácer", breed: "Forward" },
        { id: 18, name: "Jordi Alba", breed: "Defender" },
        { id: 19, name: "Digne", breed: "Defender" },
        { id: 20, name: "Sergi Roberto", breed: "Midfielder" },
        { id: 21, name: "André Gomes", breed: "Midfielder" },
        { id: 22, name: "Aleix Vidal", breed: "Midfielder" },
        { id: 23, name: "Umtiti", breed: "Defender" },
        { id: 24, name: "Mathieu", breed: "Defender" },
        { id: 25, name: "Masip", breed: "Goalkeeper" },
    );

    getDogs(): Dog[] {
        return this.dogs;
    }

    getDog(id: number): Dog {
        return this.dogs.filter(dog => dog.id === id)[0];
    }
}
