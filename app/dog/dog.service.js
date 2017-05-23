"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dog_1 = require("./dog");
var DogService = (function () {
    function DogService() {
        this.dogs = new Array({ id: 1, name: "Rupert", breed: "Goldendoodle" }, { id: 2, name: "Gracie", breed: "Goldendoodle" }, { id: 3, name: "Big Ralph", breed: "Goldendoodle" });
    }
    DogService.prototype.getDogs = function () {
        return this.dogs;
    };
    DogService.prototype.getDog = function (id) {
        console.table(dog_1.Dog.name[1]);
        return this.dogs.filter(function (dog) { return dog.id === id; })[0];
    };
    return DogService;
}());
DogService = __decorate([
    core_1.Injectable()
], DogService);
exports.DogService = DogService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyw2QkFBNEI7QUFHNUIsSUFBYSxVQUFVO0lBRHZCO1FBRVksU0FBSSxHQUFHLElBQUksS0FBSyxDQUNwQixFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLEVBQ2hELEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsRUFDaEQsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxDQUN0RCxDQUFDO0lBVU4sQ0FBQztJQVJHLDRCQUFPLEdBQVA7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQsMkJBQU0sR0FBTixVQUFPLEVBQVU7UUFDYixPQUFPLENBQUMsS0FBSyxDQUFDLFNBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBYixDQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDLEFBZkQsSUFlQztBQWZZLFVBQVU7SUFEdEIsaUJBQVUsRUFBRTtHQUNBLFVBQVUsQ0FldEI7QUFmWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBEb2cgfSBmcm9tIFwiLi9kb2dcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERvZ1NlcnZpY2Uge1xuICAgIHByaXZhdGUgZG9ncyA9IG5ldyBBcnJheTxEb2c+KFxuICAgICAgICB7IGlkOiAxLCBuYW1lOiBcIlJ1cGVydFwiLCBicmVlZDogXCJHb2xkZW5kb29kbGVcIiB9LFxuICAgICAgICB7IGlkOiAyLCBuYW1lOiBcIkdyYWNpZVwiLCBicmVlZDogXCJHb2xkZW5kb29kbGVcIiB9LFxuICAgICAgICB7IGlkOiAzLCBuYW1lOiBcIkJpZyBSYWxwaFwiLCBicmVlZDogXCJHb2xkZW5kb29kbGVcIiB9LFxuICAgICk7XG5cbiAgICBnZXREb2dzKCk6IERvZ1tdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9ncztcbiAgICB9XG5cbiAgICBnZXREb2coaWQ6IG51bWJlcik6IERvZyB7XG4gICAgICAgIGNvbnNvbGUudGFibGUoRG9nLm5hbWVbMV0pXG4gICAgICAgIHJldHVybiB0aGlzLmRvZ3MuZmlsdGVyKGRvZyA9PiBkb2cuaWQgPT09IGlkKVswXTtcbiAgICB9XG59XG4iXX0=