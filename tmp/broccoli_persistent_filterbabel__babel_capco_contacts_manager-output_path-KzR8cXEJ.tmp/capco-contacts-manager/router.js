define('capco-contacts-manager/router', ['exports', 'capco-contacts-manager/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var EmberRouter = Ember.Router;


  var Router = EmberRouter.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('employees', { path: '/' });
    this.route('newemployee', { path: '/newemployee/:id' });
    this.route('settings');
    this.route('details', { path: '/details/:id' });
  });

  exports.default = Router;
});