
// Number 1
var tripleFive = function() {
	for (var i = 0; i < 3; i++) {
		console.log("Five!");
	}
	return 0
};

// Number 2
var lastLetter = function(inString) {
	var lengthInString = inString.length;
	var lastChar = inString[ lengthInString - 1 ];
	return lastChar;
};

// Number 3
var square = function(inValue) {
	return inValue * inValue;
};

// Number 4
var negate = function(inValue) {
	return -1 * inValue;
};

// Number 5
var toArray = function(inValue1, inValue2, inValue3) {
	var newArray = [ inValue1, inValue2, inValue3 ];
	return newArray;
};

//Number 6
var startsWithA = function(inValue) {
	var firstChar = inValue[0];
	var firstCharCap = firstChar.toUpperCase();

	if (firstCharCap === "A") {
		return true;
	}
	else {
		return false;
	}
};

//Number 7
var excite = function(inValue) {
	return inValue + "!!!";
};

//Number 8
var sunFun = function(inValue) {
	var inValueCap = inValue.toUpperCase();
	var indexValue = inValueCap.indexOf("SUN");
	if (indexValue >= 0) {
		return true;
	}
	else {
		return false;
	}
};

//Number 9
var tiny = function(inValue) {
	if (0 <= inValue && 1 >= inValue) {
		return true;
	}
	else {
		return false;
	}
};

//Number 10
var getSeconds = function(inValue) {
	var timeArray = inValue.split(':');
	var timeHour = timeArray[0];
	timeHour = parseInt(timeHour, 10);
	var timeMinutes = timeArray[1];
	timeMinutes = parseInt(timeMinutes, 10);
	var timeHoursInMinutes = 60 * timeHour;
	var totalTime = timeHoursInMinutes + timeMinutes;
	return totalTime;
};


window.tripleFive = tripleFive;
window.lastLetter = lastLetter;
window.square = square;
window.negate = negate;
window.toArray = toArray;
window.startsWithA = startsWithA;
window.excite = excite;
window.sunFun = sunFun;
window.tiny = tiny;
window.getSeconds = getSeconds;
