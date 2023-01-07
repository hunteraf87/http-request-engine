import {Fetch, HttpRequestEngine} from "../request-engins";
import {CacheEngine, NeverCache} from "@cache";
import {RequestBody, RequestMethod, RequestParameters, RequestSettings} from "./interface";
import {objectToFormData} from "./helpers";

export default class Request {
    protected static settings: RequestSettings = {
        engine: new Fetch(),
        cache: new NeverCache(),
        method: RequestMethod.GET,
        body: {},
        headers: new Headers()
    };

    static using(engine: HttpRequestEngine): typeof Request {
        const settings = { ...this.settings, engine };
        return class extends this {
            protected static settings = settings
        };
    }

    static cache(engine: CacheEngine): typeof Request {
        const settings = { ...this.settings, cache: engine };
        return class extends this {
            protected static settings = settings
        };
    }

    static method(method: RequestMethod): typeof Request {
        const settings = { ...this.settings, method };
        return class extends this {
            protected static settings = settings
        };
    }

    static header(key: string, value: string): typeof Request {
        const settings = this.settings;
        settings.headers.set(key, value);
        return class extends this {
            protected static settings = settings
        };
    }

    static headers(headers: Headers): typeof Request {
        const settings = { ...this.settings, headers };
        return class extends this {
            protected static settings = settings
        };
    }

    static json(): typeof Request {
        const settings = this.settings;
        settings.headers.set('Content-Type', 'application/json');
        return class extends this {
            protected static settings = settings
        };
    }

    static formData(): typeof Request {
        const settings = this.settings;
        settings.headers.set('Content-Type', 'multipart/form-data');
        return class extends this {
            protected static settings = settings
        };
    }

    static create(url: string, body?: RequestBody): Promise<Response> {
        if (this.settings.method.toLowerCase() === 'get') {
            const cacheValue = this.settings.cache.get(url);
            if (cacheValue !== undefined) {
                return Promise.resolve(cacheValue);
            }
        }

        return this.settings.engine.execute(url, this.prepareParameters(body)).then((response) => {
            if (this.settings.method.toLowerCase() === 'get') {
                this.settings.cache.set(url, response);
            }
            return response;
        });
    }

    static prepareParameters(body?: RequestBody): RequestParameters {
        return {
            method: this.settings.method,
            body: body ? this.prepareBody(body) : null,
            headers: this.settings.headers
        }
    }

    static prepareBody(body: RequestBody) {
        if (this.settings.headers['Content-Type'] === 'application/json') {
            return JSON.stringify(body);
        } else if (this.settings.headers['Content-Type'] === 'multipart/form-data') {
            return objectToFormData(body);
        } else if (body instanceof File) {
            return body;
        }
        return null;
    }
}