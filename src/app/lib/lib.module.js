var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var image_component_1 = require('./image/image.component');
var scroll_to_top_component_1 = require('./scroll-to-top/scroll-to-top.component');
var tabs_component_1 = require('./tabs/tabs.component');
var tab_component_1 = require('./tab/tab.component');
var LibraryModule = (function () {
    function LibraryModule() {
    }
    LibraryModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                forms_1.FormsModule
            ],
            declarations: [
                image_component_1.ImageComponent,
                scroll_to_top_component_1.ScrollToTopComponent,
                tabs_component_1.TabsComponent,
                tab_component_1.TabComponent
            ],
            exports: [
                image_component_1.ImageComponent,
                scroll_to_top_component_1.ScrollToTopComponent,
                tabs_component_1.TabsComponent,
                tab_component_1.TabComponent
            ],
            providers: []
        })
    ], LibraryModule);
    return LibraryModule;
})();
exports.LibraryModule = LibraryModule;
//# sourceMappingURL=lib.module.js.map