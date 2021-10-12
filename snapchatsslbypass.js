/*
	This script bypasses SSL pinning for SnapChat has and may change in the future.
	This is for educational purposes only.
	
	To run, run the following command:
	frida -U -f com.toyopagroup.picaboo --no-pause -l snapchatsslbypass.js
*/

Interceptor.attach(ObjC.classes.SCNNetworkTypesCertPins["- hosts"].implementation, {
onEnter: function (args) {
    
},
onLeave: function (retval) {
    console.log('Overriding -> SCNNetworkTypesCertPins hosts : ');
    retval.replace(0x0)
}
});


console.log('Successfully Initalized SSL Bypass...');
