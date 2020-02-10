<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light header">
    <router-link to="/" class="navbar-brand">Stock Trader</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link tag="li" class="nav-item active" to="/portfolio">
          <a class="nav-link">Portfolio <span class="sr-only">(current)</span></a>
        </router-link>
        <router-link tag="li" class="nav-item" to="/stocks">
          <a class="nav-link">Stocks</a>
        </router-link>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li class="nav-item">
          <a class="nav-link">End Day</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            Save & Load
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Save Data</a>
            <a class="dropdown-item" href="#">Load Data</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
</script>

<style scoped>
.header {
  margin-top: 31px;
}
.title {
  font-weight: 600;
  font-size: 15px;
  opacity: .7;
}
</style>
