import DS from 'ember-data';
//import Model from 'ember-data/model';  
import attr from 'ember-data/attr';

//export default Model.extend({ 
    
//});
export default DS.Model.extend({
    empid: attr('number'),
    first: attr('string'),
    last: attr('string'),
    email: attr('string'),
    telephone: attr('string'),
    dept: attr('string')
});
