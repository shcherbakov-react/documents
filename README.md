## Запуск проекта

```
npm install - устанавливаем зависимости
npm start - запуск фронта
```

----

## Скрипты

- `npm run start` - Запуск frontend проекта на webpack dev server
- `npm run build` - Сборка в prod режиме
- `npm run test:unit` - Хапуск unit тестов с jest

----

## Архитектура проекта

Проект написан в соответствии с методологией Feature sliced design

Ссылка на документацию - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Конфигурация проекта

Для разработки проект содержит конфиг:
    Webpack - ./config/build

Вся конфигурация хранится в /config
- /config/build - конфигурация webpack
- /config/jest - конфигурация тестовой среды

----

### Работа с данными

Взаимодействие с данными осуществляется с помощью redux toolkit.

Запросы на сервер отправляются с помощью [RTK query](/src/shared/api/rtkApi.ts)

----