"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dog_service_1 = require("./dog.service");
var DogAddComponent = (function () {
    function DogAddComponent(dogService, route) {
        this.dogService = dogService;
        this.route = route;
        this.name = '';
        this.breed = '';
    }
    DogAddComponent.prototype.submit = function () {
        console.log(this.name + " the " + this.breed);
    };
    return DogAddComponent;
}());
DogAddComponent = __decorate([
    core_1.Component({
        selector: "ns-add",
        providers: [dog_service_1.DogService],
        moduleId: module.id,
        templateUrl: "./dog-add.component.html",
    }),
    __metadata("design:paramtypes", [dog_service_1.DogService,
        router_1.ActivatedRoute])
], DogAddComponent);
exports.DogAddComponent = DogAddComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9nLWFkZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkb2ctYWRkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBaUQ7QUFHakQsNkNBQTJDO0FBUTNDLElBQWEsZUFBZTtJQVV4Qix5QkFDWSxVQUFzQixFQUN0QixLQUFxQjtRQURyQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBVGpDLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixVQUFLLEdBQUcsRUFBRSxDQUFDO0lBU1AsQ0FBQztJQVBMLGdDQUFNLEdBQU47UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQztJQUNqRCxDQUFDO0lBT0osc0JBQUM7QUFBRCxDQUFDLEFBZkYsSUFlRTtBQWZXLGVBQWU7SUFOM0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFNBQVMsRUFBRSxDQUFDLHdCQUFVLENBQUM7UUFDdkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSwwQkFBMEI7S0FDMUMsQ0FBQztxQ0FZMEIsd0JBQVU7UUFDZix1QkFBYztHQVp4QixlQUFlLENBZTFCO0FBZlcsMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgRG9nIH0gZnJvbSBcIi4vZG9nXCI7XG5pbXBvcnQgeyBEb2dTZXJ2aWNlIH0gZnJvbSBcIi4vZG9nLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYWRkXCIsXG4gICAgcHJvdmlkZXJzOiBbRG9nU2VydmljZV0sXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2RvZy1hZGQuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgRG9nQWRkQ29tcG9uZW50IHtcbiAgICBkb2c6IERvZztcblxuICAgIG5hbWUgPSAnJztcbiAgICBicmVlZCA9ICcnO1xuXG4gICAgc3VibWl0KCl7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLm5hbWUgKyBcIiB0aGUgXCIgKyB0aGlzLmJyZWVkICk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgZG9nU2VydmljZTogRG9nU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgICApIHsgfVxuXG4gfVxuIl19