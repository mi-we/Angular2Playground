/// <reference path="typings/angular2/angular2.d.ts" />
if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var FriendService = (function () {
    function FriendService() {
        this.names = ["Paul", "Gene", "Ace", "Peter"];
    }
    return FriendService;
})();
var DisplayComponent = (function () {
    function DisplayComponent(friendService) {
        this.myName = "Michael";
        this.names = friendService.names;
    }
    DisplayComponent = __decorate([
        angular2_1.Component({
            selector: 'display',
            injectables: [FriendService]
        }),
        angular2_1.View({
            template: "\n    <p>My name: {{ myName }}</p>\n    <p>Friends:</p>\n    <ul>\n        <li *for=\"#name of names\">{{ name }}</li>\n    </ul>\n    <p *if=\"names.length > 3\">You have many friends!</p>\n    <input #textfield (keyup) />\n    <p>{{ textfield.value }}</p>\n    ",
            directives: [angular2_1.For, angular2_1.If]
        }), 
        __metadata('design:paramtypes', [FriendService])
    ], DisplayComponent);
    return DisplayComponent;
})();
angular2_1.bootstrap(DisplayComponent);
