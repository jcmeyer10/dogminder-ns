import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { DogsComponent } from "./dog/dogs.component";
import { DogDetailComponent } from "./dog/dog-detail.component";
import { DogAddComponent } from "./dog/dog-add.component";

import { UserComponent } from './user/user.component'

const routes: Routes = [
    { path: "", redirectTo: "/logs", pathMatch: "full" },
    { path: "logs", component: DogsComponent },
    { path: "dog/:id", component: DogDetailComponent },
    { path: "add", component: DogAddComponent},
    { path: "user", component: UserComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
