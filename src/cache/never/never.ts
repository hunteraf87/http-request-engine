import {CacheEngine} from "../interface";

export default class Never implements CacheEngine {
    get(key: string): undefined {
        return undefined;
    }

    set(key: string, value: any): void {
    }

    delete(key: string): boolean {
        return true;
    }

    clear(): void {
    }
}