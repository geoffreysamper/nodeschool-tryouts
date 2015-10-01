function countWords(inputWords) {
    return inputWords.reduce(function (mapObject, word) {
		var count = mapObject[word];
		
		if (!count) {
			count = 1;
			mapObject[word] = count;
		}
		else {
			mapObject[word]++;

		}
		return mapObject;	
	}, {});
}

module.exports = countWords
																																																																									