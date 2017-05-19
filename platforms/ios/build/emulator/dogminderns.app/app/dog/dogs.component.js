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
    };
    return DogsComponent;
}());
DogsComponent = __decorate([
    core_1.Component({
        selector: "ns-dogs",
        moduleId: module.id,
        templateUrl: "./dogs.component.html",
    }),
    __metadata("design:paramtypes", [dog_service_1.DogService])
], DogsComponent);
exports.DogsComponent = DogsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9ncy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkb2dzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUdsRCw2Q0FBMkM7QUFPM0MsSUFBYSxhQUFhO0lBR3RCLHVCQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQUksQ0FBQztJQUUvQyxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUFSRCxJQVFDO0FBUlksYUFBYTtJQUx6QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFNBQVM7UUFDbkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSx1QkFBdUI7S0FDdkMsQ0FBQztxQ0FJa0Msd0JBQVU7R0FIakMsYUFBYSxDQVF6QjtBQVJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBEb2cgfSBmcm9tIFwiLi9kb2dcIjtcbmltcG9ydCB7IERvZ1NlcnZpY2UgfSBmcm9tIFwiLi9kb2cuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1kb2dzXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2RvZ3MuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgRG9nc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgZG9nczogRG9nW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRvZ1NlcnZpY2U6IERvZ1NlcnZpY2UpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZG9ncyA9IHRoaXMuZG9nU2VydmljZS5nZXREb2dzKCk7XG4gICAgfVxufVxuIl19