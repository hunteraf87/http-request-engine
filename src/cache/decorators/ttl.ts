import {CacheEngine} from "@cache";

interface TTL {
    expired: Map<string, number>
}

export default function ttl<T extends CacheEngine>(cache: T, ms: number): T & TTL {

    const modifiedCache = Object.create(cache);

    modifiedCache.expired = new Map();

    modifiedCache.set = function (key: string, value: any): void {
        this.expired.set(key, new Date().getTime() + ms);
        this.__proto__.set(key, value);
    }

    modifiedCache.get = function (key: string): any {
        const timeExpired = this.expired.get(key);
        if (timeExpired !== undefined && timeExpired < new Date().getTime()) {
            this.__proto__.delete(key);
            this.expired.delete(key);
            return undefined;
        }

        return this.__proto__.get(key);
    }

    return modifiedCache;
}