# Кэширование

## Движки

Движки кэша возвращают единый интерфейс CacheEngine с методами
```js
get(key)        // Получает значение из кэша
set(key, value) // Устанавливает значение в кэше
delete(key)     // Удаляет значение из кэша
clear()         // Очищает кэш
```

1. LRU кэш. 

```js
const cache = new LRUCache(size); // size - размер кэша
```

2. LFU кэш.

```js
const cache = new LFUCache(size); // size - размер кэша
```

3. Never кэш. Заглушка реализующая контракт кэша.

```js
const cache = new NeverCache();
```

## Декораторы

1. ttl декоратор устанавливает время жизни значений в кэше. При истечении времени значение удаляется.

```js
const cache = ttl(new LRUCache(size), 1000);
```