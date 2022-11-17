import {DoubleQueue as AbstractDoubleQueue} from "./interfaces";
import {SimpleQueue} from "./";

export default class DoubleQueue<T = unknown> extends SimpleQueue<T> implements AbstractDoubleQueue<T> {
    constructor() {
        super();
    }

    get back(): T | null {
        return this.queue.last?.value ?? null;
    }

    unshift(value: T): void {
        if (this.isEmpty()) {
            this.queue.add(value);
        } else {
            this.queue.insertBefore(value, this.queue.first!);
        }
    }

    pop(): T {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }
        const last = this.queue.last!;
        const val = last.value;
        this.queue.delete(last);
        return val;
    }
}