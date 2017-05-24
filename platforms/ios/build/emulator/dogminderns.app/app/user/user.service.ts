import { Injectable } from "@angular/core";

import { User } from "./user";

@Injectable()
export class UserService {
      private users = new Array<User>(
        { id: 1, email: "Rupert", password: "Goldendoodle" },
        { id: 2, email: "Gracie", password: "Goldendoodle" },
        { id: 3, email: "Big Ralph", password: "Goldendoodle" },
    );
}
