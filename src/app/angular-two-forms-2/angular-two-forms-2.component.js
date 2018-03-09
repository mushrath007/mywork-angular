var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var AngularTwoForms2Component = (function () {
    function AngularTwoForms2Component(fb) {
        this.fb = fb;
        this.showInfo = true;
        this.createForm();
    }
    AngularTwoForms2Component.prototype.bye = function () {
        console.log('Bye');
        this.showInfo = true;
    };
    AngularTwoForms2Component.prototype.createForm = function () {
        this.addressForm = this.fb.group({
            address1: ['', forms_1.Validators.required],
            address2: ['', forms_1.Validators.required],
            city: ['', forms_1.Validators.required],
            zip: ['', forms_1.Validators.required],
            state: ['', forms_1.Validators.required]
        });
    };
    AngularTwoForms2Component.prototype.ngOnInit = function () {
        this.stateList = ['NJ', 'FL'];
    };
    AngularTwoForms2Component = __decorate([
        core_1.Component({
            selector: 'app-angular-two-forms-2',
            templateUrl: './angular-two-forms-2.component.html',
            styleUrls: ['./angular-two-forms-2.component.css']
        })
    ], AngularTwoForms2Component);
    return AngularTwoForms2Component;
})();
exports.AngularTwoForms2Component = AngularTwoForms2Component;
//# sourceMappingURL=angular-two-forms-2.component.js.map