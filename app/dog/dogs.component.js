"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dog_service_1 = require("./dog.service");
var DogsComponent = (function () {
    function DogsComponent(dogService) {
        this.dogService = dogService;
    }
    DogsComponent.prototype.onItemLoading = function (e) {
        console.log("woo");
    };
    DogsComponent.prototype.ngOnInit = function () {
        this.dogs = this.dogService.getDogs();
    };
    return DogsComponent;
}());
DogsComponent = __decorate([
    core_1.Component({
        selector: "ns-dogs",
        providers: [dog_service_1.DogService],
        moduleId: module.id,
        templateUrl: "./dogs.component.html",
    }),
    __metadata("design:paramtypes", [dog_service_1.DogService])
], DogsComponent);
exports.DogsComponent = DogsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9ncy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkb2dzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUdsRCw2Q0FBMkM7QUFRM0MsSUFBYSxhQUFhO0lBT3RCLHVCQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQUksQ0FBQztJQUovQyxxQ0FBYSxHQUFiLFVBQWMsQ0FBQztRQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUlELGdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQVpELElBWUM7QUFaWSxhQUFhO0lBTnpCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsU0FBUztRQUNuQixTQUFTLEVBQUUsQ0FBQyx3QkFBVSxDQUFDO1FBQ3ZCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsdUJBQXVCO0tBQ3ZDLENBQUM7cUNBUWtDLHdCQUFVO0dBUGpDLGFBQWEsQ0FZekI7QUFaWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgRG9nIH0gZnJvbSBcIi4vZG9nXCI7XG5pbXBvcnQgeyBEb2dTZXJ2aWNlIH0gZnJvbSBcIi4vZG9nLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtZG9nc1wiLFxuICAgIHByb3ZpZGVyczogW0RvZ1NlcnZpY2VdLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9kb2dzLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIERvZ3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGRvZ3M6IERvZ1tdO1xuXG4gICAgb25JdGVtTG9hZGluZyhlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwid29vXCIpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZG9nU2VydmljZTogRG9nU2VydmljZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kb2dzID0gdGhpcy5kb2dTZXJ2aWNlLmdldERvZ3MoKTtcbiAgICB9XG59XG4iXX0=