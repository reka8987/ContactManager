"use strict";



define('capco-contacts-manager/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.JSONAPIAdapter.extend({
        namespace: 'api'
    });
});
define('capco-contacts-manager/app', ['exports', 'capco-contacts-manager/resolver', 'ember-load-initializers', 'capco-contacts-manager/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Application = Ember.Application;


  var App = Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('capco-contacts-manager/components/employee-list', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = Ember.Component;
  exports.default = Component.extend({});
});
define('capco-contacts-manager/components/employees-list', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = Ember.Component;
  exports.default = Component.extend({});
});
define('capco-contacts-manager/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('capco-contacts-manager/helpers/app-version', ['exports', 'capco-contacts-manager/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('capco-contacts-manager/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('capco-contacts-manager/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('capco-contacts-manager/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'capco-contacts-manager/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _config$APP = _environment.default.APP,
      name = _config$APP.name,
      version = _config$APP.version;
  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('capco-contacts-manager/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('capco-contacts-manager/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('capco-contacts-manager/initializers/ember-cli-mirage', ['exports', 'ember-cli-mirage/utils/read-modules', 'capco-contacts-manager/config/environment', 'capco-contacts-manager/mirage/config', 'ember-cli-mirage/server', 'lodash/assign'], function (exports, _readModules, _environment, _config, _server, _assign2) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.startMirage = startMirage;
  var getWithDefault = Ember.getWithDefault;
  exports.default = {
    name: 'ember-cli-mirage',
    initialize: function initialize(application) {
      if (arguments.length > 1) {
        // Ember < 2.1
        var container = arguments[0],
            application = arguments[1];
      }

      if (_shouldUseMirage(_environment.default.environment, _environment.default['ember-cli-mirage'])) {
        startMirage(_environment.default);
      }
    }
  };
  function startMirage() {
    var env = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _environment.default;

    var environment = env.environment;
    var discoverEmberDataModels = getWithDefault(env['ember-cli-mirage'] || {}, 'discoverEmberDataModels', true);
    var modules = (0, _readModules.default)(env.modulePrefix);
    var options = (0, _assign2.default)(modules, { environment: environment, baseConfig: _config.default, testConfig: _config.testConfig, discoverEmberDataModels: discoverEmberDataModels });

    return new _server.default(options);
  }

  function _shouldUseMirage(env, addonConfig) {
    if (typeof FastBoot !== 'undefined') {
      return false;
    }
    var userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';
    var defaultEnabled = _defaultEnabled(env, addonConfig);

    return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
  }

  /*
    Returns a boolean specifying the default behavior for whether
    to initialize Mirage.
  */
  function _defaultEnabled(env, addonConfig) {
    var usingInDev = env === 'development' && !addonConfig.usingProxy;
    var usingInTest = env === 'test';

    return usingInDev || usingInTest;
  }
});
define('capco-contacts-manager/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('capco-contacts-manager/initializers/export-application-global', ['exports', 'capco-contacts-manager/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('capco-contacts-manager/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('capco-contacts-manager/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('capco-contacts-manager/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("capco-contacts-manager/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
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
define('capco-contacts-manager/mirage/fixtures/employees', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = [{
        id: 1, empid: 100, first: 'John', last: 'Player', email: 'john@capco.com', telephone: '4161231234', dept: 'Development'
    }, {
        id: 2, empid: 101, first: 'Brad', last: 'Pitt', email: 'brad@capco.com', telephone: '4161231234', dept: 'Development'
    }, {
        id: 3, empid: 102, first: 'James', last: 'Bond', email: 'james@capco.com', telephone: '4161231234', dept: 'Development'
    }, {
        id: 4, empid: 103, first: 'Jack', last: 'Jones', email: 'jack@capco.com', telephone: '4161231234', dept: 'Development'
    }, {
        id: 5, empid: 104, first: 'Paul', last: 'Walker', email: 'paul@capco.com', telephone: '4161231234', dept: 'Development'
    }];
});
define('capco-contacts-manager/mirage/fixtures/settings', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = [{ id: 1, name: 'Salary', description: 'Employee Salary' }, { id: 2, name: 'Role', description: 'Employee Role' }, { id: 3, name: 'Department', description: 'Employee Department' }, { id: 4, name: 'Age', description: 'Employee Age' }, { id: 5, name: 'Gender', description: 'Employee Gender' }];
});
define('capco-contacts-manager/mirage/models/employee', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberCliMirage.Model.extend({});
});
define('capco-contacts-manager/mirage/serializers/application', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberCliMirage.ActiveModelSerializer.extend({});
});
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
define('capco-contacts-manager/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
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
define('capco-contacts-manager/routes/details', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Route = Ember.Route;
    exports.default = Route.extend({
        model: function model(params) {
            var empObj = {};
            empObj = this.store.findRecord('employee', params.id);
            //console.log(JSON.stringify(empObj));
            return empObj;
        },

        actions: {
            editEmployee: function editEmployee(id) {
                //alert(id);
                Ember.getOwner(this).lookup('router:main').transitionTo("/newemployee/" + id);
            }
        }
    });
});
define('capco-contacts-manager/routes/employees', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Route = Ember.Route;
    exports.default = Route.extend({
        model: function model() {
            return this.store.findAll('employee');
        },
        actions: {
            showEmployee: function showEmployee(id) {
                // alert(employee.id)
                Ember.getOwner(this).lookup('router:main').transitionTo("/details/" + id);
            },
            newemployee: function newemployee() {
                Ember.getOwner(this).lookup('router:main').transitionTo("/newemployee/0");
            }
        }
    });
});
define('capco-contacts-manager/routes/newemployee', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Route = Ember.Route;
    exports.default = Route.extend({
        model: function model(params) {
            var empObj = {};
            //alert(params.id);
            if (params.id != 0) {
                empObj = this.store.findRecord('employee', params.id);
            }
            return empObj;
        },


        actions: {
            saveEmployee: function saveEmployee() {
                //let newemp = this.modelFor(this.routeName);
                //var self = this;
                // alert(newemp.id);
                Ember.getOwner(this).lookup('router:main').transitionTo("/");
                //newemp.save().then(function() {
                //    self.transitionTo('newemployee');
                //}).catch(function(reason) {
                //});
            },
            cancelEmployee: function cancelEmployee() {
                Ember.getOwner(this).lookup('router:main').transitionTo("/");
            }
        }
    });
});
define('capco-contacts-manager/routes/settings', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Route = Ember.Route;
    exports.default = Route.extend({
        model: function model() {
            return this.store.findAll('setting');
        }
    });
});
define('capco-contacts-manager/serializers/application', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.RESTSerializer.extend({
    primaryKey: 'id'
  });
});
define('capco-contacts-manager/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define("capco-contacts-manager/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Gds2S43c", "block": "{\"symbols\":[],\"statements\":[[6,\"h1\"],[7],[0,\"Capco Contacts Manager\"],[8],[0,\"\\n\\n\"],[6,\"nav\"],[9,\"class\",\"navTab\"],[7],[0,\"\\n    \"],[6,\"a\"],[9,\"href\",\"/\"],[9,\"onclick\",\"this.class=active\"],[9,\"class\",\"active\"],[7],[0,\"\\n        \"],[6,\"div\"],[7],[0,\"Employees\"],[8],[0,\"\\n    \"],[8],[0,\"  \\n   \"],[6,\"a\"],[9,\"href\",\"/settings\"],[9,\"onclick\",\"this.class=active\"],[9,\"class\",\"anc\"],[7],[0,\"\\n    \"],[6,\"div\"],[7],[0,\"Settings\"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[6,\"script\"],[7],[0,\"\\n\\n\"],[8],[0,\"\\n\\n\"],[1,[18,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "capco-contacts-manager/templates/application.hbs" } });
});
define("capco-contacts-manager/templates/components/employee-list", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "mLifrbNw", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1]],\"hasEval\":false}", "meta": { "moduleName": "capco-contacts-manager/templates/components/employee-list.hbs" } });
});
define("capco-contacts-manager/templates/components/employees-list", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "aQnwZ/Aq", "block": "{\"symbols\":[\"employee\"],\"statements\":[[6,\"h2\"],[7],[1,[18,\"title\"],false],[8],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"table\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"row tableHeader\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col id\"],[7],[0,\"Employee ID\"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col first\"],[7],[0,\"First Name\"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col last\"],[7],[0,\"Last Name\"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col email\"],[7],[0,\"Email\"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"],[4,\"each\",[[19,0,[\"employees\"]]],null,{\"statements\":[[0,\"    \"],[6,\"div\"],[9,\"class\",\"row\"],[3,\"action\",[[19,0,[]],\"showEmployee\",[19,1,[]]]],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col id\"],[7],[1,[19,1,[\"empid\"]],false],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col first\"],[7],[1,[19,1,[\"first\"]],false],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col last\"],[7],[1,[19,1,[\"last\"]],false],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col email\"],[7],[1,[19,1,[\"email\"]],false],[8],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[8],[0,\"\\n\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "capco-contacts-manager/templates/components/employees-list.hbs" } });
});
define("capco-contacts-manager/templates/details", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "b9eTpgWo", "block": "{\"symbols\":[],\"statements\":[[6,\"h3\"],[7],[0,\"Employee Detail\"],[8],[0,\"\\n\\n\"],[6,\"section\"],[9,\"class\",\"empDetails\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col\"],[7],[0,\"Name:\"],[8],[0,\" \"],[6,\"div\"],[9,\"class\",\"col\"],[7],[1,[20,[\"model\",\"first\"]],false],[0,\" \"],[1,[20,[\"model\",\"last\"]],false],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col\"],[7],[0,\"Email:\"],[8],[0,\" \"],[6,\"div\"],[9,\"class\",\"col\"],[7],[1,[20,[\"model\",\"email\"]],false],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col\"],[7],[0,\"Tel:\"],[8],[0,\" \"],[6,\"div\"],[9,\"class\",\"col\"],[7],[1,[20,[\"model\",\"telephone\"]],false],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col\"],[7],[0,\"Department:\"],[8],[0,\" \"],[6,\"div\"],[9,\"class\",\"col\"],[7],[1,[20,[\"model\",\"dept\"]],false],[8],[0,\"\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"col-sm-offset-2 col-sm-10\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"class\",\"btn btn-sm btn-primary\"],[3,\"action\",[[19,0,[]],\"editEmployee\",[19,0,[\"model\",\"id\"]]]],[7],[0,\"Edit\"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "capco-contacts-manager/templates/details.hbs" } });
});
define("capco-contacts-manager/templates/employees", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "uxccdG3b", "block": "{\"symbols\":[\"employee\"],\"statements\":[[6,\"h2\"],[7],[1,[18,\"title\"],false],[8],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"table\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"row tableHeader\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col id\"],[7],[0,\"Employee ID\"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col first\"],[7],[0,\"First Name\"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col last\"],[7],[0,\"Last Name\"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col email\"],[7],[0,\"Email\"],[8],[0,\"\\n    \"],[8],[0,\"\\n   \\n\"],[4,\"each\",[[19,0,[\"model\"]]],null,{\"statements\":[[0,\"    \"],[6,\"div\"],[9,\"class\",\"row\"],[3,\"action\",[[19,0,[]],\"showEmployee\",[19,1,[\"id\"]]]],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col id\"],[7],[1,[19,1,[\"empid\"]],false],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col first\"],[7],[1,[19,1,[\"first\"]],false],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col last\"],[7],[1,[19,1,[\"last\"]],false],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col email\"],[7],[1,[19,1,[\"email\"]],false],[8],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[8],[0,\"\\n\"],[6,\"section\"],[9,\"class\",\"bottom\"],[7],[0,\"\\n    \"],[6,\"a\"],[9,\"class\",\"button btn\"],[3,\"action\",[[19,0,[]],\"newemployee\"]],[7],[0,\"\\n    Add New Employee\\n    \"],[8],[0,\"\\n\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "capco-contacts-manager/templates/employees.hbs" } });
});
define("capco-contacts-manager/templates/newemployee", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "i87tmUzE", "block": "{\"symbols\":[],\"statements\":[[6,\"form\"],[7],[0,\"\\n\"],[4,\"if\",[[19,0,[\"model\",\"first\"]]],null,{\"statements\":[[0,\"        \"],[6,\"h3\"],[7],[0,\"Edit Employee\"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[6,\"h3\"],[7],[0,\"Employee Add\"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n            \"],[6,\"label\"],[9,\"for\",\"first\"],[9,\"class\",\"col\"],[7],[0,\"First Name\"],[8],[0,\"\\n             \"],[6,\"div\"],[9,\"class\",\"col\"],[7],[0,\"\\n                \"],[1,[25,\"input\",null,[[\"value\",\"class\"],[[19,0,[\"model\",\"first\"]],\"form-control\"]]],false],[0,\"\\n            \"],[8],[0,\"\\n            \"],[6,\"label\"],[9,\"for\",\"last\"],[9,\"class\",\"col\"],[7],[0,\"Last Name\"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"col\"],[7],[0,\"\\n                \"],[1,[25,\"input\",null,[[\"value\",\"class\"],[[19,0,[\"model\",\"last\"]],\"form-control\"]]],false],[0,\"\\n            \"],[8],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n            \"],[6,\"label\"],[9,\"for\",\"email\"],[9,\"class\",\"col\"],[7],[0,\"Email\"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"col\"],[7],[0,\"\\n                \"],[1,[25,\"input\",null,[[\"value\",\"class\"],[[19,0,[\"model\",\"email\"]],\"form-control\"]]],false],[0,\"\\n            \"],[8],[0,\"\\n            \"],[6,\"label\"],[9,\"for\",\"last\"],[9,\"class\",\"col\"],[7],[0,\"Telephone\"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"col\"],[7],[0,\"\\n                \"],[1,[25,\"input\",null,[[\"value\",\"class\"],[[19,0,[\"model\",\"telephone\"]],\"form-control\"]]],false],[0,\"\\n            \"],[8],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n            \"],[6,\"label\"],[9,\"for\",\"dept\"],[9,\"class\",\"col\"],[7],[0,\"Department\"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"col\"],[7],[0,\"\\n                \"],[1,[25,\"input\",null,[[\"value\",\"class\"],[[19,0,[\"model\",\"dept\"]],\"form-control\"]]],false],[0,\"\\n            \"],[8],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"bottom\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"col\"],[7],[0,\"\\n                \"],[6,\"a\"],[9,\"class\",\"button btn\"],[3,\"action\",[[19,0,[]],\"saveEmployee\"]],[7],[0,\"Save\"],[8],[0,\"\\n            \"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"col\"],[7],[0,\"\\n                \"],[6,\"a\"],[9,\"class\",\"button btn\"],[3,\"action\",[[19,0,[]],\"cancelEmployee\"]],[7],[0,\"Cancel\"],[8],[0,\"\\n            \"],[8],[0,\"\\n        \"],[8],[0,\"\\n\"],[8],[0,\" \"]],\"hasEval\":false}", "meta": { "moduleName": "capco-contacts-manager/templates/newemployee.hbs" } });
});
define("capco-contacts-manager/templates/settings", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "mO67/S1z", "block": "{\"symbols\":[\"setting\"],\"statements\":[[6,\"h2\"],[7],[0,\"Settings\"],[8],[0,\"\\n\"],[6,\"form\"],[7],[0,\"\\n    \"],[6,\"section\"],[7],[0,\"\\n\"],[4,\"each\",[[19,0,[\"model\"]]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[7],[0,\"\\n            \"],[1,[25,\"input\",null,[[\"type\"],[\"checkbox\"]]],false],[0,\" \"],[1,[19,1,[\"name\"]],false],[0,\"\\n\\n        \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"bottom\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col\"],[7],[0,\"\\n            \"],[6,\"button\"],[9,\"class\",\"button btn\"],[3,\"action\",[[19,0,[]],\"save\"]],[7],[0,\"Save\"],[8],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col\"],[7],[0,\"\\n            \"],[6,\"button\"],[9,\"class\",\"button btn\"],[3,\"action\",[[19,0,[]],\"cancel\"]],[7],[0,\"Cancel\"],[8],[0,\"\\n        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "capco-contacts-manager/templates/settings.hbs" } });
});
define('capco-contacts-manager/tests/mirage/mirage.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | mirage');

  QUnit.test('mirage/config.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/config.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/fixtures/employees.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/fixtures/employees.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/fixtures/settings.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/fixtures/settings.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/models/employee.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/models/employee.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/serializers/application.js should pass ESLint\n\n');
  });
});


define('capco-contacts-manager/config/environment', [], function() {
  var prefix = 'capco-contacts-manager';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("capco-contacts-manager/app")["default"].create({"name":"capco-contacts-manager","version":"0.0.0+a6700282"});
}
//# sourceMappingURL=capco-contacts-manager.map
