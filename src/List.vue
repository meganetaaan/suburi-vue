<template>
  <div>
    <template>
      <md-list class="nippo-list" md-elevation="1">
        <template v-if="Object.keys(this.$store.state.reports).length > 0"> 
          <template v-for="report in reports">
            <md-list-item @click="">
              <router-link :to="{ name: 'report', params: { id: report.id }}">
                <span class="nippo-date">{{report.date}}({{dateStr(report.date)}})</span>
                <span class="nippo-worktime">{{report.startTime}} - {{report.endTime}}</span>
              </router-link>
            </md-list-item>
            <md-divider></md-divider>
          </template>
        </template>
        <template v-else>
          <md-list-item>
            <span>GO WRITE SOME NIPPOS NOW!!</span>
          </md-list-item>
        </template>
      </md-list>
    </template>
    <md-button @click.native="onClickAdd" class="md-fab md-fab-bottom-right">
      <md-icon>add</md-icon>
    </md-button>
  </div>
</template>

<script type="text/javascript">
require('vue-material/dist/vue-material.css')
const WEEKDAY = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
export default {
  name: 'list',
  mounted () {
    this.$store.dispatch('sync')
  },
  computed: {
    reports () {
      return Object.values(this.$store.state.reports)
    }
  },
  methods: {
    onClickAdd () {
      this.$router.push('/form')
    },
    dateStr (date) {
      return WEEKDAY[new Date(date).getDay()]
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
  .nippo-worktime {
    color: #888
  }
  @media only screen
  and (min-device-width: 320px)
  and (max-device-width: 568px)
  and (-webkit-min-device-pixel-ratio: 2) {
    .nippo-list {
      max-width: none;
      padding: 0px;
    }
  }
</style>
