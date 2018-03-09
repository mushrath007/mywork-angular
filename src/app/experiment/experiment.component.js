var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ExperimentComponent = (function () {
    function ExperimentComponent() {
    }
    ExperimentComponent.prototype.refresh = function () {
        $("#os-phrases > h2").lettering('words').children("span").lettering().children("span").lettering();
    };
    ExperimentComponent.prototype.ngOnInit = function () {
        $("#os-phrases > h2").lettering('words').children("span").lettering().children("span").lettering();
    };
    ExperimentComponent.prototype.ngAfterViewChecked = function () {
    };
    ExperimentComponent = __decorate([
        core_1.Component({
            selector: 'app-experiment',
            templateUrl: './experiment.component.html',
            styleUrls: ['./experiment.component.css']
        })
    ], ExperimentComponent);
    return ExperimentComponent;
})();
exports.ExperimentComponent = ExperimentComponent;
//# sourceMappingURL=experiment.component.js.map