<template>
  <md-whiteframe class="nippo-form" md-elevation="1">
    <md-list>
      <template v-for="nippo in nippos">
        <md-list-item>
          <span>{{nippo.title}}</span>
        </md-list-item>
        <md-divider></md-divider>
      </template>
    </md-list>
  </md-whiteframe>
</template>

<script type="text/javascript">
  import VueRouter from 'vue-router'
  require('vue-material/dist/vue-material.css')
export default {
  name: 'list',
  data () {
    return {
      nippos: [{
        'id': '000',
        'title': '2017/06/26'
      },{
        'id': '001',
        'title': '2017/06/25'
      }]
    }
  }
}
</script>

<style type="text/css">
</style>
