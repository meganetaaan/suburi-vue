<template>
  <div id="app">
    <md-whiteframe md-tag="md-toolbar" md-elevation="3">
      <md-button class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-button>
      <h1 class="md-title">Daily Report</h1>
      <span style="flex: 1;"></span>
      <span>Taro Yamada</span>
      <md-button class="md-icon-button">
        <md-icon>account_circle</md-icon>
      </md-button>
    </md-whiteframe>

    <md-whiteframe class="nippo-form" md-elevation="0">
      <form novalidate @submit.stop.prevent>
        <h2>Worktime</h2>
        <md-input-container>
          <md-icon>today</md-icon>
          <label for="reportDate">Date</label>
          <md-input id="reportDate" type="date" v-model="reportDate"></md-input>
        </md-input-container>

        <md-layout md-gutter>
          <md-layout md-flex="45">
            <md-input-container>
              <md-icon>alarm</md-icon>
              <label>Start at</label>
              <md-input id="startTime" type="time" v-model="startTime" placeholder=""></md-input>
            </md-input-container>
          </md-layout>

          <md-layout md-flex="10">
            <span class="nippo-separator">~</span>
          </md-layout>

          <md-layout md-flex="45">
            <md-input-container>
              <label>End at</label>
              <md-input id="endTime" type="time" v-model="endTime"/></md-input>
            </md-input-container>
          </md-layout>
        </md-layout>

        <h2>Content</h2>
        <md-input-container>
          <md-icon>work</md-icon>
          <label>category</label>
          <md-select class="nippo-category" id="category" v-model="category">
            <md-option value="daily">daily</md-option>
            <md-option value="getInTrouble">get in trouble</md-option>
            <md-option value="emergency">emergency</md-option>
            <md-option value="handlingOver">handling over</md-option>
          </md-select>
        </md-input-container>

        <md-input-container>
          <md-icon>title</md-icon>
          <label>title</label>
          <md-input id="title" type="text" v-model="title"></md-input>
        </md-input-container>

        <md-input-container>
          <md-icon>comment</md-icon>
          <label>comment</label>
          <md-textarea id="comment" v-model="message"></md-textarea>
        </md-input-container>

        <md-input-container>
          <md-icon>attach_file</md-icon>
          <md-input accept="image/*" type="file" @change="onAttachedImageChanged"/>
        </md-input-container>

        <md-layout>
          <span style="flex: 1;"></span>
          <md-button class="md-primary">Cancel</md-button>
          <md-button class="md-accent md-raised">Submit</md-button>
        </md-layout>
      </form>
    </md-whiteframe>
  </div>
</template>

<script type="text/javascript">
  require('vue-material/dist/vue-material.css')
export default {
  name: 'app',
  data () {
    return {
      reportDate: this._getCurrentDate(),
      startTime: '09:00',
      endTime: this._getCurrentTime(),
      message: '',
      category: 'daily',
      title: '',
      comment: '',
      attachedImages: [],
    }
  },
  created () {
    console.debug('app created')
  },
  methods: {
    _getCurrentTime () {
      const date = new Date()
      const hours = ('00' + date.getHours()).slice(-2)
      const minutes = ('00' + date.getMinutes()).slice(-2)
      return `${hours}:${minutes}`
    },
    _getCurrentDate () {
      return '2017-06-20'
    },
    onAttachedImageChanged (ev) {
      this.attachedImages = ev.target.files
    }
  }
}
</script>

<style type="text/css">
  html,
  body,
  .app-viewport {
    height: 100%;
    overflow: hidden;
  }

  .nippo-form {
    margin: auto;
    max-width: 80vw;
    padding: 16px;
  }

  .nippo-separator {
    font-size: 2em;
    text-align: center;
    vertical-align: middle;
  }

  .nippo-category {
    margin-left: 12px;
  }
</style>
