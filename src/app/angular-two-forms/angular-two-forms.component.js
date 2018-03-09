var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var AngularTwoFormsComponent = (function () {
    function AngularTwoFormsComponent(fb) {
        this.fb = fb;
        this.showForm = true;
        this.loadComponent = false;
        this.createForm();
    }
    AngularTwoFormsComponent.prototype.loadMyChildComponent = function () {
        console.log('here 11');
        this.loadComponent = true;
    };
    AngularTwoFormsComponent.prototype.bye = function () {
        console.log('Bye');
        this.showForm = false;
    };
    AngularTwoFormsComponent.prototype.createForm = function () {
        this.basicForm = this.fb.group({
            firstName: ['', forms_1.Validators.required],
            LastName: ['', forms_1.Validators.required],
            phoneNumber: [''],
            email: ['', forms_1.Validators.required],
            gender: ['', forms_1.Validators.required]
        });
    };
    AngularTwoFormsComponent.prototype.ngOnInit = function () {
        this.genderList = ['Male', 'Female'];
    };
    AngularTwoFormsComponent = __decorate([
        core_1.Component({
            selector: 'app-angular-two-forms',
            templateUrl: './angular-two-forms.component.html',
            styleUrls: ['./angular-two-forms.component.css']
        })
    ], AngularTwoFormsComponent);
    return AngularTwoFormsComponent;
})();
exports.AngularTwoFormsComponent = AngularTwoFormsComponent;
//# sourceMappingURL=angular-two-forms.component.js.map