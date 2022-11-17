import assert from 'assert';
import { LFU } from './';

const simpleCache = (size: number) => {
    const cache = new LFU(size);
    for (let i = 1; i <= size; i++) {
        cache.set(i.toString(), i);
    }
    return cache;
}

describe("Cache/LFU", function () {

    it("Create", function () {
        const cache = new LFU();
        assert.strictEqual(cache instanceof LFU, true);
        assert.strictEqual(cache.size, 100);

        const cache2 = new LFU(10);
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
        assert.strictEqual(cache.get('5'), undefined);

        assert.strictEqual(cache.get('2'), 2);

        cache.set('7', 7);
        assert.strictEqual(cache.get('6'), undefined);

        cache.get('1')
        cache.get('2')
        cache.get('3')
        cache.get('7')

        cache.set('7', 7);
        assert.strictEqual(cache.get('7'), 7);

        cache.set('8', 8);
        assert.strictEqual(cache.get('4'), undefined);

    });
});
