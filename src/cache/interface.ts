export interface CacheEngine {
    get(key: string): any
    set(key: string, value: any): void
    delete(key: string): boolean
    clear(): void
}