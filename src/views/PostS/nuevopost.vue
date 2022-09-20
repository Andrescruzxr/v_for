<template>
    <div>
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
      <b-form-input id="body" name="body" size="lg" v-model="form" placeholder="escriba su texto aqui"></b-form-input>
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
<b-button
        v-b-tooltip.hover
        title="Nuevo registro"
        @click="guardar()"
        variant="dark"
      >
        <b-icon icon="pencil" aria-hidden="true"></b-icon>guardar
      </b-button>
      <b-button
        v-b-tooltip.hover
        title="Nuevo registro"
        @click="salir()"
        variant="success"
      >
        <b-icon icon="pencil" aria-hidden="true"></b-icon>salir
      </b-button>
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
guardar(){
axios.post("https://jsonplaceholder.typicode.com/posts",this.post).then(data=>{
this.$router.push("/ListarPosts");
});
},
salir(){
  this.$router.push("/ListarPosts");
} ,  
    },

  }
</script>