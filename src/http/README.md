# Http движок

На текущий момент реализована базовая часть для выполнения запросов http.
Класс HttpRequest является статическим. Все методы статические.

Метод using позволяет задать движок выполнения запроса. 
На данный момент доступны 2 движка - fetch и XHR
````js
HttpRequest.using(new HttpFetchEngine())
HttpRequest.using(new HttpXHREngine())
````

Метод cache позволяет задать движок для кеширования. По умолчанию Newer.
````js
HttpRequest.cache(new LFUCache())
````

Метод method позволяет задать метод запроса. По умолчанию GET
````js
HttpRequest.method('POST')
````

Метод header позволяет задать заголовок запроса. Первый параметр имя заголовка, второй параметр значение.
````js
HttpRequest.header('Content-Type', 'application/json')
````

Метод headers позволяет задать несколько заголовков запроса.
````js
HttpRequest.headers(new Headers({ ... }))
````

Методы json и formData позволяют задать форму отправки тела запроса.
````js
HttpRequest.json()
HttpRequest.formData()
````

Метод create создает экземпляр запроса и выполняет его. 
Первым параметром указывается URL.
Вторым параметром указывается тело запроса (опционально).
Данный метод возвращает промис с Response.
````js
HttpRequest.create('https://...', { data: 'test' })
````

## Пример использования
Предполагается использование данного движка как конструктора. 
На основе одних параметров можно создать другой набор и тд.
Т.е подразумевается механизм переиспользования параметров.
````js
const request = HttpRequest.using(new HttpFetchEngine()).cache(new LFUCache())
const requestPost = request.method('post').json()
request.create('https://...')
requestPost.create('https://...', { data: 'test' })
````

