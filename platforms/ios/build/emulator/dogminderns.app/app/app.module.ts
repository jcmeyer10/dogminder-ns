import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { DogService } from "./dog/dog.service";
import { DogsComponent } from "./dog/dogs.component";
import { DogDetailComponent } from "./dog/dog-detail.component";
import { DogAddComponent } from "./dog/dog-add.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        AppComponent,
        DogsComponent,
        DogDetailComponent,
        DogAddComponent
    ],
    providers: [
        DogService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
