<template>
  <div>
    <Navbar/>
    <Sidebar/>
    <b-button
      v-b-tooltip.hover
      title="Nuevo registro"
      @click="nuevoregistro()"
      variant="danger"
    >
      <b-icon icon="plus-lg" aria-hidden="true"></b-icon>nuevo registro
    </b-button>
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
          >
            <b-icon icon="pencil-fill" aria-hidden="true"></b-icon>
          </b-button>
        </tr>
      </tbody>
    </table>
    <b-form-input :id="buscar" :type="search" v-model="filter"></b-form-input>
    <b-button>
      <b-icon icon="search" aria-hidden="true"></b-icon>
    </b-button>
    <b-table
      id="my-table"
      :items="Listap"
      :fields="fields"
      class="my-table"
      :per-page="perPage"
      :current-page="currentPage"
    >

    
      <template #cell(ACCIONES)="row">
        <b-button
          v-b-tooltip.hover
          title="Eliminar "
          @click="Eliminar(row.item.id)"
          variant="warning"
        >
          <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
        </b-button>
        <b-button
          v-b-tooltip.hover
          title="Editar "
          @click="Editar(row.item.id)"
          variant="dark"
        >
          <b-icon icon="pencil-fill" aria-hidden="true"></b-icon>
        </b-button>
      </template>
    </b-table>

    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
  </div>
</template>





<script>
import axios from "axios";
import Sidebar from "../../components/Sidebar.vue"
import Navbar from "../../components/Navbar.vue"
export default {
  name: "ListarPosts",
  data() {
    return {
      fields: [
        { key: "id", label: "#" },
        { key: "title", label: "titulo" },
        { key: "body", label: "descripcion" },
        "ACCIONES",
      ],
      currentPage: 1,
      rows: 100,
      perPage: 10,
      Listap: null,
    };
  },
  components: {
    Navbar,
    Sidebar
    
},
  computed: {},
  methods: {
    Editar(id) {
      alert("estoy en editar  : " + id);
      this.$router.push("EditarPosts/" + id);
    },
    Eliminar(id) {
      alert("estoy en eliminar  : " + id);
    },
    nuevoregistro(id) {
      alert("estoy en nuevo  : " + id);
      this.$router.push("nuevopost/" + id);
    },
  },
  mounted: function () {
    axios.get("https://jsonplaceholder.typicode.com/Posts").then((data) => {
      this.Listap = data.data;
    });
  },
};
</script>