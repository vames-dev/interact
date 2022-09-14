played_sound = false

window.addEventListener('message', function(event) {
	var sound = new Audio('sound.mp3');
	sound.volume = 0.2;
	if (event.data.action == 'open') {
		key = event.data.key;
		message = event.data.message;
        $('#circle_e').addClass('started')
        $('#circle_e').html(key)
		$('#message').html(message);
		if (played_sound == false) {
            sound.play();
			played_sound = true;
		}
	} else if (event.data.action == 'close') {
        played_sound = false;
        $('#circle_e').removeClass('started')
        $('#circle_e').html('')
        $('#message').html('');
	}
})
