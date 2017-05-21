<template>
  <div class="home">
    <!-- YOU WILL PROBABLY END UP WITH SOMETHING LIKE THIS -->
    <itunes class="itunes"></itunes>
    <mytunes class="my-tunes"></mytunes>
  </div>
</template>

<script>
import mytunes from '@/components/MyTunes'
import itunes from '@/components/Itunes'
export default {
  name: 'home',
  data () {
    return {
      
    }
  },
  components:{mytunes,itunes}
}
</script>


<style>



</style>
