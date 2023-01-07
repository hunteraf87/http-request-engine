import {HttpRequestEngine} from "./interface";
import {RequestParameters} from "../request/interface";

export default class XHR implements HttpRequestEngine {
    execute(url: string, parameters: RequestParameters): Promise<any> {
        const headers = (xhr: XMLHttpRequest): Headers => {
            return xhr
                .getAllResponseHeaders()
                .split('\r\n')
                .reduce((result, current) => {
                    const [name, value] = current.split(': ');
                    if (name != '') {
                        result.set(name, value);
                    }
                    return result;
                }, new Headers());
        }

        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();
            xhr.open(parameters.method, url, true);

            parameters.headers.forEach((value, key) => {
                xhr.setRequestHeader(key, value);
            })

            xhr.onload = () => {
                resolve(new Response(xhr.response, {
                    status: xhr.status,
                    statusText: xhr.statusText,
                    headers: headers(xhr)
                }));
            }

            xhr.onerror = () => reject(new Error('Error send XHR request.'))

            xhr.send(parameters.body);
        })
    }
}