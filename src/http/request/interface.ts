import {HttpRequestEngine} from "../request-engins";
import {CacheEngine} from "@cache";

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

export type RequestSettings = {
    engine: HttpRequestEngine
    cache: CacheEngine
    method: RequestMethod
    body: RequestBody
    headers: Headers
}