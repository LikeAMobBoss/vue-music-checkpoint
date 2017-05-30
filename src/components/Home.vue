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
.my-tunes{
  display: inline-block;
  min-height: 500px;
  min-width: 50%;
  background: purple;
}
.itunes{
  display: inline-block;
  background: pink;
  min-height: 500px;
  min-width: 45%;
}


</style>
