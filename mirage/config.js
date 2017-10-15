export default function() {
    this.namespace = 'api';
    //this.get('/employees', function(schema, request) {
    //    //console.log(schema.employees.all())
    //    return schema.employees.all();
    //});
    this.get('/employees');

    // this.get('/employees/:id', 'employees');    
    this.get('/employees/:id');    
    this.get('/settings')
}
