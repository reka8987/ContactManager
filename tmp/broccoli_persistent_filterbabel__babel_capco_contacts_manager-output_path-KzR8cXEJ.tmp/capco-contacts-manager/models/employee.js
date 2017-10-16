define('capco-contacts-manager/models/employee', ['exports', 'ember-data', 'ember-data/attr'], function (exports, _emberData, _attr) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.Model.extend({
        empid: (0, _attr.default)('number'),
        first: (0, _attr.default)('string'),
        last: (0, _attr.default)('string'),
        email: (0, _attr.default)('string'),
        telephone: (0, _attr.default)('string'),
        dept: (0, _attr.default)('string')
    });
});