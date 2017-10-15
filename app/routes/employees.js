import Route from '@ember/routing/route';
import Ember from 'ember';

//let emp = {"employees":[{"empid":"1","first":"John","last":"Player","email":"john@capco.com"},
//			{"empid":"2","first":"Peter","last":"Son","email":"peter@capco.com"},
//			{"empid":"3","first":"James","last":"L","email":"james@capco.com"},
//			{"empid":"4","first":"Cameron","last":"Dee","email":"cameron@capco.com"},
//			{"empid":"5","first":"Jane","last":"Thom","email":"janen@capco.com"}
//]};
	

export default Route.extend({
    model: function(params) {
        return this.store.findAll('employee');           
    },
    actions: {
        showEmployee(id){
           // alert(employee.id)
            Ember.getOwner(this).lookup('router:main').transitionTo("/details/"+id);
        },
        newemployee(){
            Ember.getOwner(this).lookup('router:main').transitionTo("/newemployee/0");
        }
    }
});

