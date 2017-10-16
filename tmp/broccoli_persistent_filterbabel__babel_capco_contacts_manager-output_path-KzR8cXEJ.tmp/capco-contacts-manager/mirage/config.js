define('capco-contacts-manager/mirage/config', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    exports.default = function () {
        this.namespace = 'api';
        //this.get('/employees', function(schema, request) {
        //    //console.log(schema.employees.all())
        //    return schema.employees.all();
        //});
        this.get('/employees');

        // this.get('/employees/:id', 'employees');    
        this.get('/employees/:id');
        this.get('/settings');
    };
});