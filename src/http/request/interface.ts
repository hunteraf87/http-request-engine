import {HttpRequestEngine} from "../request-engins";
import {CacheEngine} from "@cache";

export type RequestOptions = {
    engine?: HttpRequestEngine,
    cache?: CacheEngine,
    method?: RequestMethod,
    body?: RequestBody,
    headers?: Headers,
}

export enum RequestMethod {
    GET = 'get',
    POST = 'post',
    PATCH = 'patch',
    PUT = 'put',
    DELETE = 'delete',
}

export type RequestBody = {
    [key: string]: any
} | Blob

export type RequestParameters = {
    method: RequestMethod,
    body: string | FormData | Blob | null,
    headers: Headers
}

export interface HttpRequest {
    readonly url: string;
    using(engine: HttpRequestEngine): this;
    cache(engine: CacheEngine): this;
    method(method: RequestMethod): this;
    body(body: RequestBody): this;
    header(key: string, value: string): this;
    headers(headers: Headers): this;
    create(): Promise<Response>;
    parameters(): RequestParameters;
}