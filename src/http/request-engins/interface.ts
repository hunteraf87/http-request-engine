import {RequestParameters} from "../request/interface";

export interface HttpRequestEngine {
    execute(url: string, parameters: RequestParameters): Promise<any>
}