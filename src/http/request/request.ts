import {Fetch, HttpRequestEngine} from "../request-engins";
import {CacheEngine, NeverCache} from "@cache";
import {HttpRequest, RequestBody, RequestMethod, RequestOptions, RequestParameters} from "./interface";
import {objectToFormData} from "./helpers";

export default class Request implements HttpRequest {
    readonly url: string
    #engine: HttpRequestEngine
    #cache: CacheEngine
    #method: RequestMethod
    #body: RequestBody
    #headers: Headers

    constructor(url: string, opts: RequestOptions = {}) {
        this.url = url;
        this.#engine = opts.engine !== undefined ? opts.engine : new Fetch();
        this.#cache = opts.cache !== undefined ? opts.cache : new NeverCache();
        this.#method = opts.method !== undefined ? opts.method : RequestMethod.GET;
        this.#body = opts.body !== undefined ? opts.body : {};
        this.#headers = opts.headers !== undefined ? opts.headers : new Headers();
    }

    parameters(): RequestParameters {
        return {
            method: this.#method,
            body: this.#prepareBody(),
            headers: this.#headers
        }
    }

    using(engine: HttpRequestEngine): this {
        this.#engine = engine;
        return this;
    }

    cache(engine: CacheEngine): this {
        this.#cache = engine;
        return this;
    }

    method(method: RequestMethod): this {
        this.#method = method;
        return this;
    }

    body(body: RequestBody): this {
        this.#body = body;
        return this;
    }

    header(key: string, value: string): this {
        this.#headers.set(key, value)
        return this;
    }

    headers(headers: Headers): this {
        this.#headers = headers;
        return this;
    }

    json(): this {
        this.#headers.set('Content-Type', 'application/json');
        return this;
    }

    formData(): this {
        this.#headers.set('Content-Type', 'multipart/form-data');
        return this;
    }

    create(): Promise<Response> {
        if (this.#method.toLowerCase() === 'get') {
            const cacheValue = this.#cache.get(this.url);
            // @ts-ignore
            // console.log('cache', this.#cache.print())
            if (cacheValue !== undefined) {
                return Promise.resolve(cacheValue);
            }
        }
        return this.#engine.execute(this).then((response) => {
            if (this.#method.toLowerCase() === 'get') {
                this.#cache.set(this.url, response);
            }
            return response;
        });
    }

    #prepareBody() {
        if (this.#headers['Content-Type'] === 'application/json') {
            return JSON.stringify(this.#body);
        } else if (this.#headers['Content-Type'] === 'multipart/form-data') {
            return objectToFormData(this.#body);
        } else if (this.#body instanceof File) {
            return this.#body;
        }
        return null;
    }
}