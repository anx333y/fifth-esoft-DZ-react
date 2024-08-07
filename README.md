# Каталог фильмов на React + Redux с использованием стороннего API

## Существует 4 страницы:

1. Главная страница с популярными фильмами из списка Кинопоиска топ250.
- Каждый фильм можно добавить в избранное, нажав на иконку сердца слева сверху.
- На картинку фильма можно нажать и перейти на страницу фильма.
2. Страница фильма.
- Можно добавить в избранное, нажав на иконку сердца слева от названия.
- Под информацией о фильме находится 3 похожих фильма, которые берутся из API с ключем всех жанров этого фильма.
- Под похожими фильмами находится блок комментариев.
- Можно вписать своё имя, но есть и имя по умолчанию.
- Можно вписать комментарий.
3. Страница поиска.
- Есть поле поиска
- Если в поле поиска есть какой-либо символ - фильтры игнорируются (связано с особенностями API)
- 3 селектора для фильтров: Жанр, Страна, Тип
- Кнопка "Найти" и "Сбросить".
4. Страница 404.
- Если какой-либо страницы нет - происходит перенаправление на эту страницу.

Использована API Кинопоиска https://api.kinopoisk.dev/

Есть косяки по оптимизации, связанные со стором redux. Я использовал объект для хранения фильтров, поэтому когда, условно, выбирал фильтр "жанр", происходил перерендер всех селекторов. Не стал исправлять, так как сильно отстаю от курса.
