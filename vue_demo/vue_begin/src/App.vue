<template>
  <div id="app">
 <ul>
   <li><router-link to="/">Home</router-link> </li>
   <li><router-link to="/order">Order</router-link> </li>
 </ul>
      <router-view/>

  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
</style>
