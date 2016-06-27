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
                '<div class="col-xs-12 col-sm-4 col-md-2">' +
                  '<img src="' + song.albumArt + '" alt="album art for ' + song.title + ' by ' + song.artist + '" />' +
                '</div>' +                  
                '<div class="col-xs-12 col-sm-8 col-md-3">' + 
                  '<p><span class="metadata-category">Track:</span> ' + song.title + '</p>' + 
                  '<p><span class="metadata-category">Artist:</span> ' + song.artist + '</p>' + 
                  '<p><span class="metadata-category">Album:</span> ' + song.collection + '</p>' + 
                '</div>' + 
                '<div class="col-xs-12 col-sm-4 col-md-5">' + 
                  '<a href="' + song.preview + '" target="_self"><i class="glyphicon glyphicon-play"></i> Preview</a>' + 
                '</div>' + 
                '<div class="col-xs-12 col-sm-8 col-md-2">' + 
                  '<p><span class="metadata-category">Price:</span> $' + song.songPrice + '</p>' + 
                  '<p><span class="metadata-category">Full Album:</span> $' + song.albumPrice + '</p>' + 
                '</div>' + 
              '</div>' + 
            '</li>';


/*
        document.getElementById('results-list').innerHTML += 
        '<li><img src="' + song.albumArt + '" alt="album art for ' + song.title + ' by ' + song.artist + '" />' + '</br>' 
        + 'Artist: ' + song.artist + '</br>' + 'Title: ' + song.title + '</br>' + 'Album: ' + song.collection + '</br>' 
        + 'Song Price: $' + song.price + '</br>' 
        + '<a href="' + song.preview + '" target="_parent"><i class="glyphicon glyphicon-play"></i> Preview</a>' + '</br>';
*/
    }

}




/*  SONG OBJECT STRUCTURE

songList = [{
  title: 'string - song title',
  albumArt: 'string - url for song album cover art',
  artist: 'string - artistName',
  collection: 'string - album title',
  price: 'number - price of song',
  preview: 'string - url will play the song'
}]

*/