import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { User } from './user'
import { UserService } from './user.service';

@Component({
    selector: "ns-user",
    providers: [UserService],
    moduleId: module.id,
    templateUrl: "./user.component.html",
    styleUrls: ['user.component.css']
})
export class UserComponent {
  user: User;

  email: '';
  password: '';

   login(){
      console.log(this.email + " the " + this.password );
    }

    register(){
      console.log(this.email + " the " + this.password );
    }

      constructor(
        private userService: UserService,
        private route: ActivatedRoute
    ) { }


}
