<template>
    
    <div class="container">
        <template>
  <div>
    <b-button v-b-toggle.sidebar-1>Toggle Sidebar</b-button>
    <b-sidebar id="sidebar-1" title="Sidebar" shadow>
      <div class="px-3 py-2">
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        
        <b-img src="https://picsum.photos/150/150/?image=54" v-bind="mainProps" rounded alt="Rounded image"></b-img>
      </div>
    </b-sidebar>
  </div>
</template>

    </div>
</template>
<style>
    .container{
        width:30%;
        height: 100%;
        background-color: black;
    }
</style>