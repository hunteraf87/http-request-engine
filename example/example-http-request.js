import {HttpRequest, HttpFetchEngine, HttpXHREngine} from "../dist/http";
import {LFUCache} from "../dist/cache";

const cache = new LFUCache()

const request = new HttpRequest('https://hneckfjeyp.api.quickmocker.com/user/test')
    .using(new HttpFetchEngine())
    .cache(cache)
    .create()
    .then((data) => console.log('data: ', data))
    .catch(err => console.log('err: ', err))

const request2 = new HttpRequest('https://hneckfjeyp.api.quickmocker.com/user')
    .using(new HttpFetchEngine())
    .cache(cache)
    .method('POST')
    .formData()
    .body({ data: "test" })
    .create()
    .then((data) => console.log('data: ', data))
    .catch(err => console.log('err: ', err))


setTimeout(() => {
    const request3 = new HttpRequest('https://hneckfjeyp.api.quickmocker.com/user/test')
        .using(new HttpXHREngine())
        .cache(cache)
        .create()
        .then((data) => data.json())
        .then((data) => console.log('data: ', data))
        .catch(err => console.log('err: ', err))
}, 1000);

const request4 = new HttpRequest('https://hneckfjeyp.api.quickmocker.com/user')
    .using(new HttpXHREngine())
    .cache(cache)
    .method('POST')
    .formData()
    .body({ data: "test" })
    .create()
    .then((data) => data.json())
    .then((data) => console.log('data: ', data))
    .catch(err => console.log('err: ', err))
