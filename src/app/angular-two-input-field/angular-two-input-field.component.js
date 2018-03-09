var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var AngularTwoInputFieldComponent = (function () {
    function AngularTwoInputFieldComponent(fb) {
        this.fb = fb;
        this.sharedVarChange = new core_1.EventEmitter();
        this.loginForm = this.fb.group({
            email: ["", forms_1.Validators.required],
            password: ["", forms_1.Validators.required]
        });
    }
    AngularTwoInputFieldComponent.prototype.change = function (newValue) {
        console.log('newvalue', newValue);
        this.sharedVar = newValue;
        this.sharedVarChange.emit(newValue);
    };
    AngularTwoInputFieldComponent.prototype.doLogin = function (event) {
        console.log(event);
        console.log(this.loginForm.value);
    };
    AngularTwoInputFieldComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input()
    ], AngularTwoInputFieldComponent.prototype, "sharedVar");
    __decorate([
        core_1.Input()
    ], AngularTwoInputFieldComponent.prototype, "name");
    __decorate([
        core_1.Input()
    ], AngularTwoInputFieldComponent.prototype, "group");
    __decorate([
        core_1.Input()
    ], AngularTwoInputFieldComponent.prototype, "form");
    __decorate([
        core_1.Output()
    ], AngularTwoInputFieldComponent.prototype, "sharedVarChange");
    AngularTwoInputFieldComponent = __decorate([
        core_1.Component({
            selector: 'app-angular-two-input-field',
            templateUrl: './angular-two-input-field.component.html',
            styleUrls: ['./angular-two-input-field.component.css']
        })
    ], AngularTwoInputFieldComponent);
    return AngularTwoInputFieldComponent;
})();
exports.AngularTwoInputFieldComponent = AngularTwoInputFieldComponent;
//# sourceMappingURL=angular-two-input-field.component.js.map