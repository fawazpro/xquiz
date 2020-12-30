<template>
  <div id="app">
    <img src="img/logo_dark.png" alt="">
    <router-view></router-view>
    <footer>&copy; Rayyan Technologies 2020</footer>
  </div>
</template>

<style>
body{
  background-color: rgb(221, 247, 221);
}

#app {
  margin: 20px auto;
  max-height: 98vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

img{
  max-width: 68vw;
}

footer{
}

form{
    margin:20vh auto;
    max-width: 80vw;
    display: flex;
    flex-direction: column;
  }
  input{
    margin:9px auto;
  }
  .btn{
    height: 2.2rem;
    font-size: 1.2rem;
    padding: 5px 2rem;
    text-align: center;
    color: #fff;    
    border-radius: 0.4rem;
    background-color: #000;
    margin-bottom: 16vh;
  }
  .loader{
    position: absolute;
    top: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
    background-color: #eceaea;
    background-image: url('assets/loader.gif');
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 10000;
    opacity: 0.4;
    filter: alpha(opacity=40);
  }

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
