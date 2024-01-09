let albumCoverArt = null;
let trackTitle = null;
let artist = null;

function wallpaperMediaPropertiesListener(event) {
	// Update title and artist labels
	trackTitle.textContent = event.title;
	artist.textContent = event.artist;
}
function wallpaperMediaThumbnailListener(event) {
	// Update album cover art
	if (event.thumbnail === 'data:image/png;base64,') {
        albumCoverArt.src = "img/blank_song.jpg";
    } else {
        albumCoverArt.src = event.thumbnail;
    }
	document.body.style['background-color'] = event.primaryColor;
	trackTitle.style.color = event.textColor;
	artist.style.color = event.textColor;
}

// Find all required elements
albumCoverArt = document.getElementById('albumCoverArt');
trackTitle = document.getElementById('trackTitle');
artist = document.getElementById('artist');

window.wallpaperRegisterMediaPropertiesListener(wallpaperMediaPropertiesListener);
// Register the media thumbnail listener provided by Wallpaper Engine.
+window.wallpaperRegisterMediaThumbnailListener(wallpaperMediaThumbnailListener);