import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('employees',{ path: '/' });
  this.route('newemployee',{ path: '/newemployee/:id'});
  this.route('settings');
  this.route('details',{ path: '/details/:id' });
});

export default Router;
