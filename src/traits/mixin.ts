
export function mixin(...args: Record<PropertyKey, any>[]): Record<PropertyKey, any> {
    let result = {};

    for (const obj of args) {
        for (const [key, val] of Object.entries(obj)) {
            if (typeof val === 'object' && val !== null) {
                result[key] = mixin(result[key] ?? {}, val);
            } else {
                result[key] = val;
            }
        }
    }

    return result;
}