<template>


<div id="main" v-bind:class="{darker: isActive}">

<div class="logo_user_wrap">
<div class="logo_user">
        
    <span>{{ $store.state.firstName.charAt(0) + $store.state.lastName.charAt(0)}}</span>
  </div></div>
  <h1>{{ $store.state.firstName }} {{$store.state.lastName }}</h1>
  
 

 
<div class="links">

<router-link to="/privatedata" class="links_arrow">private data ></router-link>
<router-link to="/recommendation" class="links_arrow">recommendation beer></router-link>
 <router-link to="/back" class="links_arrow">*home</router-link>

</div>
<router-view></router-view> 
<Home />


  <button class="change" @click="isActive = !isActive"><span>dark</span> / <span>light</span ></button>

  
</div>

</template>

<script>


import Home from '@/components/Home'

export default {
components: {
Home,


},

  name: 'App',
 

  data() {
    return {
 
     firstName: "",
lastName: "",
isActive: true
      }
    },

      
  
  
}
</script>

<style>
#main {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  
  text-align: center;
  
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
  width: 60%;
  margin: 0 auto;
  font-size: 20px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.darker {
 color: white;
   background: linear-gradient(-45deg, #266785, #2029aa, #0c97ca, #000000);
}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
#nav {
  padding: 30px;

}

#nav a {
  font-weight: bold;
  color: #030303;
 
}
.links {
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
  display: flex;
  justify-content: center;
 
}
.logo_user_wrap {
  padding-top: 20px;
}
.logo_user {
 
  width: 100px;
  height: 100px;
  background-color: teal;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 50%;
}
.logo_user span {
  color: black;
  font-size: 50px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
button {
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
.change {
  font-size: 15px;
  padding-top: 5px;
  padding-bottom: 10px;
}
.change span {
  color: rgb(27, 27, 95);
}
.change span+span{
  color: white;
}
.links_arrow {
  color: rgb(12, 12, 12);
  padding: 5px;
  text-decoration: none;

}

@media screen and (max-width: 1200px) {
  #main {
    width: 100%;
  }
}
</style>
