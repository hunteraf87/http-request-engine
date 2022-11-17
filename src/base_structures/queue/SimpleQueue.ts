import {ILinkedList, LinkedList} from "../linked-list";
import {SimpleQueue as AbstractSimpleQueue} from "./interfaces";

export default class SimpleQueue<T = unknown> implements AbstractSimpleQueue<T> {
    protected queue: ILinkedList<T>;

    constructor() {
        this.queue = new LinkedList<T>();
    }

    get head(): T | null {
        return this.queue.first?.value ?? null;
    }

    push(value: T): void {
        this.queue.add(value);
    }

    shift(): T {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }
        const first = this.queue.first!;
        const val = first.value;
        this.queue.delete(first);
        return val;
    }

    isEmpty(): boolean {
        return this.queue.isEmpty();
    }

    values(): IterableIterator<T> {
        const self = this.queue;

        function *generate() {
            for (let item of self.values()) {
                yield item;
            }
        }

        const iter = generate();
        return {
            [Symbol.iterator](): IterableIterator<T>{
                return this;
            },
            next(): IteratorResult<T> {
                return iter.next();
            }
        }
    }
}