import assert from 'assert';
import { LRUCache } from '../';
import { ttl } from './';

const simpleCache = (size: number) => {
    const cache = new LRUCache(size);
    for (let i = 1; i <= size; i++) {
        cache.set(i.toString(), i);
    }
    return cache;
}

describe("Cache/TTL", function () {

    it("Working process", async function () {
        const cache = ttl(simpleCache(5), 100);

        cache.set('7', 7);

        assert.strictEqual(cache.get('7'), 7);

        await new Promise((resolve) => {
            setTimeout(() => {
                assert.strictEqual(cache.get('7'), undefined);
                resolve(undefined);
            }, 200);
        });

    });
});
