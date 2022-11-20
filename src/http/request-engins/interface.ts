import {HttpRequest} from "../request";

export interface HttpRequestEngine {
    execute(request: HttpRequest): Promise<any>
}