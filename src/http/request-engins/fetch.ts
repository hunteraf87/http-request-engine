import {HttpRequestEngine} from "./interface";
import {RequestParameters} from "../request/interface";

export default class Fetch implements HttpRequestEngine {
    execute(url: string, parameters: RequestParameters): Promise<any> {
        return fetch(url, {
            method: parameters.method,
            body: parameters.body,
            headers: parameters.headers
        });
    }
}