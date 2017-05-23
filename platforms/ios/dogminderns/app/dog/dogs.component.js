"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dog_service_1 = require("./dog.service");
var DogsComponent = (function () {
    function DogsComponent(dogService) {
        this.dogService = dogService;
    }
    DogsComponent.prototype.ngOnInit = function () {
        this.dogs = this.dogService.getDogs();
        console.table(this.dogs);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9ncy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkb2dzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUdsRCw2Q0FBMkM7QUFRM0MsSUFBYSxhQUFhO0lBR3RCLHVCQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQUksQ0FBQztJQUUvQyxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3RDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUFURCxJQVNDO0FBVFksYUFBYTtJQU56QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFNBQVM7UUFDbkIsU0FBUyxFQUFFLENBQUMsd0JBQVUsQ0FBQztRQUN2QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtLQUN2QyxDQUFDO3FDQUlrQyx3QkFBVTtHQUhqQyxhQUFhLENBU3pCO0FBVFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IERvZyB9IGZyb20gXCIuL2RvZ1wiO1xuaW1wb3J0IHsgRG9nU2VydmljZSB9IGZyb20gXCIuL2RvZy5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWRvZ3NcIixcbiAgICBwcm92aWRlcnM6IFtEb2dTZXJ2aWNlXSxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZG9ncy5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBEb2dzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBkb2dzOiBEb2dbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZG9nU2VydmljZTogRG9nU2VydmljZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kb2dzID0gdGhpcy5kb2dTZXJ2aWNlLmdldERvZ3MoKTtcbiAgICAgICAgY29uc29sZS50YWJsZSh0aGlzLmRvZ3MpO1xuICAgIH1cbn1cbiJdfQ==