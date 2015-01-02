
	 	var exec = require('cordova/exec') ; 
	module.exports = {
    start: function(successCallback, errorCallback) {
        //exec(successCallback, errorCallback, "ContactVcardPicker", "getContactVcard", []);
        exec(successCallback, errorCallback, 'GoPlugin', 'start', []);
    },
	stop: function(successCallback, errorCallback) {
		//exec(successCallback, errorCallback, "ContactVcardPicker", "getContactVcard", []);
		console.log("inside stop");
		exec(successCallback, errorCallback, 'GoPlugin', 'stop', []);
}
	};
function success(data)
{
alert("success"+data); 
}

 function failure(data)
{
alert("failure");
}