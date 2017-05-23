"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_service_1 = require("./user.service");
var UserComponent = (function () {
    function UserComponent(userService, route) {
        this.userService = userService;
        this.route = route;
    }
    UserComponent.prototype.login = function () {
        console.log(this.email + " the " + this.password);
    };
    UserComponent.prototype.register = function () {
        console.log(this.email + " the " + this.password);
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        selector: "ns-user",
        providers: [user_service_1.UserService],
        moduleId: module.id,
        templateUrl: "./user.component.html",
        styleUrls: ['user.component.css']
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.ActivatedRoute])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywwQ0FBaUQ7QUFHakQsK0NBQTZDO0FBUzdDLElBQWEsYUFBYTtJQWNwQix1QkFDVSxXQUF3QixFQUN4QixLQUFxQjtRQURyQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtJQUM3QixDQUFDO0lBWE4sNkJBQUssR0FBTDtRQUNHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBRSxDQUFDO0lBQ3JELENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFFLENBQUM7SUFDckQsQ0FBQztJQVFMLG9CQUFDO0FBQUQsQ0FBQyxBQXBCRCxJQW9CQztBQXBCWSxhQUFhO0lBUHpCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsU0FBUztRQUNuQixTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO1FBQ3hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsdUJBQXVCO1FBQ3BDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO0tBQ3BDLENBQUM7cUNBZ0IyQiwwQkFBVztRQUNqQix1QkFBYztHQWhCeEIsYUFBYSxDQW9CekI7QUFwQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL3VzZXInXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vdXNlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtdXNlclwiLFxuICAgIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXSxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vdXNlci5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWyd1c2VyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBVc2VyQ29tcG9uZW50IHtcbiAgdXNlcjogVXNlcjtcblxuICBlbWFpbDogJyc7XG4gIHBhc3N3b3JkOiAnJztcblxuICAgbG9naW4oKXtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZW1haWwgKyBcIiB0aGUgXCIgKyB0aGlzLnBhc3N3b3JkICk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIoKXtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZW1haWwgKyBcIiB0aGUgXCIgKyB0aGlzLnBhc3N3b3JkICk7XG4gICAgfVxuXG4gICAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICAgKSB7IH1cblxuXG59XG4iXX0=