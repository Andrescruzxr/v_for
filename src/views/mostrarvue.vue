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
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOMBRE</th>
            <th>DNI</th>
            <th>TELEFONO</th>
            <th>CORREO</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="lista in listapacientes" :key="lista.PacienteId">
            <td>{{ lista.PacienteId }}</td>
            <td>{{ lista.Nombre }}</td>
            <td>{{ lista.DNI }}</td>
            <td>{{ lista.Telefono }}</td>
            <td>{{ lista.Correo }}</td>
            <td>
              <b-button
                v-b-tooltip.hover
                title="Eliminar registro"
                @click="Eliminar(lista.PacienteId)"
                variant="danger"
              >
                <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
              </b-button>
              <b-button
                v-b-tooltip.hover
                title="Editar registro"
                @click="Editar(lista.PacienteId)"
                variant="success"
              >
                <b-icon icon="pencil-fill" aria-hidden="true"></b-icon>
              </b-button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>





  <script>
import axios from "axios";

export default {
  name: "mostrarvue",
  data() {
    return {
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