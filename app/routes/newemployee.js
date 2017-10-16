import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        let empObj = {};
        //alert(params.id);
        if(params.id != 0){
            empObj = this.store.findRecord('employee',params.id);
        }
        return empObj;
    },

    actions: {
        saveEmployee() {
            let newemp = this.modelFor(this.routeName);
            //var self = this;
           // alert(newemp.id);
            Ember.getOwner(this).lookup('router:main').transitionTo("/");
            //newemp.save().then(function() {
            //    self.transitionTo('newemployee');
            //}).catch(function(reason) {
            //});
        },
        cancelEmployee(){
            Ember.getOwner(this).lookup('router:main').transitionTo("/");
        }
    }
});
