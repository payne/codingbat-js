QUnit.test('makes10(9, 10) should return true', function (assert) {
    assert.equal(makes10(9, 10), true);
});

QUnit.test('makes10(9, 9) should return false', function (assert) {
    assert.equal(makes10(9, 9), false);
});

QUnit.test('makes10(1, 9) should return true', function (assert) {
    assert.equal(makes10(1, 9), true);
});

QUnit.test('makes10(10, 1) should return true', function (assert) {
    assert.equal(makes10(10, 1), true);
});

QUnit.test('makes10(10, 10) should return true', function (assert) {
    assert.equal(makes10(10, 10), true);
});

QUnit.test('makes10(8, 2) should return true', function (assert) {
    assert.equal(makes10(8, 2), true);
});

QUnit.test('makes10(8, 3) should return false', function (assert) {
    assert.equal(makes10(8, 3), false);
});

QUnit.test('makes10(10, 42) should return true', function (assert) {
    assert.equal(makes10(10, 42), true);
});

QUnit.test('makes10(12, -2) should return true', function (assert) {
    assert.equal(makes10(12, -2), true);
});
