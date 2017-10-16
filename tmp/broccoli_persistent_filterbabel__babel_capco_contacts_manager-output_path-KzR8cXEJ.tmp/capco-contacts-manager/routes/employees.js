define('capco-contacts-manager/routes/employees', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Route = Ember.Route;
    exports.default = Route.extend({
        model: function model() {
            return this.store.findAll('employee');
        },
        actions: {
            showEmployee: function showEmployee(id) {
                // alert(employee.id)
                Ember.getOwner(this).lookup('router:main').transitionTo("/details/" + id);
            },
            newemployee: function newemployee() {
                Ember.getOwner(this).lookup('router:main').transitionTo("/newemployee/0");
            }
        }
    });
});