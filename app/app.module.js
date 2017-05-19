"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var dog_service_1 = require("./dog/dog.service");
var dogs_component_1 = require("./dog/dogs.component");
var dog_detail_component_1 = require("./dog/dog-detail.component");
var dog_add_component_1 = require("./dog/dog-add.component");
var user_service_1 = require("./user/user.service");
var user_component_1 = require("./user/user.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [
            app_component_1.AppComponent
        ],
        imports: [
            nativescript_module_1.NativeScriptModule,
            app_routing_1.AppRoutingModule,
            forms_1.NativeScriptFormsModule
        ],
        declarations: [
            app_component_1.AppComponent,
            dogs_component_1.DogsComponent,
            dog_detail_component_1.DogDetailComponent,
            dog_add_component_1.DogAddComponent,
            user_component_1.UserComponent
        ],
        providers: [
            dog_service_1.DogService,
            user_service_1.UserService
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLG9EQUFxRTtBQUNyRSw2Q0FBaUQ7QUFDakQsaURBQStDO0FBRS9DLGlEQUErQztBQUMvQyx1REFBcUQ7QUFDckQsbUVBQWdFO0FBQ2hFLDZEQUEwRDtBQUUxRCxvREFBaUQ7QUFDakQsd0RBQXFEO0FBMEJyRCxJQUFhLFNBQVM7SUFBdEI7SUFBeUIsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUExQixJQUEwQjtBQUFiLFNBQVM7SUF4QnJCLGVBQVEsQ0FBQztRQUNOLFNBQVMsRUFBRTtZQUNQLDRCQUFZO1NBQ2Y7UUFDRCxPQUFPLEVBQUU7WUFDTCx3Q0FBa0I7WUFDbEIsOEJBQWdCO1lBQ2hCLCtCQUF1QjtTQUMxQjtRQUNELFlBQVksRUFBRTtZQUNWLDRCQUFZO1lBQ1osOEJBQWE7WUFDYix5Q0FBa0I7WUFDbEIsbUNBQWU7WUFDZiw4QkFBYTtTQUNoQjtRQUNELFNBQVMsRUFBRTtZQUNQLHdCQUFVO1lBQ1YsMEJBQVc7U0FDZDtRQUNELE9BQU8sRUFBRTtZQUNMLHVCQUFnQjtTQUNuQjtLQUNKLENBQUM7R0FDVyxTQUFTLENBQUk7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IERvZ1NlcnZpY2UgfSBmcm9tIFwiLi9kb2cvZG9nLnNlcnZpY2VcIjtcbmltcG9ydCB7IERvZ3NDb21wb25lbnQgfSBmcm9tIFwiLi9kb2cvZG9ncy5jb21wb25lbnRcIjtcbmltcG9ydCB7IERvZ0RldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2RvZy9kb2ctZGV0YWlsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRG9nQWRkQ29tcG9uZW50IH0gZnJvbSBcIi4vZG9nL2RvZy1hZGQuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi91c2VyL3VzZXIuc2VydmljZSdcbmltcG9ydCB7IFVzZXJDb21wb25lbnQgfSBmcm9tICcuL3VzZXIvdXNlci5jb21wb25lbnQnXG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBEb2dzQ29tcG9uZW50LFxuICAgICAgICBEb2dEZXRhaWxDb21wb25lbnQsXG4gICAgICAgIERvZ0FkZENvbXBvbmVudCxcbiAgICAgICAgVXNlckNvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIERvZ1NlcnZpY2UsXG4gICAgICAgIFVzZXJTZXJ2aWNlXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==