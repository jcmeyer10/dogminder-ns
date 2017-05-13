"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dog_service_1 = require("./dog.service");
var DogDetailComponent = (function () {
    function DogDetailComponent(dogService, route) {
        this.dogService = dogService;
        this.route = route;
    }
    DogDetailComponent.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.params["id"];
        this.dog = this.dogService.getDog(id);
    };
    return DogDetailComponent;
}());
DogDetailComponent = __decorate([
    core_1.Component({
        selector: "ns-details",
        moduleId: module.id,
        templateUrl: "./dog-detail.component.html",
    }),
    __metadata("design:paramtypes", [dog_service_1.DogService,
        router_1.ActivatedRoute])
], DogDetailComponent);
exports.DogDetailComponent = DogDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9nLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkb2ctZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBaUQ7QUFHakQsNkNBQTJDO0FBTzNDLElBQWEsa0JBQWtCO0lBRzNCLDRCQUNZLFVBQXNCLEVBQ3RCLEtBQXFCO1FBRHJCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7SUFDN0IsQ0FBQztJQUVMLHFDQUFRLEdBQVI7UUFDSSxJQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFDTCx5QkFBQztBQUFELENBQUMsQUFaRCxJQVlDO0FBWlksa0JBQWtCO0lBTDlCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsWUFBWTtRQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLDZCQUE2QjtLQUM3QyxDQUFDO3FDQUswQix3QkFBVTtRQUNmLHVCQUFjO0dBTHhCLGtCQUFrQixDQVk5QjtBQVpZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBEb2cgfSBmcm9tIFwiLi9kb2dcIjtcbmltcG9ydCB7IERvZ1NlcnZpY2UgfSBmcm9tIFwiLi9kb2cuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1kZXRhaWxzXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2RvZy1kZXRhaWwuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgRG9nRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBkb2c6IERvZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGRvZ1NlcnZpY2U6IERvZ1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBjb25zdCBpZCA9ICt0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcImlkXCJdO1xuICAgICAgICB0aGlzLmRvZyA9IHRoaXMuZG9nU2VydmljZS5nZXREb2coaWQpO1xuICAgIH1cbn1cbiJdfQ==