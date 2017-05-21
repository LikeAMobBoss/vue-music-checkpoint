<template>
<div class="container-fluid col-xs-6">
  <div class="itunes">
  <h1>Find Music</h1>
   <form @submit.prevent="search">
            <input v-model="query">
            <button type="submit">Find</button>
        </form>
        <div v-for='prop in song'>
          <img :src="prop.artworkUrl100" alt="" height="100px">
           <h4>Song: {{prop.trackCensoredName}}</h4>
          <h3>Artist: {{prop.artistName}}</h3>
          <audio controls>
            <source :src="prop.previewUrl" type="audio/ogg">
            <source :src="prop.previewUrl" type="audio/mpeg">
          </audio>
          <button @click="addSong(prop)">Add Song to Playlist</button>
        </div>
        </div>
        </div>
</template>

<script>
import itune from '../services/itunes-service'
import mytunes from '../services/mytunes-service'
export default {
  name: 'itunes',
  data () {
    return {
      query: '',
      song: []
    }
  },
   methods: {
    search(){
      itune.getMusicByArtist(this.query).then(songs=>{
          this.song = JSON.parse(songs).results
          console.log(this.song)
      })
    },
    
      addSong(item){
        debugger
        mytunes.addTrack(item)
      }
    }
  }
</script>


<style>
/**
* YOU SHOULD PROBABLY MAKE THIS LOOK BETTER :)
* BOOTSTRAP IS FOR THE WEAK FLEXBOX IS KING
* -- McCall
**/

</style>