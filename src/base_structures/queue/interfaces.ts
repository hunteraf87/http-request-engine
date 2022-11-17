export interface SimpleQueue<T> {
    get head(): T | null;
    values(): IterableIterator<T>;

    push(value: T): void;
    shift(): T;
    isEmpty(): boolean;
}

export interface DoubleQueue<T> extends SimpleQueue<T>{
    get back(): T | null;

    pop(): T;
    unshift(value: T): void;
}