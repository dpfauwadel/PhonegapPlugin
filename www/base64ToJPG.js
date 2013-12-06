createEvent: function(b64String, params, win, fail) {
		cordova.exec(
			win, 
			fail, 
			"Base64ToJPG", 
			"saveImage", 
			[{
				"b64string" : b64String
			}]			
		);
	}
module.exports = base64ToJPG;});
