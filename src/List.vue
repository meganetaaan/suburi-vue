<template>
  <div>
    <md-whiteframe class="nippo-list" md-elevation="1">
      <md-list v-if="this.$store.state.reports.length > 0 "class="nippo-form" md-elevation="1">
        <template v-for="report in reports">
          <md-list-item>
            <span>{{report.title}}</span> - <span>{{report.date}}</span>
          </md-list-item>
          <md-divider></md-divider>
        </template>
      </md-list>
      <template v-else>
        GO WRITE SOME NIPPOS NOW!!
      </template>
    </md-whiteframe>
    <md-button @click.native="onClickAdd" class="md-fab md-fab-bottom-right">
      <md-icon>add</md-icon>
    </md-button>
  </div>
</template>

<script type="text/javascript">
require('vue-material/dist/vue-material.css')
export default {
  name: 'list',
  computed: {
    reports () {
      return this.$store.state.reports
    }
  },
  methods: {
    onClickAdd () {
      this.$router.push('/form')
    }
  }
}
</script>

<style type="text/css">
  .nippo-list {
    margin: auto;
    max-width: 80vw;
    padding: 16px;
  }
  @media only screen
  and (min-device-width: 320px)
  and (max-device-width: 568px)
  and (-webkit-min-device-pixel-ratio: 2) {
    .nippo-list {
      max-width: none;
    }
  }
</style>
