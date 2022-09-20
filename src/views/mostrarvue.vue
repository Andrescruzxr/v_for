<template>
  <div>
    <div>
      <b-button
        v-b-tooltip.hover
        title="Nuevo registro"
        @click="nuevo()"
        variant="danger"
      >
        <b-icon icon="plus-lg" aria-hidden="true"></b-icon>Nuevo Registro
      </b-button>
    </div>
    <br>
    
    <div class="table">
     
      <b-form-input id="buscar" type="search" v-model="filter"></b-form-input>
    <b-button>
      <b-icon icon="search" aria-hidden="true"></b-icon>
    </b-button>
    <b-table
      id="my-table"
      :items="listapacientes"
      :fields="fields"
      class="my-table"
      :per-page="perPage"
      :current-page="currentPage"
      :filter="filter"
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
  </div>
</template>





  <script>
import axios from "axios";

export default {
  name: "mostrarvue",
  data() {
    return {
      fields: [
        { key: "PacienteId", label: "#" },
        { key: "Nombre", label: "Nombre" },
        { key: "DNI", label: "descripcion" },
        { key: "Telefono", label: "#" },
        { key: "Correo", label: "correo" },
        "ACCIONES"
      ],
      currentPage: 1,
      rows: 10,
      perPage: 2,
      filter:null,


      listapacientes: null,
    };
  },
  components: {},
  methods: {
    nuevo(){
this.$router.push("/Registrar");
    },
    
    Editar(id) {
      alert("estoy en editar" + id);
      
this.$router.push("/Editar/"+id);
    
   
    },
    
    Eliminar(id) {
      if (confirm("confirmar eliminar registro")) {
        let direccion = `https://api.solodata.es/pacientes/${id}`;
        axios
          .delete(direccion)
          .then((response) => {})
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
  mounted: function () {
    let direccion = "https://api.solodata.es/pacientes2?page=1";
    axios.get(direccion).then((data) => {
      this.listapacientes = data.data.pacientes;
    });
  },
};
</script>