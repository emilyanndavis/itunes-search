//Do Not Modify the getMusic function
function getMusic(){
    var artist = document.getElementById('artist').value;
    itunes.getMusicByArtist(artist).then(drawSongs);
}



function drawSongs(songList){

    document.getElementById('results-list').innerHTML = '';

    var searchQuery = document.getElementById('artist').value;
    document.getElementById('results-header').innerHTML = 'showing results for ' + '<strong>' + searchQuery + '</strong>';

    for (var i = 0; i < songList.length; i++) {
        var song = songList[i];

        document.getElementById('results-list').innerHTML += 

            '<li>' + 
              '<div class="row well">' + 
                '<div class="col-xs-12 col-sm-3 col-md-2">' +
                  '<img class="album-art" src="' + song.albumArt + '" alt="album art for ' + song.title + ' by ' + song.artist + '" />' +
                '</div>' +                  
                '<div class="col-xs-12 col-sm-6 col-md-3">' + 
                  '<p class="track-title"><span class="metadata-category">Track:</span> <strong>' + song.title + '</strong></p>' + 
                  '<p><span class="metadata-category">Artist:</span> ' + song.artist + '</p>' + 
                  '<p><span class="metadata-category">Album:</span> ' + song.collection + '</p>' + 
                '</div>' + 
                '<div class="col-xs-12 col-sm-3 col-md-2 col-md-push-5">' + 
                  '<p><span class="metadata-category">Price:</span> $' + song.songPrice + '</p>' + 
                  '<p><span class="metadata-category">Full Album:</span> $' + song.albumPrice + '</p>' + 
                '</div>' + 
                '<div class="col-xs-12 col-sm-12 col-md-5 col-md-pull-2">' + 
                  '<audio controls class="previewer" preload="none">' + 
                    '<source src="' + song.preview + '" type="audio/mp4">' +  
                  '</audio>' + 
                '</div>' + 
              '</div>' + 
            '</li>';

    }

}



/* Previous code for preventing multiple audio tracks from playing simultaneously -- 
-- almost worked but still buggy -- leaving it here so I can dissect it another day -- 

var playing;
var currentSongElem;
document.addEventListener('play', function(event) {
  if (playing) {
    currentSongElem.pause();
  }
  currentSongElem = event.target;
  currentSongElem.play();

  currentSongElem.addEventListener('playing', function() {
    playing = true;
  })
  currentSongElem.addEventListener('pause', function() {
    playing = false;
  })
}, true)

*/


document.addEventListener('play', function(event) {
   var players = document.getElementsByClassName('previewer');
   for(var i = 0; i < players.length; i++) {
     var currentPlayer = players[i];
       if(currentPlayer != event.target) {
           currentPlayer.pause();
       }
   }
}, true);



