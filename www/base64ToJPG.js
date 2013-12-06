cordova.define("rd.tands.base64ToJPG", function(require, exports, module){
    var exec = require("cordova/exec");
    
    var base64ToJPG = {
        saveImage: function (b64String, successCallback, failCallback)
        {
            function success(args) {
                if (typeof successCallback === 'function')
                    successCallback(args);
            }

            function fail(args) {
                if (typeof failCallback === 'function')
                    failCallback(args);
            }
            
            return exec(
                function (args) { success(args); },
                function (args) { fail(args); },
                'base64ToJPG',
                'saveImage',
                [b64String]);
        }
    }
    module.exports = base64ToJPG;
});
