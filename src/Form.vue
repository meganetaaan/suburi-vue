<template>
  <md-whiteframe class="nippo-form" md-elevation="1">
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
        <md-icon style="fiex: 1;">attach_file</md-icon>
        <input style="flex: 2;" accept="image/*" type="file" @change="onAttachedImageChanged"/>
      </md-input-container>
      <template v-if="image">
        <md-layout>
          <span>Preview</span>
          <div style="flex: 7;" class="nippo-image-container">
            <md-image style="height: 100px; width: auto;" :md-src="image"></md-image>
          </div>
        </md-layout>
      </template>

      <md-layout>
        <span style="flex: 1;"></span>
        <md-button class="md-primary">Clear</md-button>
        <md-button class="md-accent md-raised" @click.native="save">Save</md-button>
      </md-layout>
    </form>
    <md-snackbar :md-position="'bottom center'" ref="snackbar" :md-duration="4000">
      <span>Nippo saved!!</span>
    </md-snackbar>
  </md-whiteframe>
</template>

<script type="text/javascript">
require('vue-material/dist/vue-material.css')
export default {
  name: 'form',
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
      image: null,
    }
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
      console.log(ev)
      const files = ev.target.files || ev.dataTransfer.files
      if (!files.length) {
        return
      }
      this.attachedImages = files
      this.createImage(files[0])
    },
    save (ev) {
      this.$refs.snackbar.open()
    },
    createImage(file) {
      var image = new Image()
      var reader = new FileReader()
      var vm = this

      reader.onload = (e) => {
        vm.image = e.target.result
      }
      reader.readAsDataURL(file)
    },
    removeImage: function (e) {
      this.image = ''
    }
  }
}
</script>

<style type="text/css">
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

  .nippo-image-container {
    height: auto;
  }

  @media only screen
  and (min-device-width: 320px)
  and (max-device-width: 568px)
  and (-webkit-min-device-pixel-ratio: 2) {
    .nippo-form {
      margin: auto;
      max-width: none;
      padding: 16px;
    }
  }
</style>
