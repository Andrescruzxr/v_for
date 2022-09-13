<template>
    <div>
      <input type="text" v-model="post.id"/>
      <input type="text" v-model="post.title"/>
      <input type="text" v-model="post.body"/>
      <input type="text" v-model="post.userId"/>
      <div>
        <b-container fluid>
  <b-row class="my-1">
    <b-col sm="2">
      <label for="input-small">post.id:</label>
    </b-col>
    <b-col sm="10">
      <b-form-input id="id" name="id" size="sm" placeholder="escriba su texto aqui"></b-form-input>
    
    </b-col>
  </b-row>

  <b-row class="my-1">
    <b-col sm="2">
      <label for="input-default">post.title:</label>
    </b-col>
    <b-col sm="10">
      <b-form-input id="title" name="title" placeholder="escriba su texto aqui"></b-form-input>
    </b-col>
  </b-row>

  <b-row class="my-1">
    <b-col sm="2">
      <label for="input-large">post.body:</label>
    </b-col>
    <b-col sm="10">
      <b-form-input id="body" name="body" size="lg" placeholder="escriba su texto aqui"></b-form-input>
    </b-col>
  </b-row>
  <b-row class="my-1">
    <b-col sm="2">
      <label for="input-large">post.userId :</label>
    </b-col>
    <b-col sm="10">
      <b-form-input id="userId" name="userId" size="lg" placeholder="escriba su texto aqui"></b-form-input>
    </b-col>
  </b-row>
</b-container>
  </div>
 
    </div>
  </template>
  
  
  
  
  
  
  
  
  
  
  <script>
  import axios from "axios";
  
  export default {
    name: '',
    data() {
      return {
       post:{
        id:null,
        title:null,
        body:null,
        userId:null,
       }
      };
    },
    component: {},
    computed: {},
    methods: {
   
    },
    mounted: function () {
     let id= this.$route.params
     axios.get("https://jsonplaceholder.typicode.com/Posts/1").then(data=>{
this.post.id=data.data.id
this.post.title=data.data.title
this.post.body=data.data.body
this.post.userId=data.data.userId
     });
    },
  }
  </script>