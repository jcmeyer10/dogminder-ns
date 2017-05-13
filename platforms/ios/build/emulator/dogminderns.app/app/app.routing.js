"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var dogs_component_1 = require("./dog/dogs.component");
var dog_detail_component_1 = require("./dog/dog-detail.component");
var dog_add_component_1 = require("./dog/dog-add.component");
var routes = [
    { path: "", redirectTo: "/dogs", pathMatch: "full" },
    { path: "dogs", component: dogs_component_1.DogsComponent },
    { path: "dog/:id", component: dog_detail_component_1.DogDetailComponent },
    { path: "add", component: dog_add_component_1.DogAddComponent },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFHdkUsdURBQXFEO0FBQ3JELG1FQUFnRTtBQUNoRSw2REFBMEQ7QUFFMUQsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUNwRCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7SUFDMUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSx5Q0FBa0IsRUFBRTtJQUNsRCxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLG1DQUFlLEVBQUM7Q0FDN0MsQ0FBQztBQU1GLElBQWEsZ0JBQWdCO0lBQTdCO0lBQWdDLENBQUM7SUFBRCx1QkFBQztBQUFELENBQUMsQUFBakMsSUFBaUM7QUFBcEIsZ0JBQWdCO0lBSjVCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztLQUN0QyxDQUFDO0dBQ1csZ0JBQWdCLENBQUk7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBEb2dzQ29tcG9uZW50IH0gZnJvbSBcIi4vZG9nL2RvZ3MuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBEb2dEZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9kb2cvZG9nLWRldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IERvZ0FkZENvbXBvbmVudCB9IGZyb20gXCIuL2RvZy9kb2ctYWRkLmNvbXBvbmVudFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL2RvZ3NcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxuICAgIHsgcGF0aDogXCJkb2dzXCIsIGNvbXBvbmVudDogRG9nc0NvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJkb2cvOmlkXCIsIGNvbXBvbmVudDogRG9nRGV0YWlsQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcImFkZFwiLCBjb21wb25lbnQ6IERvZ0FkZENvbXBvbmVudH0sXG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxuIl19