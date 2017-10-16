define('capco-contacts-manager/routes/newemployee', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Route = Ember.Route;
    exports.default = Route.extend({
        model: function model(params) {
            var empObj = {};
            //alert(params.id);
            if (params.id != 0) {
                empObj = this.store.findRecord('employee', params.id);
            }
            return empObj;
        },


        actions: {
            saveEmployee: function saveEmployee() {
                //let newemp = this.modelFor(this.routeName);
                //var self = this;
                // alert(newemp.id);
                Ember.getOwner(this).lookup('router:main').transitionTo("/");
                //newemp.save().then(function() {
                //    self.transitionTo('newemployee');
                //}).catch(function(reason) {
                //});
            },
            cancelEmployee: function cancelEmployee() {
                Ember.getOwner(this).lookup('router:main').transitionTo("/");
            }
        }
    });
});