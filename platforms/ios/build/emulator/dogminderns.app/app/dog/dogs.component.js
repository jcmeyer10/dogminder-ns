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
        selector: "ns-items",
        moduleId: module.id,
        templateUrl: "./dogs.component.html",
    }),
    __metadata("design:paramtypes", [dog_service_1.DogService])
], DogsComponent);
exports.DogsComponent = DogsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9ncy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkb2dzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUdsRCw2Q0FBMkM7QUFPM0MsSUFBYSxhQUFhO0lBR3RCLHVCQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQUksQ0FBQztJQUUvQyxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUFSRCxJQVFDO0FBUlksYUFBYTtJQUx6QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSx1QkFBdUI7S0FDdkMsQ0FBQztxQ0FJa0Msd0JBQVU7R0FIakMsYUFBYSxDQVF6QjtBQVJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBEb2cgfSBmcm9tIFwiLi9kb2dcIjtcbmltcG9ydCB7IERvZ1NlcnZpY2UgfSBmcm9tIFwiLi9kb2cuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9kb2dzLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIERvZ3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGRvZ3M6IERvZ1tdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkb2dTZXJ2aWNlOiBEb2dTZXJ2aWNlKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRvZ3MgPSB0aGlzLmRvZ1NlcnZpY2UuZ2V0RG9ncygpO1xuICAgIH1cbn1cbiJdfQ==