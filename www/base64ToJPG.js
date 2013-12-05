cordova.define("rd.tands.base64ToJPG.base64ToJPG", function(require, exports, module) {var base64ToJPG = {
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
}
module.exports = base64ToJPG;});
