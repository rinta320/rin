<template>
  <v-app>
    <v-container>
      <h1>東京都の天気</h1>
      <pre v-if="allarea">
発表元: {{ allarea.publishingOffice }}
日時: {{ allarea.reportDatetime }}
地域: {{ allarea.targetArea }}
概要: {{ allarea.text }}
      </pre>
    </v-container>
  </v-app>
</template>

<script>
export default {
  computed: {
    allarea() {
      return this.$store.getters['weather/allarea']
    }
  }
}
</script>

<style scoped>
pre {
  white-space: pre-wrap;
}
</style>





