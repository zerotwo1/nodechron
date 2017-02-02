"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var page_routing_module_1 = require('./page-routing.module');
var page_component_1 = require('./page.component');
var shared_module_1 = require('../shared/shared.module');
var name_list_service_1 = require('../shared/name-list/name-list.service');
var PageModule = (function () {
    function PageModule() {
    }
    PageModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                page_routing_module_1.PageRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [page_component_1.PageComponent],
            exports: [page_component_1.PageComponent],
            providers: [name_list_service_1.NameListService]
        }), 
        __metadata('design:paramtypes', [])
    ], PageModule);
    return PageModule;
}());
exports.PageModule = PageModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlL3BhZ2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0Msb0NBQWtDLHVCQUF1QixDQUFDLENBQUE7QUFDMUQsK0JBQThCLGtCQUFrQixDQUFDLENBQUE7QUFDakQsOEJBQTZCLHlCQUF5QixDQUFDLENBQUE7QUFDdkQsa0NBQWdDLHVDQUF1QyxDQUFDLENBQUE7QUFZeEU7SUFBQTtJQUEwQixDQUFDO0lBVjNCO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLHFCQUFZO2dCQUNaLHVDQUFpQjtnQkFDakIsNEJBQVk7YUFDYjtZQUNELFlBQVksRUFBRSxDQUFDLDhCQUFhLENBQUM7WUFDN0IsT0FBTyxFQUFFLENBQUMsOEJBQWEsQ0FBQztZQUN4QixTQUFTLEVBQUUsQ0FBQyxtQ0FBZSxDQUFDO1NBQzdCLENBQUM7O2tCQUFBO0lBQ3dCLGlCQUFDO0FBQUQsQ0FBMUIsQUFBMkIsSUFBQTtBQUFkLGtCQUFVLGFBQUksQ0FBQSIsImZpbGUiOiJhcHAvcGFnZS9wYWdlLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUGFnZVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL3BhZ2Utcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgTmFtZUxpc3RTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL25hbWUtbGlzdC9uYW1lLWxpc3Quc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUGFnZVJvdXRpbmdNb2R1bGUsXG4gICAgU2hhcmVkTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1BhZ2VDb21wb25lbnRdLFxuICBleHBvcnRzOiBbUGFnZUNvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW05hbWVMaXN0U2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgUGFnZU1vZHVsZSB7IH1cblxuIl19
