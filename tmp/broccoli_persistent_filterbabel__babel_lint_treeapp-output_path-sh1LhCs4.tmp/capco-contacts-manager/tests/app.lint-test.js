define('capco-contacts-manager/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/employee-list.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/employee-list.js should pass ESLint\n\n');
  });

  QUnit.test('components/employees-list.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/employees-list.js should pass ESLint\n\n');
  });

  QUnit.test('models/employee.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/employee.js should pass ESLint\n\n');
  });

  QUnit.test('models/setting.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/setting.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/details.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/details.js should pass ESLint\n\n');
  });

  QUnit.test('routes/employees.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/employees.js should pass ESLint\n\n');
  });

  QUnit.test('routes/newemployee.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/newemployee.js should pass ESLint\n\n');
  });

  QUnit.test('routes/settings.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/settings.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass ESLint\n\n');
  });
});