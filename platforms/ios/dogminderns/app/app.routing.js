"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var dogs_component_1 = require("./dog/dogs.component");
var dog_detail_component_1 = require("./dog/dog-detail.component");
var dog_add_component_1 = require("./dog/dog-add.component");
var user_component_1 = require("./user/user.component");
var routes = [
    { path: "", redirectTo: "/logs", pathMatch: "full" },
    { path: "logs", component: dogs_component_1.DogsComponent },
    { path: "dog/:id", component: dog_detail_component_1.DogDetailComponent },
    { path: "add", component: dog_add_component_1.DogAddComponent },
    { path: "user", component: user_component_1.UserComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
        exports: [router_1.NativeScriptRouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFHdkUsdURBQXFEO0FBQ3JELG1FQUFnRTtBQUNoRSw2REFBMEQ7QUFFMUQsd0RBQXFEO0FBRXJELElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDcEQsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO0lBQzFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUseUNBQWtCLEVBQUU7SUFDbEQsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxtQ0FBZSxFQUFDO0lBQzFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTtDQUM3QyxDQUFDO0FBTUYsSUFBYSxnQkFBZ0I7SUFBN0I7SUFBZ0MsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FBQyxBQUFqQyxJQUFpQztBQUFwQixnQkFBZ0I7SUFKNUIsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25ELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO0tBQ3RDLENBQUM7R0FDVyxnQkFBZ0IsQ0FBSTtBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IERvZ3NDb21wb25lbnQgfSBmcm9tIFwiLi9kb2cvZG9ncy5jb21wb25lbnRcIjtcbmltcG9ydCB7IERvZ0RldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2RvZy9kb2ctZGV0YWlsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRG9nQWRkQ29tcG9uZW50IH0gZnJvbSBcIi4vZG9nL2RvZy1hZGQuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IFVzZXJDb21wb25lbnQgfSBmcm9tICcuL3VzZXIvdXNlci5jb21wb25lbnQnXG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvbG9nc1wiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgeyBwYXRoOiBcImxvZ3NcIiwgY29tcG9uZW50OiBEb2dzQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcImRvZy86aWRcIiwgY29tcG9uZW50OiBEb2dEZXRhaWxDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwiYWRkXCIsIGNvbXBvbmVudDogRG9nQWRkQ29tcG9uZW50fSxcbiAgICB7IHBhdGg6IFwidXNlclwiLCBjb21wb25lbnQ6IFVzZXJDb21wb25lbnQgfSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XG4iXX0=