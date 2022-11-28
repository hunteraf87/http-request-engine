import assert from 'assert';
import { mixin } from './mixin';

describe("Traits/mixin", function () {

    it("Create", function () {

       assert.deepEqual(mixin({a: {b: 1, c: 2}}, {a: {b: 42, e: 7}}, {j: 2}), {a: {b: 42, c: 2, e: 7}, j: 2});

    });

});
