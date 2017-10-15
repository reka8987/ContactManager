import Route from '@ember/routing/route';

export default Route.extend({
    model: function(params) {
        let empObj = {};
        empObj = this.store.findRecord('employee',params.id);
        //console.log(JSON.stringify(empObj));
        return empObj;
    },

    actions: {
        editEmployee(id) {
            //alert(id);
            Ember.getOwner(this).lookup('router:main').transitionTo("/newemployee/"+id);
        }
    }
});
