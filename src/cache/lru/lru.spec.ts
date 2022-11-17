import assert from 'assert';
import { LRU } from './';

const simpleCache = (size: number) => {
    const cache = new LRU(size);
    for (let i = 1; i <= size; i++) {
        cache.set(i.toString(), i);
    }
    return cache;
}

describe("Cache/LRU", function () {

    it("Create", function () {
        const cache = new LRU();
        assert.strictEqual(cache instanceof LRU, true);
        assert.strictEqual(cache.size, 100);

        const cache2 = new LRU(10);
        assert.strictEqual(cache2.size, 10);
    });

    it("Set/Get", function () {
        const cache = simpleCache(5);
        for (let i = 1; i <= 5; i++) {
            assert.strictEqual(cache.get(i.toString()), i);
        }
    });

    it("Clear", function () {
        const cache = simpleCache(5);
        cache.clear();
        for (let i = 1; i <= 5; i++) {
            assert.strictEqual(cache.get(i.toString()), undefined);
        }
    });

    it("Delete", function () {
        const cache = simpleCache(5);
        cache.delete('3');
        for (let i = 1; i <= 5; i++) {
            assert.strictEqual(cache.get(i.toString()), i === 3 ? undefined : i);
        }
    });

    it("Working process", function () {
        const cache = simpleCache(5);

        cache.set('6', 6);
        assert.strictEqual(cache.get('1'), undefined);

        assert.strictEqual(cache.get('2'), 2);

        cache.set('7', 7);
        assert.strictEqual(cache.get('3'), undefined);
    });
});
