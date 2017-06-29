// Surroundings Variables
var numImagesSurroundings = 0;
var currentImageSurroundings = 1;
var totalWidthSurroundings = 0;
var onScreenSurroundings = false;
var pauseButtonSurroundings = true;
var moveSurroundings;

// Infrastructure Variables
var numImagesInfrastructure = 0;
var currentImageInfrastructure = 1;
var totalWidthInfrastructure = 0;
var onScreenInfrastructure = false;
var pauseButtonInfrastructure = true;
var moveInfrastructure;

// Connectivity Variables
var numImagesConnectivity = 0;
var currentImageConnectivity = 1;
var totalWidthConnectivity = 0;
var onScreenConnectivity = false;
var pauseButtonConnectivity = true;
var moveConnectivity;

// Surroundings MiniGallery Variables
var numImagesSurroundingsMini = 0;
var currentLastImageSurroundingsMini = 4;
var totalWidthSurroundingsMini = 0;

// Infrastructure MiniGallery Variables
var numImagesInfrastructureMini = 0;
var currentLastImageInfrastructureMini = 4;
var totalWidthInfrastructureMini = 0;

// NHWS MiniGallery Variables
var numImagesNHWSMini = 0;
var currentLastImageNHWSMini = 4;
var totalWidthNHWSMini = 0;

// Connectivity MiniGallery Variables
var numImagesConnectivityMini = 0;
var currentLastImageConnectivityMini = 4;
var totalWidthConnectivityMini = 0;


$(document).ready (function() {

	// Setup Surroundings Variables & Surroundings MiniGallery Variables
	$('#surroundings .gallery-li').each (function() {
		numImagesSurroundings++;
		totalWidthSurroundings += 54;

		numImagesSurroundingsMini++;
		totalWidthSurroundingsMini += 15;
	});

	$('#surroundings .gallery-ul').css('width', totalWidthSurroundings + 'vw');
	$('#surroundings-mini .mini-gallery-ul').css('width', totalWidthSurroundingsMini + 'vw');


	// Setup Infrastructure Variables & Infrastructure MiniGallery Variables
	$('#infrastructure .gallery-li').each (function() {
		numImagesInfrastructure++;
		totalWidthInfrastructure += 54;

		numImagesInfrastructureMini++;
		totalWidthInfrastructureMini += 15;
	});

	$('#infrastructure .gallery-ul').css('width', totalWidthInfrastructure + 'vw');
	$('#infrastructure-mini .mini-gallery-ul').css('width', totalWidthInfrastructureMini + 'vw');


	// Setup Connectivity Variables & Connectivity MiniGallery Variables
	$('#connectivity .gallery-li').each (function() {
		numImagesConnectivity++;
		totalWidthConnectivity += 54;

		numImagesConnectivityMini++;
		totalWidthConnectivityMini += 15;
	});

	$('#connectivity .gallery-ul').css('width', totalWidthConnectivity + 'vw');
	$('#connectivity-mini .mini-gallery-ul').css('width', totalWidthConnectivityMini + 'vw');


	// Setup NHWS Mini Gallery Variables
	$('#nhws-mini .mini-gallery-li').each (function() {
		numImagesNHWSMini++;
		totalWidthNHWSMini += 15;
	});

	$('#nhws-mini .mini-gallery-ul').css('width', totalWidthNHWSMini + 'vw');



	// Surroundings click functions
	$('#surroundings .leftbtn').click(function() {
		moveRightSurroundings();
	});

	$('#surroundings .rightbtn').click(function() {
		moveLeftSurroundings();
	});

	$('#surroundings .pause-play-button').click(function() {
		pauseButtonSurroundings = !(pauseButtonSurroundings);
		if (pauseButtonSurroundings) {
			slideshowSurroundings();
			$('#surroundings .pause-play-button').css('background-image', 'url("/Users/Roleen/Desktop/Hot Water Springs/current/css/images/pause.png")');
		} else {
			slideshowSurroundings();
			$('#surroundings .pause-play-button').css('background-image', 'url("/Users/Roleen/Desktop/Hot Water Springs/current/css/images/play.png")');
		}
	});


	// Infrastructure click functions
	$('#infrastructure .leftbtn').click(function() {
		moveRightInfrastructure();
	});

	$('#infrastructure .rightbtn').click(function() {
		moveLeftInfrastructure();
	});

	$('#infrastructure .pause-play-button').click(function() {
		pauseButtonInfrastructure = !(pauseButtonInfrastructure);

		if (pauseButtonInfrastructure) {
			slideshowInfrastructure();
			$('#infrastructure .pause-play-button').css('background-image', 'url("/Users/Roleen/Desktop/Hot Water Springs/current/css/images/pause.png")');
		} else {
			slideshowInfrastructure();
			$('#infrastructure .pause-play-button').css('background-image', 'url("/Users/Roleen/Desktop/Hot Water Springs/current/css/images/play.png")');
		}
	});

	// Connectivity click functions
	$('#connectivity .leftbtn').click(function() {
		moveRightConnectivity();
	});

	$('#connectivity .rightbtn').click(function() {
		moveLeftConnectivity();
	});

	$('#connectivity .pause-play-button').click(function() {
		pauseButtonConnectivity = !(pauseButtonConnectivity);

		if (pauseButtonConnectivity) {
			slideshowConnectivity();
			$('#connectivity .pause-play-button').css('background-image', 'url("/Users/Roleen/Desktop/Hot Water Springs/current/css/images/pause.png")');
		} else {
			slideshowConnectivity();
			$('#connectivity .pause-play-button').css('background-image', 'url("/Users/Roleen/Desktop/Hot Water Springs/current/css/images/play.png")');
		}
	});


	// Surroundings Mini Gallery click functions
	$('#surroundings-mini .mini-leftbtn').click(function() {
		moveRightSurroundingsMini();
	});

	$('#surroundings-mini .mini-rightbtn').click(function() {
		moveLeftSurroundingsMini();
	});

	// Infrastructure Mini Gallery click functions
	$('#infrastructure-mini .mini-leftbtn').click(function() {
		moveRightInfrastructureMini();
	});

	$('#infrastructure-mini .mini-rightbtn').click(function() {
		moveLeftInfrastructureMini();
	});

	// NHWS Mini Gallery click functions
	$('#nhws-mini .mini-leftbtn').click(function() {
		moveRightNHWSMini();
	});

	$('#nhws-mini .mini-rightbtn').click(function() {
		moveLeftNHWSMini();
	});

	// Connectivity Mini Gallery click functions
	$('#connectivity-mini .mini-leftbtn').click(function() {
		moveRightConnectivityMini();
	});

	$('#connectivity-mini .mini-rightbtn').click(function() {
		moveLeftConnectivityMini();
	});

	// Start or stop Slideshow animations
	$(window).on('scroll load', function() {

		// Surroundings Slideshow
		if ($('#surroundings .gallery-mask:in-viewport').length > 0) {
			if (!(onScreenSurroundings)) {
				onScreenSurroundings = true;
				setTimeout(slideshowSurroundings, 2000);
			}
		}
		else {
			onScreenSurroundings = false;
			slideshowSurroundings();
		}

		// Infrastructure Slideshow
		if ($('#infrastructure .gallery-mask:in-viewport').length > 0) {
			if (!(onScreenInfrastructure)) {
				onScreenInfrastructure = true;
				setTimeout(slideshowInfrastructure, 2000);
			}
		}
		else {
			onScreenInfrastructure = false;
			slideshowInfrastructure();
		}

		// Connectivity Slideshow
		if ($('#connectivity .gallery-mask:in-viewport').length > 0) {
			if (!(onScreenConnectivity)) {
				onScreenConnectivity = true;
				setTimeout(slideshowConnectivity, 2000);
			}
		}
		else {
			onScreenConnectivity = false;
			slideshowConnectivity();
		}
	});

});

// Surrounding Slideshow Functions
function slideshowSurroundings() {

	if (moveSurroundings != null) {
		clearInterval(moveSurroundings);
	}

	if (onScreenSurroundings && pauseButtonSurroundings) {
		moveSurroundings = setInterval(function() {
			if (currentImageSurroundings < numImagesSurroundings) {
				moveLeftSurroundings();
			} else {
				moveLeftEndSurroundings();
			}
		}, 5000);
	}
}

function moveLeftSurroundings() {
	if (currentImageSurroundings < numImagesSurroundings) {
		$('#surroundings .gallery-ul').animate({'marginLeft' : '-=54vw'}, 300, 'swing');
		currentImageSurroundings++;

	}
}

function moveLeftEndSurroundings() {
	$('#surroundings .gallery-ul').animate({'marginLeft' : '0vw'}, 1000, 'swing');
	currentImageSurroundings = 1;
}

function moveRightSurroundings() {
	if (currentImageSurroundings > 1) {
		$('#surroundings .gallery-ul').animate({'marginLeft' : '+=54vw'}, 300, 'swing');
		currentImageSurroundings--;

	}
}


// Infrastructure Slideshow Functions
function slideshowInfrastructure() {

	if(moveInfrastructure != null) {
		clearInterval(moveInfrastructure);
	}

	if (onScreenInfrastructure && pauseButtonInfrastructure) {

		moveInfrastructure = setInterval(function() {
			if (currentImageInfrastructure < numImagesInfrastructure) {
				moveLeftInfrastructure();
			} else {
				moveLeftEndInfrastructure();
			}
		}, 5000);
	}
}

function moveLeftInfrastructure() {
	if (currentImageInfrastructure < numImagesInfrastructure) {
		$('#infrastructure .gallery-ul').animate({'marginLeft' : '-=54vw'}, 300, 'swing');
		currentImageInfrastructure++;

	}
}

function moveLeftEndInfrastructure() {
	$('#infrastructure .gallery-ul').animate({'marginLeft' : '0vw'}, 1000, 'swing');
	currentImageInfrastructure = 1;
}

function moveRightInfrastructure() {
	if (currentImageInfrastructure > 1) {
		$('#infrastructure .gallery-ul').animate({'marginLeft' : '+=54vw'}, 300, 'swing');
		currentImageInfrastructure--;

	}
}

// Connectivity Slideshow Functions
function slideshowConnectivity() {

	if(moveConnectivity != null) {
		clearInterval(moveConnectivity);
	}

	if (onScreenConnectivity && pauseButtonConnectivity) {

		moveConnectivity = setInterval(function() {
			if (currentImageConnectivity < numImagesConnectivity) {
				moveLeftConnectivity();
			} else {
				moveLeftEndConnectivity();
			}
		}, 5000);
	}
}

function moveLeftConnectivity() {
	if (currentImageConnectivity < numImagesConnectivity) {
		$('#connectivity .gallery-ul').animate({'marginLeft' : '-=54vw'}, 300, 'swing');
		currentImageConnectivity++;

	}
}

function moveLeftEndConnectivity() {
	$('#connectivity .gallery-ul').animate({'marginLeft' : '0vw'}, 1000, 'swing');
	currentImageConnectivity = 1;
}

function moveRightConnectivity() {
	if (currentImageConnectivity > 1) {
		$('#connectivity .gallery-ul').animate({'marginLeft' : '+=54vw'}, 300, 'swing');
		currentImageConnectivity--;

	}
}


// Surroundings Mini Gallery Functions
function moveLeftSurroundingsMini() {
	if (currentLastImageSurroundingsMini < numImagesSurroundingsMini) {
		$('#surroundings-mini .mini-gallery-ul').animate({'marginLeft' : '-=15vw'}, 300, 'swing');
		currentLastImageSurroundingsMini++;

	}
}

function moveRightSurroundingsMini() {
	if (currentLastImageSurroundingsMini > 4) {
		$('#surroundings-mini .mini-gallery-ul').animate({'marginLeft' : '+=15vw'}, 300, 'swing');
		currentLastImageSurroundingsMini--;
	}
}


// Infrastructure Mini Gallery Functions
function moveLeftInfrastructureMini() {
	if (currentLastImageInfrastructureMini < numImagesInfrastructureMini) {
		$('#infrastructure-mini .mini-gallery-ul').animate({'marginLeft' : '-=15vw'}, 300, 'swing');
		currentLastImageInfrastructureMini++;
	}
}

function moveRightInfrastructureMini() {
	if (currentLastImageInfrastructureMini > 4) {
		$('#infrastructure-mini .mini-gallery-ul').animate({'marginLeft' : '+=15vw'}, 300, 'swing');
		currentLastImageInfrastructureMini--;
	}
}


// NHWS Mini Gallery Functions
function moveLeftNHWSMini() {
	if (currentLastImageNHWSMini < numImagesNHWSMini) {
		$('#nhws-mini .mini-gallery-ul').animate({'marginLeft' : '-=15vw'}, 300, 'swing');
		currentLastImageNHWSMini++;
	}
}

function moveRightNHWSMini() {
	if (currentLastImageNHWSMini > 4) {
		$('#nhws-mini .mini-gallery-ul').animate({'marginLeft' : '+=15vw'}, 300, 'swing');
		currentLastImageNHWSMini--;
	}
}


// Connectivity Mini Gallery Functions
function moveLeftConnectivityMini() {
	if (currentLastImageConnectivityMini < numImagesConnectivityMini) {
		$('#connectivity-mini .mini-gallery-ul').animate({'marginLeft' : '-=15vw'}, 300, 'swing');
		currentLastImageConnectivityMini++;
	}
}

function moveRightConnectivityMini() {
	if (currentLastImageConnectivityMini > 4) {
		$('#connectivity-mini .mini-gallery-ul').animate({'marginLeft' : '+=15vw'}, 300, 'swing');
		currentLastImageConnectivityMini--;
	}
}
