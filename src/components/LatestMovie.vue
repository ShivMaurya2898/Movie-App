<template>

  <v-container v-if="loading">
    <div class="text-xs-center">
      <v-progress-circular
        indeterminate
        :size="150"
        :width="8"
        color="green">
      </v-progress-circular>
    </div>
  </v-container>

  <v-container v-else grid-list-xl>
    <v-layout wrap class="layoutResponsive">
      <v-flex xs4
        v-for="(item, index) in wholeResponse"
        :key="index"
        mb-2>
        <v-card color="red" class="rounded-lg" style="border-color: #c1c1c1, border-radius: 20px">
          <v-img
            contain
            :src="item.Poster"
            aspect-ratio="1"
          ></v-img>

          <v-card-title primary-title>
            <div class="headerClass">
              <h2>{{item.Title}}</h2>
              <div>Year: {{item.Year}}</div>
              <div>Type: {{item.Type}}</div>
              <div>IMDB-id: {{item.imdbID}}</div>
            </div>
          </v-card-title>

          <v-card-actions class="justify-center">
            <v-btn flat
              color="white"
              @click="singleMovie(item.imdbID)"
              >View</v-btn>
          </v-card-actions>

        </v-card>
      </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
import movieApi from '@/services/MovieApi'

export default {
  data () {
    return {
      wholeResponse: [],
      loading: true
    }
  },
  mounted () {
    movieApi.fetchMovieCollection('harry potter')
      .then(response => {
        this.wholeResponse = response.Search
        this.loading = false
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    singleMovie (id) {
      this.$router.push('/movie/' + id)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .v-progress-circular
    margin: 1rem
</style>
<style scoped>
.headerClass{
    white-space: nowrap ;
    word-break: normal;
    overflow: hidden ;
    text-overflow: ellipsis;
}
@media (min-width: 400px) and (max-width: 768px){
  .layout.wrap{
    flex-direction: column !important;
  }
  .flex.xs4{
    max-width: 100%;
  }
  .flex.xs6{
    max-width: 100% !important;
    flex-basis: none;
  }
}
</style>