define('capco-contacts-manager/routes/details', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Route = Ember.Route;
    exports.default = Route.extend({
        model: function model(params) {
            var empObj = {};
            empObj = this.store.findRecord('employee', params.id);
            //console.log(JSON.stringify(empObj));
            return empObj;
        },

        actions: {
            editEmployee: function editEmployee(id) {
                //alert(id);
                Ember.getOwner(this).lookup('router:main').transitionTo("/newemployee/" + id);
            }
        }
    });
});