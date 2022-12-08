# apitest.ru
 тестовое задание на работу с api

-------------------------------------------------------------

Создать страницу на одном из css frameworkов (Bootstrap, Materialize), на страницу должен присутствовать форма поиска.
При вводе данных должен происходить запрос через api nytimes.com и поиск статей и показываться первые 10 вышедших и подходящих.
При скролле вниз должны подгружаться следующие 10.
Апи брать с nytimes.com

-------------------------------------------------------------

Ход выполнения:

Подключен bootstrap 5

Регистрируемся https://developer.nytimes.com/get-started 

Получаем ключ.

<img src="https://github.com/rreeggeenntt4/apitest.ru/blob/main/media/2022-12-07_21-01-06.png" alt="">



На странице https://developer.nytimes.com/docs/articlesearch-product/1/overview

расписано "Pagination
The Article Search API returns a max of 10 results at a time. The meta node in the response contains the total number of matches ("hits") and the current offset. Use the page query parameter to paginate thru results (page=0 for results 1-10, page=1 for 11-20, ...). You can paginate thru up to 100 pages (1,000 results). If you get too many results try filtering by date range."

Чтобы подгружать информацию постепенно просто меняем page= 0,1,2, и тд
https://api.nytimes.com/svc/search/v2/articlesearch.json?q=&page=0&api-key=yourkey


<video src="https://github.com/rreeggeenntt4/apitest.ru/raw/main/media/2022-12-08%2005-49-29.mkv"></video>
