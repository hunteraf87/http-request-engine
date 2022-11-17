import {CacheEngine} from "../interface";
import {LinkedList} from "@base_structures";
import {SortKey} from "./interface";

export default class LFU implements CacheEngine {
    #store: Map<string, any> = new Map();
    #history: LinkedList<SortKey> = new LinkedList();
    readonly size: number;

    constructor(size = 100) {
        this.size = size;
    }

    get(key: string): any | undefined {
        const value = this.#store.get(key);
        if (value !== undefined) {
            this.#sortUp(key);
        }
        return value;
    }

    set(key: string, value: any): void {
        if (!this.#store.has(key)) {

            if (this.#store.size === this.size && this.#history.last !== null) {
                this.#store.delete(this.#history.last.value[1]);
                this.#history.delete(this.#history.last);
            }

            this.#history.add([1, key]);

        }

        this.#store.set(key, value);
    }

    delete(key: string): boolean {
        const deleted = this.#store.delete(key);
        if (deleted) {
            for (const item of this.#history.items()) {
                if (item.value[1] === key) {
                    this.#history.delete(item);
                    break;
                }
            }
        }
        return deleted;
    }

    clear() {
        this.#store.clear();
        this.#history = new LinkedList();
    }

    #sortUp(value: string): void {

        for (const item of this.#history.items()) {
            if (item.value[1] === value) {
                item.value[0]++;

                if (item.prev !== null && item.prev.value[0] < item.value[0]) {

                    const tmp: SortKey = [...item.prev.value];
                    item.prev.value = [...item.value];
                    item.value = tmp;

                }

                break;
            }
        }
    }
}