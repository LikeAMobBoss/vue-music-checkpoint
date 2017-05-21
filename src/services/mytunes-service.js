import Vue from 'vue'

let myTunes = {songs: []}

// THESE ARE SIMPLE HELPER FUNCTIONS TO KEEP YOUR MYTUNES IN LOCAL STORAGE
// WE WILL EVENTUALLY BE REPLACING THESE GUYS BUT NOT TODAY :)
// NOTICE HOWEVER THAT THESE FUNCTIONS ARE NOT GOING TO BE EXPORTED BECAUSE 
// THE COMPONENT SHOULD NEVER BE RESPONSIBLE FOR ACTUALLY CALLING saveMytunes
// PERHAPS YOU SHOULD HAVE THE LIST SAVED WHENEVER IT MUTATES ***CHANGES***
function saveMytunes() {
  localStorage.setItem('myTunes', JSON.stringify(myTunes))
}

function loadMytunes() {
  myTunes = JSON.parse(localStorage.getItem('myTunes')) || {songs: []}
}

loadMytunes()

export default {
  getTracks() { 
    return myTunes
  },
  addTrack(track) {
    // OCCASIONALLY YOU WILL RUN INTO ISSUES WHERE VUE WILL BE
    // UNAWARE THAT A CHANGE HAS OCCURED TO YOUR DATA
    // TO ELIMINATE THIS PROBLEM YOU CAN USE 
    myTunes.songs.push(track)
    Vue.set(myTunes, track.id, track)
    saveMytunes()
    // YOU CAN READ MORE ABOUT VUE.SET HERE
    // https://vuejs.org/v2/api/#Vue-set
   },
  removeTrack(prop) {
    let index = myTunes.songs.indexOf(prop)
    myTunes.songs.splice(index, 1)
    saveMytunes()
   },
  promoteTrack(prop) {
    let index = myTunes.indexOf(prop)
    myTunes[index] +=1
    saveMytunes()
   },
  demoteTrack(prop) { 
    let index = myTunes.indexOf(prop)
    myTunes[index] -=1
    saveMytunes()
   },
  }
