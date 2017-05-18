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
        moduleId: module.id,
        templateUrl: "./dog-add.component.html",
    }),
    __metadata("design:paramtypes", [dog_service_1.DogService,
        router_1.ActivatedRoute])
], DogAddComponent);
exports.DogAddComponent = DogAddComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9nLWFkZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkb2ctYWRkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBaUQ7QUFHakQsNkNBQTJDO0FBTzNDLElBQWEsZUFBZTtJQVV4Qix5QkFDWSxVQUFzQixFQUN0QixLQUFxQjtRQURyQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBVGpDLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixVQUFLLEdBQUcsRUFBRSxDQUFDO0lBU1AsQ0FBQztJQVBMLGdDQUFNLEdBQU47UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQztJQUNqRCxDQUFDO0lBT0osc0JBQUM7QUFBRCxDQUFDLEFBZkYsSUFlRTtBQWZXLGVBQWU7SUFMM0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsMEJBQTBCO0tBQzFDLENBQUM7cUNBWTBCLHdCQUFVO1FBQ2YsdUJBQWM7R0FaeEIsZUFBZSxDQWUxQjtBQWZXLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IERvZyB9IGZyb20gXCIuL2RvZ1wiO1xuaW1wb3J0IHsgRG9nU2VydmljZSB9IGZyb20gXCIuL2RvZy5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWFkZFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9kb2ctYWRkLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIERvZ0FkZENvbXBvbmVudCB7XG4gICAgZG9nOiBEb2c7XG5cbiAgICBuYW1lID0gJyc7XG4gICAgYnJlZWQgPSAnJztcblxuICAgIHN1Ym1pdCgpe1xuICAgICAgY29uc29sZS5sb2codGhpcy5uYW1lICsgXCIgdGhlIFwiICsgdGhpcy5icmVlZCApO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGRvZ1NlcnZpY2U6IERvZ1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICAgKSB7IH1cblxuIH1cbiJdfQ==