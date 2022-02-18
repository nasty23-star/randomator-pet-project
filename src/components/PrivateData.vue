<template>



<div class="private">
  <span>username: {{$store.state.username}}</span>
  <br>
  <span>gender: {{$store.state.gender}}</span>
  <br>
<span>email:{{ $store.state.email }}</span>
<br>
  <span>country:{{ $store.state.country }}</span>
 <br>
  <span>city: {{ $store.state.city}}</span>
  <br>
  <span>date birth: {{ $store.state.dateBirth }}</span>
  

 </div>
    


 

</template>

<script>


export default {
 
data() {
   
 return {
firstName: '...',
      lastName: '...',
     email: "...",
      country: "...",
      gender: "...",
      username: "...",
      date: "...",
      city: "...",
      dateBirth: "...",
     
    
 }
 },
 
 }
 


</script>

