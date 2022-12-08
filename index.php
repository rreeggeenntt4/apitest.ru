<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <link rel="icon" href="/favicon.ico">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/css/bootstrap.min.css" rel="stylesheet">
  <link href="/css/main.css" rel="stylesheet">
  <title>Новости</title>
</head>

<body id="body">

  <header class="py-3 mb-4 border-bottom">
    <div class="container d-flex flex-wrap justify-content-center">
      <a href="/" class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32">
          <use xlink:href="#bootstrap"></use>
        </svg>
        <span class="fs-4">Поиск новостей</span>
      </a>
      <form class="col-12 col-lg-auto mb-3 mb-lg-0" role="search" onsubmit="search();return false">
        <input type="search" class="form-control" placeholder="Search..." aria-label="Search" id="searchline">
      </form>
    </div>
  </header>

  <div class="container">
    <div class="row" id="app">
    </div>

    <div class="displayoff" id="morenews" onclick="morenews();">More news</div>
  </div>

  <script src="/js/bootstrap.bundle.min.js"></script>
  <script src="/js/main.js"></script>
</body>

</html>