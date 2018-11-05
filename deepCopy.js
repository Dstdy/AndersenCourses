var objectWithObjects = {
	someNumber: 542,
	someString: "abcdefg",
	someComplexNumber: {
		realPart: 43,
		imaginaryPart: 32
	},
	additionalObject: {
		someLittleNumber: 11,
		littleObjectInIt: {
			twoLetters: "ps",
			word: "cucumber"
		}
	}
};

function deepCopy(objectToCopy) {
	var newObject = {};
	for (var element in objectToCopy) {
		if (typeof(objectToCopy[element]) == "object") {
			newObject[element] = deepCopy(objectToCopy[element]);
		}
		else {
			newObject[element] = objectToCopy[element];
		}
	}
	return newObject;
}
var copiedObject = deepCopy(objectWithObjects);
objectWithObjects.additionalObject.littleObjectInIt.word = "tomato";

console.log(copiedObject.additionalObject.littleObjectInIt.word);