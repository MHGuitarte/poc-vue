<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
html,
body {
  height: 100vh;
  margin: 0 !important;
  padding: 0 !important;
}

html {
overflow: hidden;/**Esto hay que quitarlo y buscar una solución mejor */
}

* {
  font-family: Helvetica, Arial, sans-serif;
}
</style>
