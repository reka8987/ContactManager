import DS from 'ember-data';

//export default DS.JSONSerializer;
export default DS.RESTSerializer.extend({
  primaryKey: 'id'
});


//export default DS.JSONAPISerializer.extend({
//    primaryKey: '_id',
//    serializeId: function(id) {
//      return id.toString();
//    }
//});