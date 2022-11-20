import {HttpRequestEngine} from "./interface";
import {HttpRequest} from "../request";

export default class Fetch implements HttpRequestEngine {
    execute(request: HttpRequest): Promise<any> {
        const params = request.parameters();
        return fetch(request.url, {
            method: params.method,
            body: params.body,
            headers: params.headers
        });
    }
}