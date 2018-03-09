var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var TabComponent = (function () {
    function TabComponent() {
        this.active = false;
    }
    TabComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input()
    ], TabComponent.prototype, "title");
    __decorate([
        core_1.Input()
    ], TabComponent.prototype, "active");
    TabComponent = __decorate([
        core_1.Component({
            selector: 'app-tab',
            templateUrl: './tab.component.html',
            styleUrls: ['./tab.component.scss']
        })
    ], TabComponent);
    return TabComponent;
})();
exports.TabComponent = TabComponent;
//# sourceMappingURL=tab.component.js.map