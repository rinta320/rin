<template>
  <v-app>
    <v-container>
      <h1>東京都データ</h1>
      <v-btn color="primary" @click="goToWeather">押してね</v-btn>
    </v-container>
  </v-app>
</template>

<script>
export default {
  methods: {
    async goToWeather() {
      await this.$store.dispatch('weather/fetcharea')
      this.$router.push('/weather')
    }
  }
}
</script>




