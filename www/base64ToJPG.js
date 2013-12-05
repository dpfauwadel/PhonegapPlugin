var base64ToJPG = {
	createEvent: function(b64String, params, win, fail) {
		cordova.exec(
			win, 
			fail, 
			"Base64ToJPG", 
			"saveImage", 
			[b64String, params]			
		);
	}
}
module.exports = base64ToJPG;