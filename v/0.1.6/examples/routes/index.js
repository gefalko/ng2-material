var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var components_1 = require("../services/components");
var navigation_1 = require("../services/navigation");
var all_1 = require("ng2-material/all");
var router_1 = require("angular2/router");
var dom_adapter_1 = require("angular2/src/platform/dom/dom_adapter");
var highlight_1 = require("../highlight");
var IndexPage = (function () {
    function IndexPage(_components, navigation) {
        this._components = _components;
        this.navigation = navigation;
        this.components = [];
    }
    IndexPage.prototype.ngOnInit = function () {
        var _this = this;
        this._components.getComponents()
            .then(function (comps) {
            _this.components = comps;
            var title = 'Angular2 Material';
            dom_adapter_1.DOM.setTitle(title);
            _this.navigation.currentTitle = title;
            _this.navigation.prevLink = _this.navigation.componentLink(comps[comps.length - 1]);
            _this.navigation.nextLink = _this.navigation.componentLink(comps[0]);
        });
    };
    IndexPage = __decorate([
        core_1.Component({
            templateUrl: 'examples/routes/index.html',
            directives: [router_1.ROUTER_DIRECTIVES, highlight_1.Highlight, all_1.MATERIAL_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [components_1.ComponentsService, navigation_1.NavigationService])
    ], IndexPage);
    return IndexPage;
})();
exports.IndexPage = IndexPage;
//# sourceMappingURL=index.js.map