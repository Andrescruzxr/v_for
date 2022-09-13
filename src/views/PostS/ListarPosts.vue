<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>TITULO</th>
          <th>DESCRIPCION</th>
          <th>ID_USER</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="Listap in Listap" :key="Listap.id">
          <td>{{ Listap.id }}</td>
          <td>{{ Listap.title }}</td>
          <td>{{ Listap.body }}</td>
          <td>{{ Listap.userId }}</td>
          <b-button
            v-b-tooltip.hover
            title="Eliminar "
            @click="Eliminar(Listap.id)"
            variant="warning"
          >
            <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
          </b-button>
          <b-button
            v-b-tooltip.hover
            title="Editar "
            @click="Editar(Listap.id)"
            variant="dark"
          > <b-icon icon="pencil-fill" aria-hidden="true"></b-icon>
          </b-button>
        </tr>
      </tbody>
    </table>
  </div>
</template>










<script>
import axios from "axios";

export default {
  name: "ListarPosts",
  data() {
    return {
      Listap: null,
    };
  },
  component: {},
  computed: {},
  methods: {
    Editar(id) {
      alert("estoy en editar  : "+id);
      this.$router.push("EditarPosts/")+id

    
   
    },
    Eliminar(id){
        alert("estoy en eliminar  : "+id);
        
    },
  },
  mounted: function () {
    axios.get("https://jsonplaceholder.typicode.com/Posts").then((data) => {
      this.Listap = data.data;
    });
  },
};
</script>