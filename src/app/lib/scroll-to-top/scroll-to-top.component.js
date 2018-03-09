var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var ScrollToTopComponent = (function () {
    function ScrollToTopComponent(document) {
        this.document = document;
    }
    ScrollToTopComponent.prototype.ngOnInit = function () { };
    ScrollToTopComponent.prototype.onWindowScroll = function () {
        if (window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop > 100) {
            this.navIsFixed = true;
        }
        else if ((this.navIsFixed && window.pageYOffset) ||
            document.documentElement.scrollTop ||
            document.body.scrollTop < 10) {
            this.navIsFixed = false;
        }
    };
    ScrollToTopComponent.prototype.scrollToTop = function () {
        (function smoothscroll() {
            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 0) {
                window.requestAnimationFrame(smoothscroll);
                window.scrollTo(0, currentScroll - currentScroll / 5);
            }
        })();
    };
    __decorate([
        core_1.HostListener('window:scroll', [])
    ], ScrollToTopComponent.prototype, "onWindowScroll");
    ScrollToTopComponent = __decorate([
        core_1.Component({
            selector: 'app-scroll-to-top',
            templateUrl: './scroll-to-top.component.html',
            styleUrls: ['./scroll-to-top.component.scss']
        }),
        __param(0, core_1.Inject(platform_browser_1.DOCUMENT))
    ], ScrollToTopComponent);
    return ScrollToTopComponent;
})();
exports.ScrollToTopComponent = ScrollToTopComponent;
//# sourceMappingURL=scroll-to-top.component.js.map