"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dog_service_1 = require("./dog.service");
var DogAddComponent = (function () {
    function DogAddComponent(dogService, route) {
        this.dogService = dogService;
        this.route = route;
        this.name = "Rupert";
    }
    DogAddComponent.prototype.submit = function () {
        console.log(this.name);
    };
    return DogAddComponent;
}());
DogAddComponent = __decorate([
    core_1.Component({
        selector: "ns-add",
        moduleId: module.id,
        templateUrl: "./dog-add.component.html",
    }),
    __metadata("design:paramtypes", [dog_service_1.DogService,
        router_1.ActivatedRoute])
], DogAddComponent);
exports.DogAddComponent = DogAddComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9nLWFkZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkb2ctYWRkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBaUQ7QUFHakQsNkNBQTJDO0FBTzNDLElBQWEsZUFBZTtJQVF4Qix5QkFDWSxVQUFzQixFQUN0QixLQUFxQjtRQURyQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBVG5DLFNBQUksR0FBRyxRQUFRLENBQUM7SUFVVixDQUFDO0lBUlAsZ0NBQU0sR0FBTjtRQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXhCLENBQUM7SUFPRixzQkFBQztBQUFELENBQUMsQUFiRixJQWFFO0FBYlcsZUFBZTtJQUwzQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSwwQkFBMEI7S0FDMUMsQ0FBQztxQ0FVMEIsd0JBQVU7UUFDZix1QkFBYztHQVZ4QixlQUFlLENBYTFCO0FBYlcsMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgRG9nIH0gZnJvbSBcIi4vZG9nXCI7XG5pbXBvcnQgeyBEb2dTZXJ2aWNlIH0gZnJvbSBcIi4vZG9nLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYWRkXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2RvZy1hZGQuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgRG9nQWRkQ29tcG9uZW50IHtcbiAgbmFtZSA9IFwiUnVwZXJ0XCI7XG5cbiAgc3VibWl0KCkge1xuICAgY29uc29sZS5sb2codGhpcy5uYW1lKTtcblxuICB9XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBkb2dTZXJ2aWNlOiBEb2dTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICAgICkgeyB9XG5cbiB9XG4iXX0=