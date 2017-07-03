<template>
  <div id="app" style="display: flex; flex-direction: column;">
    <md-whiteframe md-tag="md-toolbar" md-elevation="3">
      <md-button class="md-icon-button" @click.native="openLeftSideNav">
        <md-icon>menu</md-icon>
      </md-button>
      <h1 class="md-title">Daily Report</h1>
      <span style="flex: 1;"></span>
      <span>Taro Yamada</span>
      <md-button class="md-icon-button">
        <md-icon>account_circle</md-icon>
      </md-button>
    </md-whiteframe>
    <md-sidenav class="md-left" ref="leftSideNav">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <h3 class="md-title">Nippo</h3>
        </div>
      </md-toolbar>
      <md-list>
        <md-list-item>
          <router-link to="/list" @click.native="closeLeftSideNav">list</router-link>
        </md-list-item>
        <md-list-item>
          <router-link to="/form" @click.native="closeLeftSideNav">form</router-link>
        </md-list-item>
      </md-list>
    </md-sidenav>
    <div class="body-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NippoForm from './Form.vue'
import NippoList from './List.vue'

export default {
  components: {
    NippoForm,
    NippoList
  },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    openLeftSideNav () {
      this.$refs.leftSideNav.open()
    },
    closeLeftSideNav () {
      this.$refs.leftSideNav.close()
    }
  }
}
</script>

<style>
  html,
  body,
  .app-viewport {
    height: 100%;
    overflow: hidden;
  }
  #app {
    height: 100%;
    width: 100%
  }
  .body-container {
    height: 100%;
    overflow: auto;
    flex: 1;
    padding: 16px;
  }

  /* no padding on smart devices */
  @media only screen
  and (min-device-width: 320px)
  and (max-device-width: 568px)
  and (-webkit-min-device-pixel-ratio: 2) {
    .body-container {
      padding: 0px;
    }
  }
  </style>
