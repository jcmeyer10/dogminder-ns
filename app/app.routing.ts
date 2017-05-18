import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { DogsComponent } from "./dog/dogs.component";
import { DogDetailComponent } from "./dog/dog-detail.component";
import { DogAddComponent } from "./dog/dog-add.component";

const routes: Routes = [
    { path: "", redirectTo: "/add", pathMatch: "full" },
    { path: "dogs", component: DogsComponent },
    { path: "dog/:id", component: DogDetailComponent },
    { path: "add", component: DogAddComponent},
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
