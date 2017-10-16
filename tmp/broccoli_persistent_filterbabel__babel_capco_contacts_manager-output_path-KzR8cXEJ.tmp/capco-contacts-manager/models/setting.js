define('capco-contacts-manager/models/setting', ['exports', 'ember-data', 'ember-data/attr'], function (exports, _emberData, _attr) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.Model.extend({
        name: (0, _attr.default)('string'),
        description: (0, _attr.default)('string')
    });
});