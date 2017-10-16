define('capco-contacts-manager/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/employee-list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/employee-list-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/employees-list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/employees-list-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/employee-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/employee-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/setting-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/setting-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/details-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/details-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/employees-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/employees-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/newemployee-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/newemployee-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/settings-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/settings-test.js should pass ESLint\n\n');
  });
});