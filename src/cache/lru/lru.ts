import {CacheEngine} from "../interface";
import {LinkedList} from "@base_structures";

export default class LRU implements CacheEngine {
    #store: Map<string, any> = new Map();
    #history: LinkedList<string> = new LinkedList();
    readonly size: number;

    constructor(size = 100) {
        this.size = size;
    }

    get(key: string): any | undefined {
        const value = this.#store.get(key);
        if (value !== undefined) {
            this.#moveToEnd(key);
        }
        return value;
    }

    set(key: string, value: any): void {
        if (!this.#store.has(key)) {
            this.#history.add(key);
        }
        this.#store.set(key, value);

        if (this.#store.size > this.size && this.#history.first !== null) {
            this.#store.delete(this.#history.first.value)
            this.#history.delete(this.#history.first);
        }
    }

    delete(key: string): boolean {
        const deleted = this.#store.delete(key);
        if (deleted) {
            this.#history.delete(key);
        }
        return deleted;
    }

    clear() {
        this.#store.clear();
        this.#history = new LinkedList();
    }

    #moveToEnd(value: string): void {
        if (value === this.#history.last?.value) {
            return;
        }
        const el = this.#history.find(value);
        if (el !== null) {
            this.#history.delete(el);
            this.#history.add(value)
        }
    }
}