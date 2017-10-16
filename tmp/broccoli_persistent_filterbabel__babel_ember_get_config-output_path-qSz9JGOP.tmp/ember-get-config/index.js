define('ember-get-config/index', ['exports', 'capco-contacts-manager/config/environment'], function (exports, _capcoContactsManagerConfigEnvironment) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _capcoContactsManagerConfigEnvironment['default'];
    }
  });
});