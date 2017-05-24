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
        this.dogs = this.dogService.getDog(id);
    };
    return DogDetailComponent;
}());
DogDetailComponent = __decorate([
    core_1.Component({
        selector: "ns-details",
        providers: [dog_service_1.DogService],
        moduleId: module.id,
        templateUrl: "./dog-detail.component.html",
    }),
    __metadata("design:paramtypes", [dog_service_1.DogService,
        router_1.ActivatedRoute])
], DogDetailComponent);
exports.DogDetailComponent = DogDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9nLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkb2ctZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBaUQ7QUFHakQsNkNBQTJDO0FBUTNDLElBQWEsa0JBQWtCO0lBRzNCLDRCQUNZLFVBQXNCLEVBQ3RCLEtBQXFCO1FBRHJCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7SUFDN0IsQ0FBQztJQUVMLHFDQUFRLEdBQVI7UUFDSSxJQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFDTCx5QkFBQztBQUFELENBQUMsQUFaRCxJQVlDO0FBWlksa0JBQWtCO0lBTjlCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsWUFBWTtRQUN0QixTQUFTLEVBQUUsQ0FBQyx3QkFBVSxDQUFDO1FBQ3ZCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsNkJBQTZCO0tBQzdDLENBQUM7cUNBSzBCLHdCQUFVO1FBQ2YsdUJBQWM7R0FMeEIsa0JBQWtCLENBWTlCO0FBWlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IERvZyB9IGZyb20gXCIuL2RvZ1wiO1xuaW1wb3J0IHsgRG9nU2VydmljZSB9IGZyb20gXCIuL2RvZy5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWRldGFpbHNcIixcbiAgICBwcm92aWRlcnM6IFtEb2dTZXJ2aWNlXSxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZG9nLWRldGFpbC5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBEb2dEZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGRvZ3M6IERvZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGRvZ1NlcnZpY2U6IERvZ1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBjb25zdCBpZCA9ICt0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcImlkXCJdO1xuICAgICAgICB0aGlzLmRvZ3MgPSB0aGlzLmRvZ1NlcnZpY2UuZ2V0RG9nKGlkKTtcbiAgICB9XG59XG5cbiJdfQ==