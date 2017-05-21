<template>
<div class="container-fluid col-xs-6">
  <div class="myitunes">
  <h1>Playlist</h1>
      <div v-for='prop in song.songs'>
          <img :src="prop.artworkUrl100" alt="" height="100px">
          <h4>Song: {{prop.trackCensoredName}}</h4>
          <h3>Artist: {{prop.artistName}}</h3>
          <audio controls>
            <source :src="prop.previewUrl" type="audio/ogg">
            <source :src="prop.previewUrl" type="audio/mpeg">
          </audio>
          <button @click='removeTrack(prop)'>Remove from Playlist</button>
        <button @click="">+</button>
        <button @click="">-</button>
        </div>
        <button @click="getTrack"> Playlist</button>
  </div>
</div>
</template>

<script>
import mytunes from '../services/mytunes-service'
export default {
  name: 'myitunes',
  data () {
    
    return {
      
      song: mytunes.getTracks()
    }
  },
  methods:{
    removeTrack(prop){
      mytunes.removeTrack(prop)
    },
    
    getTrack(){
      this.song = mytunes.getTracks()
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
